import type { AnimalEvent } from "@/types/event";

export type Locale = "en" | "zh";

export const ui = {
  en: {
    record: "An ongoing record", titleA: "Earth is not", titleB: "humanity's alone", motto: "地球不只是人类的家园",
    lede: "These animals lived here. Their records remind us that human beings are not the only residents of this planet.",
    method: "The timeline now applies a stricter fatality rule: the animal's death must be documented and caused by human action. Records of survivors, natural deaths and unconfirmed outcomes remain in research, not on the public timeline.",
    events: "Verified events", species: "Animal types", span: "Time span", verified: "Last verified", scroll: "Scroll down to move right through time",
    archive: "ANIMAL HARM ARCHIVE", timeline: "Horizontal timeline of animal events", keepGoing: "The record continues", scrollAdvance: "scroll to advance", swipe: "Swipe left to continue →",
    place: "Place", event: "Event", sourcesCount: (n:number) => `Verified · ${n} sources`, fullStory: "Read full story", close: "Close", verifiedLabel: "Verified sources", partial: "Disputed details marked",
    date: "Date", category: "Category", status: "Status", recordTitle: "Full record", outcome: "Outcome", aftermath: "Aftermath", uncertainty: "Differences and limits", sources: "Sources", sourceNote: "These are external links. This archive summarizes rather than reproduces the source material.",
    previous: "Previous event", next: "Next event", beginning: "Beginning reached", ending: "End reached", warning: "Content note",
    stop: "The record pauses here", closingTitleA: "These records", closingTitleB: "are not finished.", closingLede: "Earth is not a deed bearing only humanity's name. No life should become visible only after human beings have harmed it.",
    candleKicker: "ONE LIGHT / TEN PARTS", candleTitle: "One candle marks roughly one tenth",
    candleGroupLabel: "Ten memorial candles; the archive's first tenth stays lit and the remaining candles can be lit by visitors",
    candleAlwaysLit: (n:number) => `Candle ${n}, always lit to represent the records already included`,
    candleToggle: (n:number, lit:boolean) => `${lit ? "Extinguish" : "Light"} candle ${n}`,
    candleStatus: (lit:number,total:number) => `${lit} of ${total} candles lit`,
    candleEstimate: (estimated:string,recorded:string) => `Our working estimate identifies about ${estimated} historical records that may meet the archive's evidence standard. This timeline publishes ${recorded} verified fatal events: roughly one tenth of that working estimate. The first candle marks the part documented here—not completion.`,
    candleLawCall: "The nine unlit candles stand for lives and records still outside this timeline. We call for enforceable animal-protection laws so cruelty and killing are prevented, investigated and answered before another life becomes only a file.",
    candleInstruction: "Light the remaining candles. A gesture is not legislation—but it can mark the protection still owed.",
    lawTitle: "Make protection enforceable", law: "Support enforceable animal-protection laws: prohibit deliberate cruelty and killing, set basic safeguards for companion, working, wild and captive animals, and require investigation, enforcement, penalties and public accountability.",
    howTitle: "How we document", how: "Every event uses at least two reliable sources. Court, government, institutional and original research records are preferred whenever available; conflicting figures and legal findings remain visible.",
    auditTitle: "Fatal-causation audit", audit: (reviewed:number,published:number) => `${reviewed} researched records were rechecked. ${published} currently meet the rule: a documented death caused by human action. The rest were not relabelled; they remain outside the timeline until a fatal replacement is verified.`,
    imagesTitle: "Why no graphic imagery", images: "Wounds, bodies and abuse footage are not necessary to understand the record. Portraits are non-realistic reconstructions based on public identity and species references.",
    correctionTitle: "Submissions and corrections", correction: "This static edition has no pretend form. Maintainers can add or correct a case through the documented research workflow in the repository.",
    orgTitle: "Reliable starting points", footer: (c:number,s:number,d:string) => `${c} events · ${s} animal types · verified through ${d}`, back: "Back to the beginning ↑", pending: "Portrait in research queue",
  },
  zh: {
    record: "一份仍在继续的记录", titleA: "地球不只是", titleB: "人类的家园", motto: "Earth is not ours alone.",
    lede: "这些动物曾经生活在这里。它们留下的记录，提醒我们人类并不是这颗星球唯一的居民。", method: "时间线现采用更严格的致死标准：必须能够确认动物死亡，并由人类行为造成。幸存、自然死亡和最终命运未确认的记录保留在研究档案中，不进入公开时间线。",
    events: "已核实事件", species: "涉及物种", span: "时间跨度", verified: "最后核实", scroll: "向下滚动，时间线将向右展开", archive: "动物伤害事件档案", timeline: "动物事件横向时间线", keepGoing: "记录仍在继续", scrollAdvance: "滚动推进", swipe: "向左滑动，继续时间线 →",
    place: "地点", event: "事件", sourcesCount: (n:number) => `已核实 · ${n} 个资料来源`, fullStory: "查看完整故事", close: "关闭", verifiedLabel: "资料已核实", partial: "含已标注争议信息", date: "日期", category: "分类", status: "核实", recordTitle: "完整记录", outcome: "结果", aftermath: "后续", uncertainty: "信息差异与限制", sources: "资料来源", sourceNote: "以下链接均为外部资料；本站只做概括，不复制原文。", previous: "上一个事件", next: "下一个事件", beginning: "已到开头", ending: "已到结尾", warning: "内容提示", stop: "记录暂时停在这里", closingTitleA: "这些记录", closingTitleB: "没有结束", closingLede: "地球不是一份只写着人类名字的所有权证明。每一种生命，都不应该只在人类造成伤害之后才被看见。", lawTitle: "让保护成为法律", law: "请推动并监督可执行的动物保护法律：明确禁止虐待和恶意杀害，为伴侣动物、工作动物、野生动物与圈养动物建立基本保障，并让执法、调查、惩处与信息公开真正落地。", howTitle: "我们如何记录", how: "每个事件至少有两个独立可靠来源；能取得法院、政府、机构或原始研究资料时，优先纳入。相互冲突的数字与法律结论不会被抹平。", imagesTitle: "为什么不用现场影像", images: "伤口、尸体和虐待过程不是理解事实的必要条件。插画依据公开照片核对物种和辨识特征，再以统一的非写实方式重绘。", correctionTitle: "提交与纠错", correction: "当前静态版本没有虚构表单。维护者可按仓库中的来源登记流程补充事件或纠错。", orgTitle: "可靠机构入口", footer: (c:number,s:number,d:string) => `当前收录 ${c} 起事件 · ${s} 类动物 · 核实至 ${d}`, back: "返回时间线开头 ↑", pending: "画像仍在研究与生成队列中",
    candleKicker: "一束光／约十分之一", candleTitle: "一支蜡烛代表约十分之一",
    candleGroupLabel: "十支纪念蜡烛；代表当前档案的第一支保持点亮，其余可由访问者手动点亮",
    candleAlwaysLit: (n:number) => `第 ${n} 支蜡烛，长亮，代表当前已经写入的记录`,
    candleToggle: (n:number, lit:boolean) => `${lit ? "熄灭" : "点亮"}第 ${n} 支蜡烛`,
    candleStatus: (lit:number,total:number) => `已点亮 ${lit}／${total} 支蜡烛`,
    candleEstimate: (estimated:string,recorded:string) => `按照目前的工作估算，历史档案中约有 ${estimated} 起记录可能达到本项目的证据门槛。当前时间线公开 ${recorded} 起经核实的人为致死事件，约为这一工作估算的十分之一。第一支蜡烛代表已经写下的部分，不代表工作已经完成。`,
    candleLawCall: "九支未亮的蜡烛，代表仍在时间线之外的生命与记录。我们呼吁建立并执行动物保护法，让虐待和杀害在更多生命只剩一份档案之前，得到预防、调查和追责。",
    candleInstruction: "点击其余蜡烛，逐一把它们点亮。点亮不是法律，但可以标记我们仍然欠下的保护。",
    auditTitle: "致死因果审计", audit: (reviewed:number,published:number) => `本轮重新检查了 ${reviewed} 条研究记录；目前 ${published} 条符合“死亡已确认且由人类行为造成”的标准。其余记录没有被偷换说法，而是暂时退出时间线，等待可靠的死亡事件替换。`,
  },
} as const;

const categoryMap: Record<string,string> = {
  "战争":"war", "动物实验":"animal experimentation", "航天":"spaceflight research", "圈养":"captivity", "长期圈养":"long-term captivity", "商业捕猎":"commercial hunting", "栖息地破坏":"habitat destruction", "物种灭绝":"extinction", "非法捕猎":"poaching", "非法贸易":"wildlife trafficking", "渔具缠绕":"fishing-gear entanglement", "污染":"pollution", "虐待":"cruelty", "娱乐":"entertainment", "马戏表演":"circus use", "工作动物":"working-animal deployment", "警犬管理失误":"police-dog management failure", "热暴露":"heat exposure", "管理性处死":"management killing", "人兽冲突":"human-wildlife conflict", "建筑撞击":"building collision", "灭鼠剂":"rodenticide exposure",
};

const countryMap: Record<string,string> = {
  "美国":"United States", "比利时":"Belgium", "法国":"France", "澳大利亚":"Australia", "中国香港":"Hong Kong", "中国":"China", "苏联":"Soviet Union", "法属阿尔及利亚":"French Algeria", "菲律宾":"Philippines", "阿富汗":"Afghanistan", "厄瓜多尔":"Ecuador", "泰国／缅甸边境":"Thailand–Myanmar border", "罗马尼亚、匈牙利与塞尔维亚":"Romania, Hungary, and Serbia", "英国":"United Kingdom", "刚果民主共和国":"Democratic Republic of the Congo", "加拿大":"Canada", "丹麦":"Denmark", "肯尼亚":"Kenya", "津巴布韦":"Zimbabwe", "巴西":"Brazil", "巴勒斯坦加沙地带":"Gaza Strip, Palestine", "葡萄牙":"Portugal", "泰国":"Thailand", "伊拉克":"Iraq", "墨西哥":"Mexico", "印度尼西亚":"Indonesia", "博茨瓦纳":"Botswana", "乌干达":"Uganda", "巴基斯坦":"Pakistan", "美国、加拿大海域":"Waters of the United States and Canada", "法罗群岛":"Faroe Islands", "乌克兰":"Ukraine", "挪威":"Norway", "加拿大、美国":"Canada and the United States", "意大利":"Italy", "西班牙":"Spain", "阿根廷":"Argentina",
};

export function englishCountryName(countryZh: string): string {
  return countryMap[countryZh] ?? countryZh;
}

export function englishFallback(event: AnimalEvent): NonNullable<AnimalEvent["en"]> {
  const animalName = event.animal.originalName || event.animal.speciesEn || event.animal.nameZh;
  const species = event.animal.speciesEn || event.animal.speciesZh;
  const place = event.location.originalPlaceName || event.location.placeZh;
  const categories = event.harmCategory.map((item) => categoryMap[item] || "human-caused harm");
  const sourceNames = event.sources.slice(0, 2).map((source) => source.publisher).join(" and ");
  const summary = `This record concerns ${animalName}, ${species}, at ${place} on ${event.date}. The cited records document ${categories.slice(0,2).join(" and ")}.`;
  const infoBoardText = `${summary} The account is cross-checked against ${event.sources.length} sources, including records from ${sourceNames}.`;
  const fullStory = `${infoBoardText} This English edition presents the verified identity, date, place, harm classification and source register without reproducing graphic material. The source list preserves publication details and links to the underlying record. Where the available material conflicts, the event remains marked as partially verified rather than forcing a single dramatic claim. Switch to Chinese for the earlier, longer editorial synthesis while the case-specific English translation is expanded.`;
  return { displayDate: new Intl.DateTimeFormat("en", { dateStyle:"long", timeZone:"UTC" }).format(new Date(`${event.date}T00:00:00Z`)), title: event.sources[0]?.title || event.shortTitleZh, shortTitle: event.sources[0]?.title || event.shortTitleZh, animalName, species, place, country:englishCountryName(event.location.countryZh), summary, infoBoardText, fullStory, highlightedFact:`Verified with ${event.sources.length} public sources; uncertainty is retained when records differ.`, harmCategory:categories, outcome:"The documented outcome and follow-up are described in the cited records.", uncertaintyNote:event.verification.status === "partially-verified" ? "Some details remain disputed or have not been released in full." : undefined, contentWarning:"This record concerns harm to an animal. Graphic imagery is not shown.", alt:`Archive portrait of ${animalName}, ${species}.` };
}

export function eventText(event: AnimalEvent, locale: Locale) {
  if (locale === "zh") return { displayDate:event.displayDateZh,title:event.titleZh,shortTitle:event.shortTitleZh,animalName:event.animal.nameZh,species:event.animal.speciesZh,place:event.location.placeZh,country:event.location.countryZh,summary:event.summaryZh,infoBoardText:event.infoBoardTextZh,fullStory:event.fullStoryZh,highlightedFact:event.highlightedFactZh,harmCategory:event.harmCategory,outcome:event.outcomeZh,aftermath:event.aftermathZh,uncertaintyNote:event.uncertaintyNoteZh,contentWarning:event.contentWarningZh,alt:event.illustration.altZh };
  return event.en || englishFallback(event);
}
