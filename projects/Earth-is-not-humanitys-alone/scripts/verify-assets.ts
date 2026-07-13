import fs from "node:fs";
import path from "node:path";
import { events, reviewedEvents } from "../data/events";
const missing = reviewedEvents.flatMap((event) => [event.illustration.promptFile, ...(event.illustration.generationStatus === "generated" ? [event.illustration.src] : [])].filter((file) => !fs.existsSync(path.join(process.cwd(), file.startsWith("/") ? `public${file}` : file))).map((file) => `${event.id}: ${file}`));
if (missing.length) { console.error(missing.join("\n")); process.exit(1); }
console.log(`素材校验通过：研究库 ${reviewedEvents.filter(e=>e.illustration.generationStatus==="generated").length} 张插画，当前时间线 ${events.length} 张；没有缺失引用。`);
