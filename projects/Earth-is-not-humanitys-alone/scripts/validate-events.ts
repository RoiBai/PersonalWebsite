import fs from "node:fs";
import path from "node:path";
import { events, reviewedEvents } from "../data/events";
import { animalEventsSchema } from "../schemas/eventSchema";
import { fatalityAuditExclusions } from "../lib/fatalityAudit";
import { timelineVisualDiversityExclusions } from "../lib/timelineVisualDiversity";
import { eventText } from "../lib/i18n";

const forbidden = /lorem ipsum|placeholder|\bTBD\b|待补充|虚构案例/i;
const cjk = /[\u3400-\u9fff]/;
const ids = new Set<string>(); const slugs = new Set<string>(); const errors: string[] = [];
animalEventsSchema.parse(reviewedEvents);
for (const [index, event] of reviewedEvents.entries()) {
  if (ids.has(event.id)) errors.push(`重复 id: ${event.id}`); ids.add(event.id);
  if (slugs.has(event.slug)) errors.push(`重复 slug: ${event.slug}`); slugs.add(event.slug);
  if (index > 0 && reviewedEvents[index - 1].date > event.date) errors.push(`时间顺序错误: ${event.id}`);
  if (event.sources.length < 2) errors.push(`来源少于两个: ${event.id}`);
  if (!event.sources.some((source) => source.isPrimary)) errors.push(`缺少一手来源: ${event.id}`);
  if (!event.illustration.altZh.trim()) errors.push(`缺少 alt: ${event.id}`);
  if (event.illustration.generationStatus === "generated" && !fs.existsSync(path.join(process.cwd(), "public", event.illustration.src))) errors.push(`图片不存在: ${event.illustration.src}`);
  if (event.illustration.generationStatus === "needs-generation" && !fs.existsSync(path.join(process.cwd(), event.illustration.promptFile))) errors.push(`待生成插画缺少队列说明: ${event.id}`);
  if (event.illustration.generationStatus === "not-available") errors.push(`插画状态不可发布: ${event.id}`);
  if (forbidden.test(JSON.stringify(event))) errors.push(`发现占位文字: ${event.id}`);
  if (!(["verified", "partially-verified"] as string[]).includes(event.verification.status)) errors.push(`未验证事件进入前台: ${event.id}`);
  const english = eventText(event, "en");
  if (cjk.test(english.place) || cjk.test(english.country)) errors.push(`英文地点仍含中文: ${event.id} (${english.place}, ${english.country})`);
}
for (const event of events) if (fatalityAuditExclusions.has(event.id)) errors.push(`未通过致死因果审计的事件进入前台: ${event.id}`);
for (const event of events) if (timelineVisualDiversityExclusions.has(event.id)) errors.push(`相邻同物种精简事件进入前台: ${event.id}`);
if (reviewedEvents.length - events.length !== fatalityAuditExclusions.size + timelineVisualDiversityExclusions.size) errors.push("研究库与前台排除清单数量不一致");
for (let index = 1; index < events.length; index += 1) {
  const previous = events[index - 1];
  const current = events[index];
  if (previous.animal.speciesZh === current.animal.speciesZh || previous.animal.speciesEn === current.animal.speciesEn) {
    errors.push(`时间线上存在相邻同物种: ${previous.id} -> ${current.id}`);
  }
}
if (errors.length) { console.error(errors.join("\n")); process.exit(1); }
console.log(`数据校验通过：研究库 ${reviewedEvents.length} 个事件，严格致死时间线 ${events.length} 个事件，致死审计暂缓 ${fatalityAuditExclusions.size} 个，相邻同物种精简 ${timelineVisualDiversityExclusions.size} 个；${reviewedEvents.reduce((sum, e) => sum + e.sources.length, 0)} 条来源，${reviewedEvents.filter(e=>e.illustration.generationStatus==="generated").length} 张已生成插画。`);
