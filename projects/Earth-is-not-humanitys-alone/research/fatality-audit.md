# 人类致死因果审计

最后核实：2026-07-13。

## 审计结论

本轮先对原有 200 条研究记录逐条检查“动物是否已经死亡”以及“公开证据是否足以把死亡归因于人类行为”，再补充调查 86 条符合相同严格标准的新记录。原来的选题范围是“遭受人类伤害”，因此其中包含幸存者、后来自然死亡的动物、最后目击但没有确认死亡的动物，以及同一群体中既有死亡也有幸存者的记录。它们不能直接改写成“因人类死亡”。

- 已调查记录：286 条。
- 符合严格致死标准：200 条；其中 191 条进入公开时间线。
- 暂时退出公开时间线：86 条。
- 仅因相邻同物种视觉精简而保留在研究库：9 条。
- 本轮补充：新增 86 条严格致死记录，填补原审计留下的公开缺口；没有把暂缓记录改写成致死事件。
- 开头替换：移除珍宝与托普西，新增“巴拉克拉瓦轻骑兵团战马群”和“棕狗事件中的无名犬”。

严格致死标准同时要求：死亡已经确认；死亡是人类直接行为或能够由资料明确支持的人类造成事故、污染、战争、捕猎、圈养管理或遗弃的结果；至少两个来源；至少一个一手或同期机构来源。仅有“人类曾伤害这只动物”、物种总体受人类影响、动物后来因癌症、年老、感染等原因死亡，或最终命运不明，均不通过。

## 暂缓记录分类

### A. 主人公幸存，或事件没有确认主人公死亡（44）

`jackie-1918`、`chips-war-dog`、`sergeant-reckless-korean-war`、`belka-strelka-orbit`、`veterok-ugolyok`、`nemo-vietnam-dog`、`harlow-isolation-monkeys`、`silver-spring-1981`、`sefton-hyde-park-horse`、`peanut-1984`、`gucci-dog-cruelty-law`、`motala-1999`、`pony-orangutan-rescue`、`ming-harlem-tiger`、`beauty-2005`、`winter-2005`、`leo-snow-leopard-rescue`、`maggie-alaska-relocation`、`susie-dog-north-carolina`、`silent-knight-2010`、`anne-2011`、`patrick-2011`、`thandi-rhino-poaching`、`lucca-military-dog`、`lucy-puppy-farm-law`、`raju-elephant-rescue`、`sandra-orangutan-rights`、`ponso-abandoned-chimpanzee`、`ustad-t24-relocation`、`caitlyn-2015`、`libre-2016`、`pizza-mall-polar-bear`、`nosey-2017`、`kuno-military-dog`、`fair-oaks-calves`、`mali-polar-bear-thailand`、`kaavan-2020`、`lucy-edmonton-elephant`、`pangolin-lucky-trafficking`、`envigo-2022`、`romeo-manatee-isolation`、`dexter-dog-florida`、`trooper-hurricane-milton`、`marine-trafficking-2026`。

### B. 后来死亡，但直接死因属于自然、年老、疾病或与原伤害因果不足（29）

`martha-1914`、`incas-carolina-parakeet`、`ham-1961`、`enos-1961`、`namu-orca-captivity`、`tokitae-1970`、`mali-1977`、`hugo-orca-death`、`marjan-1995`、`celia-pyrenean-ibex`、`keiko-orca-release`、`qiqi-baiji-dolphin`、`dolly-2003`、`poouli-last-captive-bird`、`kenny-inbred-white-tiger`、`tilikum-2010`、`lonesome-george-pinta`、`lolong-2013`、`hanako-inokashira-elephant`、`arturo-polar-bear`、`toughie-2016`、`finn-2016`、`sudan-northern-white-rhino`、`inuka-polar-bear-euthanasia`、`george-snail-2019`、`estrellita-2022`、`happy-elephant-court`、`kiska-2023`、`papillon-m49-bear`。

这一组并不否定圈养、实验或此前伤害的伦理问题，只表示现有公开资料不足以把最终死亡严格归为人类直接致死。

### C. 最终命运、死亡时间或直接因果没有确认（8）

`booming-ben-heath-hen`、`kauai-oo-last-call`、`last-wild-spix-macaw`、`alala-last-wild-pair`、`christmas-island-pipistrelle-last-call`、`bramble-cay-melomys-extinction`、`snow-cone-2021`、`moon-2022`。

“最后一次目击后消失”不能自动等同于“确认因人类死亡”；物种灭绝的长期人类背景也不能替代单只动物死因证据。

### D. 同一条记录混合了人类致死个体与幸存／自然死亡个体（5）

`able-baker-1959`、`khan-younis-2016`、`mosul-zoo-2017`、`hope-2019`、`australia-reptiles-2024`。

这些记录可以在后续拆分为只围绕已确认死亡个体或群体的新事件，但在拆分、重新写作并重新核对来源之前，不进入严格致死时间线。

## 发布规则

`lib/fatalityAudit.ts` 保存致死审计暂缓 ID 清单，`lib/timelineVisualDiversity.ts` 保存 9 条相邻同物种精简 ID。`data/events.ts` 在 schema 验证后依次执行两层筛选。`scripts/validate-events.ts` 会同时验证 286 条研究记录、191 条前台记录、86 条致死审计暂缓记录和 9 条视觉精简记录，并阻止相邻完全相同物种重新进入生产时间线。新增案例只有完成来源、死因、图片和叙事审查，才能进入公开事件集合。

本次审计是对选题边界的收紧，不代表原先 86 条伤害记录是虚构的；它们仍保留在研究数据中，但不再被误称为人类致死事件。
