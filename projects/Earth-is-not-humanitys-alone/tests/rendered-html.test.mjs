import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the strict human-caused-fatality archive in English by default", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="en">/i);
  assert.match(html, /<title>Earth Is Not Humanity&#x27;s Alone \| Animal Harm Archive<\/title>/i);
  assert.match(html, /FIELD NOTES \/ 001—(?:<!-- -->)?191/);
  assert.match(html, /Verified events/);
  assert.match(html, />191<\/dd>/);
  assert.match(html, /1826(?:<!-- -->)?—(?:<!-- -->)?2026/);
  assert.match(html, /Horizontal timeline of animal events/);
  assert.match(html, /data-event-index="190"/);
  assert.match(html, /One candle marks roughly one tenth/);
  assert.match(html, /286 researched records/i);
});

test("keeps research, prompts, and illustrations synchronized", async () => {
  const [registerText, research, rejected, estimate, animalFiles, promptFiles] = await Promise.all([
    readFile(new URL("../research/source-register.json", import.meta.url), "utf8"),
    readFile(new URL("../research/events-research.md", import.meta.url), "utf8"),
    readFile(new URL("../research/rejected-cases.md", import.meta.url), "utf8"),
    readFile(new URL("../research/coverage-estimate.md", import.meta.url), "utf8"),
    readdir(new URL("../public/animals/", import.meta.url)),
    readdir(new URL("../image-prompts/", import.meta.url)),
  ]);

  const register = JSON.parse(registerText);
  assert.equal(register.events.length, 286);
  assert.ok(register.events.every((event) => event.sourceCount >= 2));
  assert.ok(register.events.every((event) => event.primarySourceIds.length >= 1));
  assert.ok(animalFiles.filter((file) => file.endsWith(".png")).length >= 286);
  assert.ok(promptFiles.filter((file) => file.endsWith(".txt")).length >= 188);
  assert.match(research, /第四轮扩展：新增 100 个中英双语事件/);
  assert.match(research, /公开时间线为 191 条/);
  assert.match(rejected, /第四轮重新审查与暂缓候选/);
  assert.match(rejected, /第五轮严格致死扩展中继续排除的候选/);
  assert.match(estimate, /工作规划数是 2,000 个可发布事件/);
});
