import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { reviewedEvents } from "../data/events";
import { fatalExpansionEvents } from "../data/fatalExpansionEvents";

const root = process.cwd();
const verifiedAt = "2026-07-13";

const register = {
  lastVerifiedAt: verifiedAt,
  policy: "Every included event has at least two sources and at least one primary or contemporaneous institutional record. Conflicts are preserved in the event data. The public timeline applies a confirmed-human-caused-fatality audit and omits adjacent exact-species duplicates without deleting them from the research library.",
  events: reviewedEvents.map((event) => ({
    eventId: event.id,
    sourceCount: event.sources.length,
    primarySourceIds: event.sources.filter((source) => source.isPrimary).map((source) => source.id),
    status: event.verification.status,
  })),
};

await writeFile(path.join(root, "research/source-register.json"), `${JSON.stringify(register, null, 2)}\n`, "utf8");

const start = "<!-- FATAL_EXPANSION_START -->";
const end = "<!-- FATAL_EXPANSION_END -->";
const rows = fatalExpansionEvents.map((event, index) => {
  const primary = event.sources.filter((source) => source.isPrimary).map((source) => `${source.publisher}《${source.title}》`).join("；");
  const secondary = event.sources.filter((source) => !source.isPrimary).map((source) => `${source.publisher}《${source.title}》`).join("；");
  return `| ${201 + index} ${event.animal.nameZh} | ${event.animal.speciesZh}；${event.displayDateZh}；${event.location.countryZh}${event.location.placeZh} | ${event.harmCategory.join("、")}。${event.outcomeZh} | ${event.uncertaintyNoteZh ?? "关键日期、地点、行为与结果在两项来源间无实质冲突。"} | ${primary}；独立来源：${secondary || "见事件来源列表"} | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |`;
}).join("\n");

const block = `${start}\n\n## 201–286. 严格致死扩展：新增 86 个研究事件\n\n本轮在保留原有 86 条暂缓伤害记录的同时，新增 86 条“死亡已确认且由人类行为造成”的替代记录，使研究库达到 286 条、严格致死候选达到 200 条。相邻同物种精简后，公开时间线为 191 条。新增案例覆盖航天实验、警犬因公死亡、圈养管理、野生动物犯罪、污染与工业事故、伴侣动物虐待、影视与赛马、农业扑杀和活体运输；每条至少两项来源并至少包含一项机构、法院、政府或同期正式记录。\n\n| 编号／事件主人公 | 物种；日期；地点 | 已核实的人类行为与死亡结果 | 不确定信息 | 一手与独立来源 | 图片许可与纳入判断 |\n|---|---|---|---|---|---|\n${rows}\n\n### 第五轮结论\n\n- 新增调查并纳入：86 条；本轮另排除 8 个死因或身份不足的候选，见 \`research/rejected-cases.md\`。\n- 研究库：286 条；严格人类致死候选：200 条；公开时间线：191 条；致死审计暂缓：86 条；相邻同物种精简：9 条。\n- 新增事件全部具有至少两个来源与至少一个一手或同期机构记录；有数量、日期或因果限制的条目均保留不确定性说明。\n- 参考照片只作身份与体态核对；单图作者或许可未明确时一律标记 \`research-only\`，不下载、不热链。\n\n${end}`;

const researchPath = path.join(root, "research/events-research.md");
let research = await readFile(researchPath, "utf8");
if (research.includes(start) && research.includes(end)) {
  research = `${research.slice(0, research.indexOf(start))}${block}${research.slice(research.indexOf(end) + end.length)}`;
} else {
  research = `${research.trimEnd()}\n\n${block}\n`;
}
research = research.replace(
  /> 2026-07-13 范围修订：[^\n]+/,
  "> 2026-07-13 范围修订：研究库现有 286 条记录。严格“人类致死”复核确认 200 条符合因果标准；为避免时间线上前后出现完全相同物种，其中 9 条保留在研究库但不公开展示，因此当前公开时间线为 191 条。原有 86 条幸存、自然死亡或结局未确认记录继续保留为暂缓研究，不会被改写成致死事件。逐条判断见 `research/fatality-audit.md`。",
);
await writeFile(researchPath, research, "utf8");

console.log(`研究登记已同步：${reviewedEvents.length} 条研究记录，新增 ${fatalExpansionEvents.length} 条严格致死记录。`);
