# 事件调查记录

最后核实：2026-07-13。检索同时使用英文、当地语言关键词、动物名、机构名、日期、地点以及 `court`、`report`、`investigation`、`official statement` 等组合；纳入前均打开来源正文。前台完整中文叙事见 `data/events.ts`，本文件保留调查判断与图片许可状态。

> 2026-07-13 范围修订：研究库现有 286 条记录。严格“人类致死”复核确认 200 条符合因果标准；为避免时间线上前后出现完全相同物种，其中 9 条保留在研究库但不公开展示，因此当前公开时间线为 191 条。原有 86 条幸存、自然死亡或结局未确认记录继续保留为暂缓研究，不会被改写成致死事件。逐条判断见 `research/fatality-audit.md`。

## 2026-07-13 开头案例替换

### 巴拉克拉瓦轻骑兵团战马群

- 物种／日期／地点：军用马群；1854-10-25；克里米亚巴拉克拉瓦北谷。
- 核实事实：国家陆军博物馆保存原始命令，并记录轻骑兵团673名骑兵、约260名人员伤亡和475匹战马损失。马匹在炮火中死亡，部分重伤后被处死。
- 不确定信息：475是全部“损失”，不等于475匹全部当场死亡；同期资料的死亡、重伤处死和失踪细分不同。
- 一手来源：National Army Museum馆藏原始命令。独立补充：Thomas Morley 1855年小册子数字化本；National Army Museum战役研究页。
- 图片：馆藏页面标注原件 `Out of Copyright`；插画仅依据十九世纪军用马与鞍具的一般形态，不虚构单匹身份。
- 结论：纳入，状态 `partially-verified`；公开文案明确区分“损失”与“当场死亡”。

### 棕狗事件中的无名犬

- 物种／日期／地点：小型棕色梗犬混种；1903-02-02；伦敦大学学院生理学教室。
- 核实事实：UCL馆藏说明与英国议会记录确认，威廉·贝利斯在约60名学生面前进行生理演示，动物随后被杀死。
- 不确定信息：旁听者与实验方对麻醉是否充分、是否重复使用动物和意识状态的证词冲突；贝利斯在诽谤案中胜诉。
- 一手来源：UCL Museums and Collections；UK Parliament Hansard。独立整理：UCL Records Office档案项目。
- 图片：历史照片与纪念像权利状态不一，只作研究；前台生成无实验场景、无伤口的棕色梗犬插画。
- 结论：纳入，状态 `partially-verified`；不把“全程清醒”写成确定事实。

### 被替换的开头案例

- 珍宝与托普西均为真实且来源充分的历史事件，但为了减少开头连续大象，它们退出当时的200条公开选择，由战马群与棕狗替换。
- 相关旧数据与图片没有冒充新事件；新事件均使用独立 slug、来源与专属插画。

## 1. 托普西（Topsy）

- 物种／日期／地点：亚洲象；1903-01-04；美国纽约康尼岛卢纳公园。
- 概述与关键事实：园方经营者决定处死托普西；爱迪生制造公司摄影人员记录并发行电击部分。AFI目录、现存影片、地方历史项目与罗格斯爱迪生文献项目相互印证。
- 不确定信息：此前伤亡人数、氰化物剂量存在版本差异；“爱迪生为电流之战亲自策划”缺少同时代档案支持。
- 一手来源：AFI对1903年影片及爱迪生目录的档案记录。二手来源：Coney Island History Project；Rutgers Edison Papers。
- 图片：Coney Island History Project刊载历史照片；作者与完整权利链未确认，`research-only`。
- 结论：纳入；事件、日期、地点可核实，流行误传可被清楚标注。

## 2. 莱卡（Laika）

- 物种／日期／地点：家犬；1957-11-03；苏联拜科努尔发射场至地球轨道。
- 关键事实：史普尼克2号无返回设计；NASA确认任务与日期，Smithsonian梳理训练和后来修正的死亡时间。
- 不确定信息：早期官方称存活数日；2002年任务资料将死亡改为升空数小时后因过热与压力死亡。
- 一手／二手：NASA历史资料；Smithsonian Institution整理。
- 图片：Smithsonian/NASM档案图，许可未逐项确认，`research-only`。
- 结论：纳入。

## 3. 汉姆（Ham）

- 物种／日期／地点：黑猩猩；1961-01-31；美国卡纳维拉尔角至大西洋。
- 关键事实：NASA SP-39原始报告记录实验对象65号、44个月、37磅、219小时训练和以电击为错误反应后果；汉姆飞行后获救。
- 不确定信息：大众材料对轻伤描述有简化；前台只采用原始报告能确认的内容。
- 一手／二手：NASA SP-39技术报告；NASA Mercury-Redstone历史页。
- 图片：NASA报告内任务照片，具体单图许可需复核，`research-only`。
- 结论：纳入。

## 4. 惠斯勒雪橇犬群

- 物种／日期／地点：工作犬群；2010-04-21至23；加拿大不列颠哥伦比亚省惠斯勒附近。
- 关键事实：法院共同事实记录企业因销售下降要求缩减犬群；BC SPCA开挖确认56具遗体；行为人承认对九只犬造成不必要痛苦。
- 不确定信息：早期工伤与媒体文件称70至100只，法医确认数为56。
- 一手／二手：`R. v. Fawcett`判决；BC省政府雪橇犬法规页；BC SPCA调查更新。
- 图片：省政府一般雪橇犬资料页，仅用于体态参考，`research-only`。
- 结论：纳入，使用“确认56只”而非最高估计。

## 5. 安妮（Anne）

- 物种／日期／地点：亚洲象；2011-01-21至02-15；英国波尔布鲁克。
- 关键事实：判决列明影像显示长期锁链束缚、员工反复踢打并使用工具；经营者三项罪名成立，安妮转移至朗利特。
- 不确定信息：法院也批评调查方延迟提交证据；前台不省略该程序背景，但不将其等同于否定虐待事实。
- 一手／二手：英格兰与威尔士司法机构判决；英国议会委员会报告；Independent庭审报道。
- 图片：议会材料与新闻照片，仅研究参考，`research-only`。
- 结论：纳入。

## 6. 马里乌斯（Marius）

- 物种／日期／地点：网纹长颈鹿；2014-02-09；丹麦哥本哈根动物园。
- 关键事实：健康、约18个月、因基因已充分代表与空间/繁育管理被杀死，随后公开解剖并作为食物。
- 不确定信息：外部安置提议是否满足EAZA繁育与福利要求，各方持续有争议。
- 一手／二手：EAZA 2013–14年度报告；AP/Guardian；National Geographic对园方原声明的整理。
- 图片：Keld Navntoft/AFP/Getty；商业新闻图片，`research-only`。
- 结论：部分核实后纳入并标示争议。

## 7. 塞西尔（Cecil）

- 物种／日期／地点：非洲狮；2015-07-01；津巴布韦万基国家公园边界外。
- 关键事实：佩戴牛津研究项圈；付费狩猎中先中箭、后被追踪杀死。
- 不确定信息：主管机构最初称配额不足、狩猎非法；美国猎人未被起诉，2016年高等法院撤销对向导的指控。
- 一手／二手：津巴布韦公园主管机构同期声明（由Reuters报道）；Oxford WildCRU Cecil Fund报告；Reuters后续法院报道。
- 图片：WildCRU研究报告中的生前照片，许可未逐项确认，`research-only`。
- 结论：部分核实后纳入；不把“非法”当作最终司法定论。

## 8. 哈兰贝（Harambe）

- 物种／日期／地点：西部低地大猩猩；2016-05-28；美国辛辛那提动物园。
- 关键事实：儿童进入展区，园方应急小组射杀哈兰贝；园方解释麻醉不能及时生效。USDA事后认定公共围栏不再有效并要求改进。
- 不确定信息：公开视频无法可靠判断动物意图；不采用网络推断。
- 一手／二手：动物园两份官方声明；USDA调查由TIME/DocumentCloud公开。
- 图片：动物园生前照，许可未明确，`research-only`。
- 结论：纳入。

## 9. 卡万（Kaavan）

- 物种／日期／地点：亚洲象；2020-11-29离开；巴基斯坦伊斯兰堡。
- 关键事实：1985年入园，2012年后长期无同类；伊斯兰堡高院要求迁移动物，FOUR PAWS组织体检与运输，卡万抵达柬埔寨保护区。
- 不确定信息：“世界上最孤独的大象”是传播称呼；早年日常照护没有完整公开记录。
- 一手／二手：法院裁判经Dawn全文报道；FOUR PAWS执行声明；Dawn后续报道。
- 图片：Dawn刊载AFP档案照，`research-only`。
- 结论：纳入。

## 10. 坎伯兰比格犬群

- 物种／日期／地点：比格犬；2022-05-18至9月；美国弗吉尼亚州坎伯兰县。
- 关键事实：司法部搜查、起诉并获法院批准移交超过4,000只犬；约445只在搜查中被认定处于急性困境；2024年企业认罪。
- 不确定信息：4,000多只是移交规模，不等于每只均处于相同伤害状态。
- 一手／二手：美国司法部2022与2024新闻稿；AP认罪报道。
- 图片：司法部新闻稿资料图，具体许可需复核，`research-only`。
- 结论：纳入，明确区分统计口径。

## 11. 芙蕾雅（Freya）

- 物种／日期／地点：大西洋海象；2022-08-14；挪威奥斯陆峡湾。
- 关键事实：当局以持续人身风险为由杀死；公众多次无视距离要求；兽医研究所尸检确认此前健康。
- 不确定信息：转移、隔离与等待是否可行，主管部门、学者与动物保护组织意见不一。
- 一手／二手：挪威兽医研究所尸检发布；Washington Post对渔业主管部门声明的报道；NOAH法律投诉。
- 图片：新闻照片，`research-only`。
- 结论：部分核实后纳入。

## 12. 扬皮尔（Yampil / Borya）

- 物种／日期／地点：亚洲黑熊；2022年10月；乌克兰顿涅茨克州扬皮尔。
- 关键事实：在被战争破坏并遗弃的私人动物园中发现，附近爆炸造成脑震荡；跨国康复后抵达苏格兰。
- 不确定信息：公开来源只到月份精度；2024年麻醉后死亡不能直接归因于2022年创伤。
- 一手／二手：Five Sisters Zoo官方救援史；AP对多名救援人员采访；Ukrainska Pravda后续。
- 图片：Five Sisters Zoo via AP，`research-only`。
- 结论：部分核实后纳入。

## 13. 基斯卡（Kiska）

- 物种／日期／地点：虎鲸；2023-03-09；加拿大安大略省海洋乐园。
- 关键事实：约1979年从冰岛海域被捕；五只幼鲸均早逝；2011年后无其他虎鲸同伴；死亡与省级人员在场监督尸检得到确认。
- 不确定信息：完整尸检未公开，不能把死亡简单归因于单一因素。
- 一手／二手：安大略省司法部长厅确认（经Canadian Press）；AP；CityNews/Canadian Press。
- 图片：Canadian Press/AP场馆与档案图，`research-only`。
- 结论：部分核实后纳入。

## 14–50. 第二轮纳入案例（扩展审计表）

以下 37 项均在 2026-07-12 重新打开来源正文核对；完整中文叙事、逐条来源标题、发布日期、访问日期、图片参考页与许可状态见 `data/additionalEvents.ts`。参考照片一律仅用于身份与外形研究，前台只展示本项目生成的非写实透明背景插画。

| 编号／事件主人公 | 物种；日期；地点 | 已核实的人类行为、结果与后续 | 不确定信息 | 一手来源；独立来源 | 图片与纳入判断 |
|---|---|---|---|---|---|
| 14 艾布尔与贝克 | 恒河猴、松鼠猴；1959-05-28；美国卡纳维拉尔角至大西洋 | 被固定、植入监测装置并发射；两者返回，艾布尔四天后在移除电极的麻醉中死亡；数据用于载人航天 | 术后抢救细节只采用机构档案口径 | NASA；Smithsonian NASM | Smithsonian 藏品页，usage conditions apply；纳入，事件链清楚 |
| 15 伊诺斯 | 黑猩猩；1961-11-29；美国卡纳维拉尔角至大西洋 | 操作性训练与飞行中使用足部电击；设备故障造成 76 次错误电击；两圈后回收 | 1962 年痢疾死亡与飞行无因果关系 | NASA SP-39；Smithsonian NASM | Smithsonian 档案，research-only；纳入 |
| 16 费莉塞特 | 家猫；1963-10-18；法属阿尔及利亚哈马吉尔 | 安装脑电电极并进入探空火箭；活着回收后约两个月被处死研究脑部 | 处死精确日期与部分训练细节未取得原始实验报告 | 法国国防影像档案；Smithsonian Magazine | ImagesDéfense 档案图，research-only；部分核实后纳入 |
| 17 托基塔／洛丽塔 | 虎鲸；约1970年捕获、2023-08-18死亡；美国迈阿密 | 幼年从南方居民虎鲸群捕获，单独圈养多年；死亡后官方尸检记录慢性病变 | 捕获日和直接死因表述在资料中有不同层次 | Miami-Dade necropsy；AP；Miami-Dade resolution | 官方与新闻档案照，research-only；部分核实后纳入 |
| 18 马莉 | 亚洲象；1977年转入、2023-11-28死亡；菲律宾马尼拉 | 幼年被送入马尼拉动物园并长期无同类；尸检确认多项慢性病变 | “世界最孤独”属传播用语；不能把死亡归为单一圈养因素 | Philippine News Agency／马尼拉市；GMA News | 官方与新闻档案，research-only；部分核实后纳入 |
| 19 银泉猴群 | 猕猴；1981年；美国马里兰州银泉 | 实验猴接受神经切断、束缚和训练；警方搜查、诉讼与联邦审计引发动物实验监管争论 | 个别动物状况与定罪在上诉中变化，不能概括为单一司法结论 | U.S. GAO；Washington Post | 国会／新闻档案，research-only；部分核实后纳入 |
| 20 花生 | 锦龟；约1984年发现、1993年救援；美国密苏里州 | 幼体钻入塑料饮料环后壳体持续受限，形成永久收腰；获救后无法放归 | 最初缠绕的准确年份为估计 | Missouri Department of Conservation；CBC | MDC 官方照片，research-only；部分核实后纳入 |
| 21 埃克森·瓦尔迪兹海獭群 | 北方海獭；1989-03-24；美国阿拉斯加威廉王子湾 | 油轮泄漏污染海岸与海獭栖息地；救护、死亡与长期种群影响被官方持续记录 | 找到的遗体不等于全部死亡，长期损失依模型而异 | NOAA；USGS | NOAA/USGS 事故档案，research-only；部分核实后纳入 |
| 22 泰克 | 非洲象；1994-08-20；美国夏威夷檀香山 | 马戏表演中逃出并造成伤亡，随后被警方多次射击死亡；事件推动表演动物讨论 | 枪击次数与部分现场顺序在报道中不完全一致 | Hawaii Legislature；Honolulu Star-Bulletin | 新闻档案，research-only；部分核实后纳入 |
| 23 马尔詹 | 狮；1995年受伤、2002-01-25死亡；阿富汗喀布尔 | 内战中遭手榴弹爆炸后失明并永久伤残；在战乱动物园继续生活 | 爆炸确切日期的公开资料精度有限 | Kabul Zoo／The New Humanitarian；AP/CBS | 机构与新闻档案，research-only；部分核实后纳入 |
| 24 莫塔拉 | 亚洲象；1999年；泰缅边境 | 踩中地雷失去前肢，接受长期治疗与假肢；事件连接战争遗留爆炸物与野生动物伤害 | 踩雷精确日期在不同报道中存在日级差异 | Friends of the Asian Elephant；Reuters/El País | FAE 官方图，research-only；纳入 |
| 25 温特 | 宽吻海豚；2005-12-10；美国佛罗里达蚊子潟湖 | 被捕蟹绳缠绕后失去尾部，无法放归并长期使用辅助器具 | 2021 年肠道疾病死亡不归因于早年缠绕 | Clearwater Marine Aquarium；AP/WBAL | CMA 官方档案，research-only；纳入 |
| 26 美容 | 白头海雕；2005年；美国阿拉斯加 | 被偷猎者枪击摧毁上喙，失去独立取食与放归能力；后接受临时假喙试验 | 准确日期、地点与行为人未公开 | Birds of Prey Northwest；AP/Spokesman-Review | 照护机构照片，research-only；部分核实后纳入 |
| 27 鲁根多家族 | 山地大猩猩群；2007-07-24；刚果（金）维龙加 | 至少五只确认被枪杀，另有幼崽失踪；调查把袭击与非法木炭利益链联系 | 不同阶段确认死亡数不同，策划者与司法结论未完全公开 | Virunga National Park；National Geographic | Brent Stirton 新闻摄影，research-only；部分核实后纳入 |
| 28 塔蒂阿娜 | 西伯利亚虎；2007-12-25；美国旧金山动物园 | 逃出低于行业建议高度的围墙，造成人员伤亡后被警方射杀；园方加高设施 | 逃脱路径与访客行为存在冲突证词 | USDA APHIS investigation；University of Denver study | USDA 调查附件，research-only；部分核实后纳入 |
| 29 特拉维斯 | 黑猩猩；2009-02-16；美国康涅狄格州斯坦福德 | 被私人家庭饲养十四年；严重攻击后被警员射杀；州政府加强危险野生动物限制 | 药物是否影响当天行为无法确定 | Connecticut State’s Attorney；Connecticut AG | 州政府档案，research-only；纳入 |
| 30 提里库姆 | 虎鲸；2010-02-24；美国奥兰多海洋世界 | 长期用于表演与繁殖；互动造成训练员死亡；法院认定近距离工作是已知危险并要求屏障／距离 | 心理状态与2017年死亡不能由倡议材料作单因果推断 | U.S. DOL/OSHRC；Washington Post | 法院与新闻档案，research-only；纳入 |
| 31 深水地平线野生动物群 | 海龟、鲸豚等；2010-04-20起；墨西哥湾 | 约1.34亿加仑原油泄漏87天，造成死亡、疾病与繁殖损失；和解资金用于长期修复 | 总损失依模型与监测口径，收集遗体不是全部 | NOAA DARRP；Associated Press | NOAA 档案，research-only；部分核实后纳入 |
| 32 帕特里克 | 家犬；2011-03-16；美国新泽西州纽瓦克 | 长期饥饿后被装袋丢入垃圾道；获救治疗；州立法以此案推动提高处罚 | 公开材料对从何楼层投入有差异，前台不采用最高说法 | New Jersey Legislature；AP/CBS | 医院与新闻档案，research-only；纳入 |
| 33 O-Six | 灰狼；2012-12-06；美国怀俄明州 | 黄石公园研究母狼在合法狩猎区被射杀；事件推动保护区边界狩猎政策讨论 | 射手身份与动机不作为事实写入 | Yellowstone NPS report；National Geographic | NPS／研究档案，research-only；纳入 |
| 34 Puppy Doe／Kiya | 家犬；2013-08-31；美国马萨诸塞州昆西 | 严重虐待后被发现并安乐死；刑事案件与州级虐待防治工作组留下正式记录 | 医疗细节采用法院与官方摘要，不复述猎奇版本 | Massachusetts Legislature task force；Massachusetts manual | 官方与新闻档案，research-only；纳入 |
| 35 萨陶 | 非洲象；2014年5—6月；肯尼亚察沃 | 具有巨大象牙的已识别雄象被毒箭杀死并割取象牙；保护机构与野生动物部门调查 | 死亡发现日与推定死亡日不同 | Tsavo Trust field report；Kenya Wildlife Service/报道 | Tsavo Trust 识别照，research-only；纳入 |
| 36 凯特琳 | 家犬；2015-05-27发现；美国南卡罗来纳州北查尔斯顿 | 口鼻被胶带紧缠后获救；法院判刑，犬只康复并由寄养家庭收养 | 受伤持续时长为兽医估计 | Charleston Animal Society；Washington Post；WCSC | CAS 官方图，research-only；纳入 |
| 37 朱玛 | 美洲豹；2016-06-20；巴西马瑙斯 | 被军方带到奥运火炬活动；逃脱后遭镇静并被射杀；军方承认展示行为不当 | 现场镇静、逃脱与开枪顺序以军方及主管机构口径为准 | Brazilian Army statement；IPAAM/Agência Brasil | 军方／新闻档案，research-only；部分核实后纳入 |
| 38 利布雷 | 家犬；2016-07-04获救；美国宾夕法尼亚州兰开斯特县 | 在繁殖场严重疏忽中濒死，获救康复；检方调查并促成州法修订 | 行为人责任范围以判决与检方公开记录为准 | Lancaster County DA；Speranza Animal Rescue；WGAL | 救援机构照片，research-only；纳入 |
| 39 汗尤尼斯动物园幸存动物 | 15只圈养动物；2016-08-24撤离；加沙汗尤尼斯 | 战争与经营崩溃后被困，FOUR PAWS撤离包括老虎 Laziz 和五只猴在内的幸存动物 | 园内此前死亡总数与逐只死因不完整 | FOUR PAWS mission report；National Geographic | FOUR PAWS／新闻档案，research-only；部分核实后纳入 |
| 40 文斯 | 白犀牛；2017-03-07；法国托里动物园 | 入侵者在夜间杀死文斯并锯走角；警方与园方调查，案件凸显欧洲动物园内盗猎 | 行为人及最终司法结果未由本轮来源完整确认 | Thoiry Zoo statement；Reuters/Guardian | 园方与新闻档案，research-only；部分核实后纳入 |
| 41 辛巴与卢拉 | 狮与熊；2017-02-21起救援；伊拉克摩苏尔 | 城市战斗中动物园多数动物死亡，两只幸存者被长期困住；跨境撤离至保护区 | 园内其他动物准确数量与逐只死因不完整 | FOUR PAWS mission record；TIME | 救援机构照片，research-only；部分核实后纳入 |
| 42 桑达 | 非洲狮；2017-07-20；津巴布韦万基外围 | 塞西尔之子、佩戴研究项圈的桑达在配额狩猎中被杀；研究机构确认身份 | 狩猎合法性与通知程序在来源间有争议，不写成已定罪非法 | Oxford WildCRU；TIME | WildCRU 研究照，research-only；部分核实后纳入 |
| 43 诺西 | 非洲象；2017年扣押；美国阿拉巴马州 | 长期巡演后，USDA 行政记录与法院程序涉及照护和福利违规；随后转入保护区 | 个别历史指控与最终裁决范围需区分 | USDA administrative record；In Defense of Animals | 官方与NGO档案，research-only；纳入 |
| 44 霍普 | 苏门答腊猩猩；2019-03-10；印度尼西亚亚齐 | 被发现时身中多枚气枪弹，幼崽死亡；官方保护部门参与救援与长期照护 | 枪击行为人未确认，弹丸准确总数以医疗检查为准 | BKSDA Aceh／ABC Indonesia；CBS | 官方与新闻照片，research-only；部分核实后纳入 |
| 45 塔卡亚 | 灰狼；2020-03-24；加拿大温哥华岛 | 从岛上被政府捕捉、转移后数日遭猎人射杀；省政府与保育机构确认身份 | 射手身份与动机未公开，转移是否增加风险属于推论 | B.C. Conservation Officer Service；BC SPCA/CBC | BC SPCA／新闻档案，research-only；部分核实后纳入 |
| 46 拉菲基 | 山地大猩猩；2020-06-01；乌干达布温迪 | 被长矛刺死；法院记录四名被告与认罪、判刑；疫情期间保护区压力受到关注 | 行为是否以拉菲基为目标，判决以非法入园和猎捕事实为核心 | Uganda court record／Uganda Radio Network；National Geographic | UWA／新闻档案，research-only；纳入 |
| 47 雪锥 | 北大西洋露脊鲸；2021—2022；北大西洋 | 多次被渔具缠绕并带着幼鲸迁徙；救援人员多次移除部分绳索，之后失去可靠目击 | 最终命运未知，不能写成已确认死亡 | NOAA Fisheries；IFAW | NOAA 识别图，research-only；部分核实后纳入 |
| 48 托尔斯泰 | 非洲象；2022-04；肯尼亚基马纳 | 已识别大象遭人类投掷长矛受伤，救治后死亡；保护组织记录长期人象冲突背景 | 具体袭击日期与行为人未确认 | Big Life Foundation；Kenya wildlife reporting | Big Life 识别照，research-only；部分核实后纳入 |
| 49 费尔德曼生态公园动物群 | 熊、狮、虎等圈养动物；2022年3—4月；乌克兰哈尔科夫州 | 战争炮击破坏围栏并造成动物死亡；园方和救援人员分批撤离幸存动物 | 总死亡数与每次炮击因果难以独立完整核对 | Feldman Ecopark；Ukrainska Pravda | 园方救援影像，research-only；部分核实后纳入 |
| 50 露脊鲸 #5120 | 北大西洋露脊鲸；2024-01-28发现；美国马萨诸塞州 | 幼鲸遗体出现与船撞相符的骨折与组织损伤；NOAA发布尸检与个体身份 | 撞击船只未确认，死亡时间为推定 | NOAA Fisheries；New England Aquarium | NOAA/NEAq 识别图，research-only；部分核实后纳入 |

### 第二轮结论

- 调查候选：40 项；纳入 37 项，排除 3 项。
- 新增事件全部具有至少两个可访问来源，且至少一个为政府、法院、研究机构、执行救援机构或同期正式记录。
- 对死亡数、具体日期、行为人或因果无法完全确认的案例使用 `partially-verified`，不把未知信息补写成确定事实。
- 50 项前台事件不代表全球总量，只是目前通过本项目门槛的一部分。


## 51–100. 第三轮纳入案例（多样性扩展）

本轮于 2026-07-12 调查 58 个候选，最终纳入 50 个、排除 8 个。选择时限制同一伤害机制的重复数量，优先补充新的物种、国家和人类行为类型；警犬与军犬因用户明确要求形成一个小型专题，但仍分别保留独立的任务、地点与责任背景。完整故事、逐条来源元数据、访问日期、图片参考页与许可状态见 `data/thirdWaveEvents.ts`。

| 编号／事件主人公 | 物种；日期；地点 | 已核实行为与结果 | 不确定信息 | 一手与独立来源 | 图片与纳入判断 |
|---|---|---|---|---|---|
| 51 玛莎 | 旅鸽；1914年9月1日；美国辛辛那提动物园 | 最后一只已知旅鸽玛莎在圈养中死亡，商业捕猎与森林清除已使曾以十亿计的种群归零。这项事实由公开档案与独立资料交叉确认。 结果：玛莎死亡，旅鸽作为物种灭绝。 | 无额外重大争议；仍按公开资料范围表述 | Smithsonian Institution（一手）；Cincinnati Zoo & Botanical Garden | Smithsonian Institution，research-only；纳入 |
| 52 杰基 | 豚尾狒狒；1918年4月；比利时帕斯尚尔地区 | 南非士兵把伴侣狒狒杰基带入第一次世界大战；炮火重伤他的右腿，军医随后实施截肢。这项事实由公开档案与独立资料交叉确认。 结果：杰基存活并回到南非，伤残伴随余生。 | 受伤月份可核实，具体日期及部分战地轶事在后续叙述中不一致。 | National WWI Museum and Memorial（一手）；The Heritage Portal | National WWI Museum and Memorial，research-only；部分核实后纳入 |
| 53 亲爱的朋友 | 家鸽；1918年10月4日；法国阿贡森林 | 美军将信鸽亲爱的朋友放入炮火中传令；它胸部受伤、右腿几乎断裂，仍把停止友军炮击的信息带回。 结果：亲爱的朋友存活数月，1919年死亡，遗体被制成标本。 | 性别、伤害由子弹还是弹片造成，以及部分任务细节仍有争议。 | Smithsonian Institution（一手）；U.S. National Archives | Smithsonian Institution，research-only；部分核实后纳入 |
| 54 最后一只圈养袋狼 | 袋狼；1936年9月7日；澳大利亚霍巴特博马里斯动物园 | 长期猎杀与悬赏制度使袋狼锐减；最后已知圈养个体在霍巴特动物园死亡，物种随后被认定灭绝。 结果：最后已知袋狼死亡，之后没有获得科学确认的存活记录。 | 个体名称、性别和直接死因的历史记录存在不确定性。 | Queen Victoria Museum & Art Gallery（一手）；National Museum of Australia | Queen Victoria Museum & Art Gallery，research-only；部分核实后纳入 |
| 55 甘德 | 纽芬兰犬；1941年12月19日；中国香港香港保卫战阵地 | 加拿大军团把纽芬兰犬甘德带往香港战场；他叼起落在伤员附近的手榴弹，爆炸中死亡。这项事实由公开档案与独立资料交叉确认。 结果：甘德在手榴弹爆炸中死亡。 | 无额外重大争议；仍按公开资料范围表述 | Veterans Affairs Canada（一手）；PDSA Dickin Medal | Veterans Affairs Canada，research-only；纳入 |
| 56 西蒙 | 家猫；1949年4月20日；中国长江镇江附近 | 英舰紫石英号遭炮击时，舰猫西蒙被弹片击伤并烧伤；康复后继续被用于控制船上鼠患。这项事实由公开档案与独立资料交叉确认。 结果：西蒙返回英国后因感染死亡，年约两岁。 | 无额外重大争议；仍按公开资料范围表述 | PDSA（一手）；Imperial War Museums | PDSA，research-only；纳入 |
| 57 阿拉贝拉与安妮塔 | 十字园蛛；1973年7月28日；美国天空实验室3号近地轨道 | 两只十字园蛛被送入天空实验室观察失重结网；任务结束后均死亡，并作为生物样本保存。 结果：两只蜘蛛均在任务结束前后死亡，遗体进入收藏。 | 无额外重大争议；仍按公开资料范围表述 | NASA（一手）；Smithsonian National Air and Space Museum | Smithsonian National Air and Space Museum，research-only；纳入 |
| 58 伊莎贝拉与圣地亚哥岛山羊群 | 野化家山羊；1997年至2006年；厄瓜多尔伊莎贝拉岛、圣地亚哥岛与平塔岛 | 生态修复项目以直升机猎杀、地面追踪和“诱导山羊”等方式清除岛上约十多万只野化山羊。 结果：目标岛屿的大型野化山羊种群被清除。 | 不同总结对总清除数给出约十万至十四万以上的估计。 | Galápagos Conservancy（一手）；Frontiers in Conservation Science | Galápagos Conservancy，research-only；部分核实后纳入 |
| 59 蒂萨河鱼群 | 多种淡水鱼类；2000年1月30日；罗马尼亚、匈牙利与塞尔维亚蒂萨河流域 | 金矿尾矿坝泄漏含氰废水，污染沿河跨境扩散，造成大规模鱼类死亡并冲击水生生态系统。 结果：大量鱼类和其他水生生物死亡，多个国家限制取水与捕鱼。 | 死亡数量多以重量或区段估算，来源之间口径不同。 | UN Environment Programme（一手）；European Environment Agency | UN Environment Programme，research-only；部分核实后纳入 |
| 60 多莉 | 芬多塞特绵羊；2003年2月14日；英国罗斯林研究所 | 第一只由成年体细胞克隆成功的哺乳动物多莉终身生活在研究所，六岁时因肺肿瘤被安乐死。 结果：多莉因肺部肿瘤恶化被安乐死，遗体进入博物馆。 | 短端粒、关节炎和克隆之间的因果关系没有定论。 | The Roslin Institute（一手）；National Museums Scotland | The Roslin Institute，research-only；部分核实后纳入 |
| 61 香波 | 弗里西亚公牛；2007年7月26日；英国威尔士斯坎达谷印度教寺院 | 寺院公牛香波结核菌素检测呈阳性，政府取得法院许可将其移走并处死；寺院对检测可靠性提出异议。 结果：香波被政府人员移走并处死，尸检后确认有结核病变。 | 寺院持续质疑检测；政府与后续检查支持感染判断。 | Senedd Cymru（一手）；BBC News | Senedd Cymru，research-only；部分核实后纳入 |
| 62 萨莎 | 拉布拉多寻回犬；2008年7月24日；阿富汗赫尔曼德省 | 英军爆炸物搜索犬萨莎在巡逻伏击中与训导员肯尼思·罗一同死亡，此前已找到多处武器与爆炸物。 结果：萨莎与训导员在伏击中死亡。 | 无额外重大争议；仍按公开资料范围表述 | PDSA（一手）；The Guardian | PDSA，research-only；纳入 |
| 63 八美人 | 纯血竞赛马；2008年5月3日；美国丘吉尔园赛马场 | 三岁母马八美人在肯塔基德比赛获第二后不久双前踝发生严重骨折，兽医在赛道上实施安乐死。 结果：八美人在赛道上被安乐死。 | 骨折的直接机制没有被调查确定为单一因素。 | Kentucky Horse Racing Authority（一手）；Louisville Public Media | Kentucky Derby，research-only；部分核实后纳入 |
| 64 沉默骑士 | 加州海狮；2010年12月；美国旧金山索萨利托附近 | 救援人员发现成年海狮沉默骑士头部中枪，弹丸导致双目失明；他无法回归野外，只能终身圈养。 结果：沉默骑士存活但永久失明，无法放归。 | 开枪者与动机没有被可靠公开资料确认。 | The Marine Mammal Center（一手）；TIME | The Marine Mammal Center，research-only；部分核实后纳入 |
| 65 威斯康星鸣鹤 | 鸣鹤；2011年5月；美国威斯康星州沃潘附近 | 一只通过迁徙恢复计划回归东部种群的濒危鸣鹤被非法射杀；调查后，猎人书面承认开枪。 结果：鸣鹤死亡；行为人认罪并受到罚款和狩猎限制。 | 无额外重大争议；仍按公开资料范围表述 | U.S. Fish & Wildlife Service（一手）；Wisconsin Public Radio | U.S. Fish & Wildlife Service，research-only；纳入 |
| 66 赞斯维尔私养动物群 | 虎、狮、熊、狼等多种野生动物；2011年10月18日；美国俄亥俄州赞斯维尔 | 私人饲主打开笼舍后，数十只大型野生动物进入周边区域；警方以公共安全为由射杀其中绝大多数。 结果：近50只动物被警方射杀，少数留在笼中的动物幸存。 | 死亡总数常见48与49两种统计，取决于失踪猴是否计入。 | ASPCA（一手）；Axios | Axios，research-only；部分核实后纳入 |
| 67 洛隆 | 湾鳄；2013年2月10日；菲律宾南阿古桑省布纳万 | 巨型湾鳄洛隆被捕后成为旅游展示动物；约17个月后，他在圈舍内因慢性肺炎和多器官衰竭死亡。 结果：洛隆在圈养中死亡，遗体被保存。 | 圈养压力被官方认为有贡献，但不是病理报告中的唯一死因。 | Department of Environment and Natural Resources via GMA（一手）；National Geographic | DENR via GMA，research-only；部分核实后纳入 |
| 68 中途岛黑背信天翁群 | 黑背信天翁；2015年12月起；美国中途岛环礁 | 人类带入的家鼠改变取食行为，夜间攻击正在孵卵的信天翁；成鸟常不离巢，持续承受啃咬。 结果：多只成鸟受伤或死亡，巢被遗弃；保护机构启动灭鼠计划。 | 无额外重大争议；仍按公开资料范围表述 | U.S. Fish & Wildlife Service（一手）；U.S. Geological Survey | U.S. Fish & Wildlife Service，research-only；纳入 |
| 69 迪塞尔 | 比利时马里努阿犬；2015年11月18日；法国圣但尼 | 法国RAID警犬迪塞尔被派入与恐袭嫌疑人对峙的公寓，在持续枪火与爆炸中死亡。这项事实由公开档案与独立资料交叉确认。 结果：迪塞尔在行动现场死亡。 | 早期与后续报道对致命弹道来源不一致。 | PDSA（一手）；Le Parisien | PDSA，research-only；部分核实后纳入 |
| 70 夏洛特 | 田纳西走马；2015年12月3日；美国得克萨斯州休斯敦市中心 | 执勤中的警马夏洛特受交通噪声惊吓，冲入车道后被水泥车撞击，兽医在现场结束其生命。 结果：夏洛特伤势过重，在现场被安乐死。 | 无额外重大争议；仍按公开资料范围表述 | Houston Police Department（一手）；Houston Chronicle | Houston Police Department，research-only；纳入 |
| 71 平基 | 智利火烈鸟；2016年8月2日；美国佛罗里达州坦帕湾布希花园 | 主题公园游客越过围栏抓起火烈鸟平基并把她扔向地面；严重伤势使兽医决定实施安乐死。 结果：平基因严重创伤被安乐死，嫌疑人被捕并面临重罪指控。 | 指控未经过最终审判，前台使用警方与园方确认的行为事实。 | Tampa Police Department via ClickOrlando（一手）；ABC News Australia | Busch Gardens via TIME，research-only；部分核实后纳入 |
| 72 小硬汉 | 拉布斯流苏树蛙；2016年9月26日；美国亚特兰大植物园 | 从巴拿马疾病暴发区抢救出的雄蛙小硬汉在圈养中死亡；它是该物种最后一只有记录的已知个体。 结果：小硬汉死亡，物种没有已知存活个体。 | IUCN状态与“最后已知个体”并不等同于绝对证明灭绝。 | Atlanta Botanical Garden via WABE（一手）；Smithsonian's National Zoo | Atlanta Botanical Garden via WABE，research-only；部分核实后纳入 |
| 73 芬恩 | 德国牧羊犬；2016年10月5日；英国赫特福德郡斯蒂夫尼奇 | 警犬芬恩在追捕嫌疑人时被刀刺入胸部和头部，接受紧急手术后存活；当时法律仅能按财产损害处理。 结果：芬恩经手术存活并退役，2023年自然死亡。 | 无额外重大争议；仍按公开资料范围表述 | UK Government（一手）；BBC News | UK Government，research-only；纳入 |
| 74 杰思罗 | 德国牧羊犬；2016年1月10日；美国俄亥俄州坎顿 | 坎顿警犬杰思罗在处理入室警情时被枪弹击中，次日因脑部肿胀等伤势死亡。这项事实由公开档案与独立资料交叉确认。 结果：杰思罗中弹后次日死亡。 | 无额外重大争议；仍按公开资料范围表述 | City of Canton（一手）；Officer Down Memorial Page | Officer Down Memorial Page，research-only；纳入 |
| 75 肯太郎 | 伊比利亚猞猁；约2016年10月16日；葡萄牙波尔图北部马亚高速公路 | 重引入雄性伊比利亚猞猁肯太郎跨越西葡行走三千多公里，最终在葡萄牙高速公路上被车辆撞死。 结果：肯太郎被车辆撞击死亡。 | 公开报道没有一致给出撞击的精确日期。 | LIFE Iberlince via RTVE（一手）；Diário de Notícias | LIFE Iberlince via RTVE，research-only；部分核实后纳入 |
| 76 VaquitaCPR成年雌豚 | 小头鼠海豚；2017年11月4日；墨西哥加利福尼亚湾上湾 | 保育团队试图把极危小头鼠海豚暂时转移到海上围栏，一只成年雌豚在捕捉和释放尝试中死亡。 结果：成年雌豚死亡，VaquitaCPR终止活体捕捉计划。 | 无额外重大争议；仍按公开资料范围表述 | VaquitaCPR / Porpoise Conservation Society（一手）；Science | VaquitaCPR，research-only；纳入 |
| 77 储蓄罐 | 绿海龟；2017年3月21日；泰国春武里府斯里拉差 | 游客长期向池中投币祈愿，绿海龟储蓄罐误食数百枚硬币；手术取出后仍因并发症死亡。这项事实由公开档案与独立资料交叉确认。 结果：储蓄罐在手术后并发症中死亡。 | 公开报道对硬币精确枚数与总重量略有不同。 | Chulalongkorn University via AP（一手）；The Guardian | Chulalongkorn University via AP，research-only；部分核实后纳入 |
| 78 斯努蒂 | 佛罗里达海牛；2017年7月23日；美国佛罗里达州布雷登顿南佛罗里达博物馆 | 长期圈养海牛斯努蒂通过未妥善固定的检修舱门进入狭窄通道，无法转身或浮出水面而溺亡。 结果：斯努蒂被困维护通道后溺亡。 | 无额外重大争议；仍按公开资料范围表述 | The Bishop Museum of Science and Nature（一手）；Bradenton Herald | The Bishop Museum，research-only；纳入 |
| 79 乔治 | 夏威夷树蜗牛；2019年1月1日；美国夏威夷大学马诺阿校区实验设施 | 人工繁育群最后一只已知Achatinella apexfulva乔治死亡；栖息地丧失和外来捕食者重创野外种群。 结果：乔治死亡，该物种没有已知存活个体。 | “最后已知”不等于证明所有野外角落绝无个体。 | Hawaii Department of Land and Natural Resources（一手）；Mongabay | Hawaii DLNR，research-only；部分核实后纳入 |
| 80 玛丽恩 | 儒艮；2019年8月17日；泰国董里府利邦岛 | 获救幼年儒艮玛丽恩因感染死亡；兽医在肠道内发现塑料碎片，认为其造成阻塞并加重营养问题。 结果：玛丽恩因感染、创伤与塑料相关消化问题共同恶化而死亡。 | 死亡涉及多重因素，不能只写成“死于塑料”。 | Thailand Department of Marine and Coastal Resources via UNEP（一手）；Associated Press | Thailand DMCR via UNEP，research-only；部分核实后纳入 |
| 81 CT1秃鹫与猛禽群 | 白背秃鹫等多种秃鹫与茶色雕；2019年6月21日；博茨瓦纳中央区CT1野生动物管理区 | 盗猎者疑似在大象尸体上投毒，537只秃鹫和两只茶色雕取食后死亡，清理人员随后处理污染区。 结果：537只秃鹫和两只茶色雕被发现死亡。 | 公告把盗猎投毒列为高度怀疑，实验室和行为人结果未在页面完整公开。 | Botswana Government DailyNews（一手）；BirdLife International | Botswana Government，research-only；部分核实后纳入 |
| 82 丹麦养殖水貂群 | 美洲水貂；2020年11月4日起；丹麦全国水貂养殖场 | 发现SARS-CoV-2在水貂与人之间传播后，丹麦政府决定扑杀全国养殖水貂，数量约一千七百万只。 结果：全国绝大多数养殖水貂被杀，产业被临时禁止。 | 约1700万是广泛采用的估计，非逐只最终计数。 | Danish Veterinary and Food Administration（一手）；Danish Parliament | Danish Veterinary and Food Administration，research-only；部分核实后纳入 |
| 83 弗雷迪 | 灰海豹；2021年3月22日；英国伦敦哈默史密斯桥附近 | 幼年灰海豹弗雷迪在河岸休息时被一只未牵绳犬持续攻击，鳍肢和关节重伤后被兽医安乐死。 结果：弗雷迪因骨折、脱位与神经损伤无法康复而被安乐死。 | 无额外重大争议；仍按公开资料范围表述 | South Essex Wildlife Hospital via ITV（一手）；The Guardian | South Essex Wildlife Hospital via ITV，research-only；纳入 |
| 84 斯卡拉湾白边海豚群 | 大西洋白边海豚；2021年9月12日；法罗群岛斯卡拉湾 | 船只把超过1400只大西洋白边海豚驱入浅湾并集中杀死，规模远高于当地通常单次捕猎。 结果：超过1400只白边海豚在单次驱猎中死亡。 | 官方与倡议机构统计为1423或1428只，前台使用“超过1400只”。 | Government of the Faroe Islands（一手）；ASCOBANS | Government of the Faroe Islands，research-only；部分核实后纳入 |
| 85 杰罗尼莫 | 羊驼；2021年8月31日；英国格洛斯特郡威克沃 | 政府依据两次牛结核检测阳性与法院令，移走羊驼杰罗尼莫并处死；饲主持续质疑检测准确性。 结果：杰罗尼莫被政府人员移走并安乐死。 | 各方对检测解释有长期争议，尸检与培养结果需分别理解。 | DEFRA and APHA（一手）；BBC News | DEFRA and APHA，research-only；部分核实后纳入 |
| 86 P-22 | 美洲狮；2022年12月17日；美国洛杉矶格里菲斯公园 | 长期被高速公路围困在城市绿地的山狮P-22遭车辆撞击，并患多种慢性疾病，捕获检查后被安乐死。 结果：P-22在评估生活质量后被安乐死。 | 无额外重大争议；仍按公开资料范围表述 | U.S. National Park Service（一手）；California Department of Fish and Wildlife | U.S. National Park Service，research-only；纳入 |
| 87 月亮 | 座头鲸；2022年9月初；加拿大、美国不列颠哥伦比亚沿岸至夏威夷 | 长期被研究的座头鲸月亮突然出现严重脊柱弯折，专家判断与大型船舶撞击一致；她仍游向夏威夷。 结果：月亮带着严重脊柱损伤继续游动，后续未被确认。 | 撞击未被直接目击，最终命运未知。 | North Coast Cetacean Society / BC Whales（一手）；Smithsonian Magazine | BC Whales，research-only；部分核实后纳入 |
| 88 小星星 | 绒毛猴；2022年2月；厄瓜多尔安巴托与基多 | 绒毛猴小星星幼年被带离野外、在私人家庭生活18年；政府扣押转入动物园后不久死亡。 结果：小星星在转入动物园后死亡。 | 死亡具体日期和直接医学原因在公开摘要中有限。 | Corte Constitucional del Ecuador（一手）；Animal Legal & Historical Center | Corte Constitucional del Ecuador，research-only；部分核实后纳入 |
| 89 弗兰基 | 比利时马里努阿犬；2022年7月26日；美国马萨诸塞州菲奇堡 | 州警警犬弗兰基被部署处理武装对峙，进入住宅时遭枪击；尽管紧急送医，仍在当日死亡。 结果：弗兰基中枪后死亡。 | 无额外重大争议；仍按公开资料范围表述 | Commonwealth of Massachusetts（一手）；WBUR | Massachusetts State Police，research-only；纳入 |
| 90 阿玛雷娜 | 马西卡棕熊；2023年8月31日；意大利阿布鲁佐圣贝内代托德伊马尔西 | 生活在极小种群中的母熊阿玛雷娜在国家公园外被居民开枪打死，两只当年幼崽失去母亲。 结果：阿玛雷娜死亡，两只幼崽短期内独立存活。 | 射击次数与最终司法责任需以尸检、弹道和法院结果为准。 | Parco Nazionale d'Abruzzo Lazio e Molise（一手）；Associated Press | Parco Nazionale d'Abruzzo，research-only；部分核实后纳入 |
| 91 布罗科 | 德国牧羊犬；2023年12月21日；美国康涅狄格州斯托宁顿 | 康涅狄格州警犬布罗科协助追捕持枪嫌疑人时被枪杀，成为该州首只因枪击执勤死亡的州警犬。 结果：布罗科在行动中被枪杀。 | 无额外重大争议；仍按公开资料范围表述 | Connecticut State Police via AP（一手）；Associated Press | Connecticut State Police via AP，research-only；纳入 |
| 92 克努贝尔 | 北方秃鹮；2024年1月上旬；西班牙阿拉贡自治区特鲁埃尔 | 人工引导迁徙计划中的幼年北方秃鹮克努贝尔独自飞越地中海抵达西班牙，随后遭枪击死亡。 结果：克努贝尔因枪伤死亡。 | 发现日与射击精确时刻未公开，行为人尚未确认。 | Waldrappteam Conservation & Research via MaghrebOrnitho（一手）；Animals | Waldrappteam via MaghrebOrnitho，research-only；部分核实后纳入 |
| 93 弗拉科 | 欧亚雕鸮；2024年2月23日；美国纽约曼哈顿上西区 | 笼舍被人为破坏后在纽约自由生活一年的雕鸮弗拉科撞上建筑死亡，体内还检出多种抗凝血灭鼠剂。 结果：弗拉科因急性撞击伤死亡。 | 笼舍破坏者未找到，多重健康因素的因果权重无法精确排序。 | Wildlife Conservation Society / Central Park Zoo（一手）；Associated Press | Central Park Zoo，research-only；部分核实后纳入 |
| 94 Whyaratta行动爬行动物群 | 多种澳大利亚蜥蜴与蛇；2024年1月5日；澳大利亚悉尼东山及跨州邮运网络 | 警方调查涉嫌向香港走私原生爬行动物的网络，共发现257只蜥蜴，并在住宅中找到蛇、蛋和死亡个体。 结果：257只蜥蜴被查获，另有蛇、蛋和25只死亡爬行动物。 | 犯罪组织角色属于警方指控，需以法院结果为准。 | NSW Police via ABC（一手）；Associated Press | NSW Police，research-only；部分核实后纳入 |
| 95 阿彻 | 拉布拉多寻回犬；2025年9月4日；美国夏威夷岛西部 | 夏威夷警察局缉毒犬阿彻被留在警用车辆内过久，最终死亡；警局公开称这一时长“不可接受”。 结果：阿彻在警车内死亡。 | 刑事不追诉不等同于认定管理没有过失。 | Hawaii Police Department via Hawaii News Now（一手）；Hawaii Attorney General via KHON2 | Hawaii Police Department，research-only；部分核实后纳入 |
| 96 黄石食物依赖灰熊 | 灰熊；2025年5月13日；美国黄石国家公园北部 | 一头成年灰熊反复进入营地获取人类食物和垃圾，国家公园认定风险升级，将其捕获后管理性处死。 结果：灰熊被捕获并处死。 | 无额外重大争议；仍按公开资料范围表述 | U.S. National Park Service（一手）；Associated Press | U.S. National Park Service，research-only；纳入 |
| 97 除号 | 北大西洋露脊鲸；2026年1月27日；美国北卡罗来纳州外海 | 年轻露脊鲸除号自2025年起被渔具严重缠绕，救援仅能部分解脱；2026年1月被发现死亡。 结果：除号被发现死亡，成为2026年首起确认露脊鲸死亡。 | 无额外重大争议；仍按公开资料范围表述 | NOAA Fisheries（一手）；New England Aquarium | New England Aquarium，research-only；纳入 |
| 98 Iwahig巴拉望穿山甲 | 巴拉望穿山甲；2026年4月10日；菲律宾伊瓦希格监狱与劳场森林 | 巡护人员发现一只极危巴拉望穿山甲被简易绳套勒死，并在周边森林拆除十六个以上仍在工作的非法陷阱。 结果：穿山甲因绳套窒息死亡，周边陷阱被拆除。 | 个体身份细节与行为人尚未公开。 | Philippine Information Agency（一手）；Palawan Council for Sustainable Development via PIA | PCSD via Philippine Information Agency，research-only；部分核实后纳入 |
| 99 埃塞萨机场海洋动物群 | 狮子鱼、海星等多种海洋动物；2026年4月28日；阿根廷布宜诺斯艾利斯埃塞萨机场 | 海关在来自肯尼亚的33个货箱中查获721只活体海洋动物，收货方未登记且缺少必要环境许可。 结果：721只动物被查获并转交专业机构隔离照护。 | 公开资料未逐只列出物种和后续存活率。 | Argentina Government（一手）；IFAW | Argentina Government，research-only；部分核实后纳入 |
| 100 维索斯 | 比利时马里努阿犬；2026年7月6日；美国堪萨斯州章克申城 | 章克申城警犬维索斯在执勤期间被发现倒在配备警犬设施的巡逻车内，初步死因为热暴露。 结果：维索斯在执勤期间死亡。 | 初步原因不是最终调查结论。 | Junction City Police Department（一手）；WIBW | Junction City Police Department，research-only；部分核实后纳入 |

### 第三轮结论

- 新增 50 个事件后，前台共有 100 个事件、75 个物种／物种群字符串、37 个国家或地区和 216 条来源。
- 新增事件从 1914 年延伸至 2026 年 7 月 6 日；时间线最新核实日为 2026-07-12。
- 新增范围包含战争、警犬与缉毒犬、非法射杀、毒饵、道路与建筑撞击、野生动物走私、实验、公共卫生扑杀、外来物种治理、设施失误和渔具缠绕。
- 所有新增事件至少有两个来源并含一手或同期机构记录；61 个全站事件因日期、数量、因果或司法状态仍有边界而标记为部分核实。

## 第四轮扩展：新增 100 个中英双语事件（2026-07-13）

本轮从 112 个具备两项以上公开资料的候选中选入 100 个，暂缓 12 个重复度较高的航天、虎鲸、北极熊和警犬案例。选择时优先增加物种与伤害类型差异；英文与中文叙事均由同一组事实字段生成，不另行改变事实口径。

| 编号与主人公 | 物种／日期／地点 | 核实概述与结果 | 不确定信息 | 一手与二手来源 | 图片状态与结论 |
|---|---|---|---|---|---|
| 101 楚尼 | 亚洲象；1826年3月1日；英国伦敦埃克塞特交易厅 | 楚尼是一名有明确记录的亚洲象主人公。长期动物展演以公开射杀告终，地点为伦敦埃克塞特交易厅。 结果：楚尼在士兵反复射击后死亡。 | Contemporary accounts disagree on the exact number of shots. | London Museum（一手）；Smithsonian Libraries and Archives | London Museum，research-only；部分核实后纳入 |
| 102 珍宝 | 非洲象；1885年9月15日；加拿大安大略省圣托马斯 | 珍宝是一名有明确记录的非洲象主人公。商业展演与铁路运输使其暴露在运行轨道上，地点为安大略省圣托马斯。 结果：演出后珍宝被货运列车撞击死亡。 | 无额外重大争议；按公开资料范围表述 | Tufts University Digital Collections（一手）；Smithsonian Magazine | Tufts University Digital Collections，research-only；纳入 |
| 103 玛丽 | 亚洲象；1916年9月13日；美国田纳西州欧文 | 玛丽是一名有明确记录的亚洲象主人公。马戏团在训导员死亡后公开处死大象，地点为田纳西州欧文。 结果：玛丽被工业起重机当众吊死。 | Some retellings add details not supported by contemporary records. | Tennessee State Museum（一手）；Smithsonian Magazine | Tennessee State Museum，research-only；部分核实后纳入 |
| 104 印卡斯 | 卡罗来纳长尾鹦鹉；1918年2月21日；美国辛辛那提动物园 | 印卡斯是一名有明确记录的卡罗来纳长尾鹦鹉主人公。猎杀、栖息地转换和清剿推动物种灭绝，地点为辛辛那提动物园。 结果：印卡斯死于圈养，此后没有确认个体。 | 无额外重大争议；按公开资料范围表述 | U.S. Fish and Wildlife Service（一手）；Smithsonian Libraries and Archives | U.S. Fish and Wildlife Service，research-only；纳入 |
| 105 鸣叫的本 | 石南榛鸡；1932年3月11日；美国马萨诸塞州马萨葡萄园岛 | 鸣叫的本是一名有明确记录的石南榛鸡主人公。捕猎、火灾、疾病和栖息地损失使种群只剩一只雄鸟，地点为马萨诸塞州马萨葡萄园岛。 结果：最后已知石南榛鸡失踪并被认定死亡。 | The exact day of death is unknown; March 11 was the last confirmed sighting. | U.S. Fish and Wildlife Service（一手）；Smithsonian Libraries and Archives | U.S. Fish and Wildlife Service，research-only；部分核实后纳入 |
| 106 最后录音中的考艾岛吸蜜鸟 | 考艾岛吸蜜鸟；1987年4月28日；美国考艾岛阿拉凯荒野 | 最后录音中的考艾岛吸蜜鸟是一名有明确记录的考艾岛吸蜜鸟主人公。外来疾病、捕食者与栖息地损失推动鸟类灭绝，地点为考艾岛阿拉凯荒野。 结果：此后再无获得确认的个体记录。 | 无额外重大争议；按公开资料范围表述 | U.S. Fish and Wildlife Service（一手）；U.S. Fish and Wildlife Service | U.S. Fish and Wildlife Service，research-only；纳入 |
| 107 塞莉娅 | 比利牛斯野山羊；2000年1月6日；西班牙奥尔德萨国家公园 | 塞莉娅是一名有明确记录的比利牛斯野山羊主人公。数世纪猎杀使亚种只剩最后一只雌性，地点为奥尔德萨国家公园。 结果：塞莉娅被发现死亡，后来的克隆幼体仅存活数分钟。 | The immediate cause was a fallen tree; the extinction context was historical overhunting. | IUCN（一手）；National Geographic | IUCN，research-only；部分核实后纳入 |
| 108 淇淇 | 白鱀豚；2002年8月7日；中国武汉水生生物研究所 | 淇淇是一名有明确记录的白鱀豚主人公。捕捞、航运、污染与河流工程使野生种群崩溃，地点为武汉水生生物研究所。 结果：淇淇死于圈养，2006年调查未发现存活白鱀豚。 | The species is classified as critically endangered, possibly extinct, rather than formally extinct. | Institute of Hydrobiology, Chinese Academy of Sciences（一手）；IUCN | Institute of Hydrobiology, Chinese Academy of Sciences，research-only；部分核实后纳入 |
| 109 最后圈养波欧乌利鸟 | 波欧乌利鸟；2004年11月26日；美国夏威夷毛伊岛 | 最后圈养波欧乌利鸟是一名有明确记录的波欧乌利鸟主人公。栖息地损失、外来捕食者和疾病使种群仅剩少数，地点为夏威夷毛伊岛。 结果：被捕获的雄鸟死亡，后续调查未发现存活个体。 | 无额外重大争议；按公开资料范围表述 | U.S. Fish and Wildlife Service（一手）；U.S. Fish and Wildlife Service | U.S. Fish and Wildlife Service，research-only；纳入 |
| 110 最后录音中的圣诞岛伏翼 | 圣诞岛伏翼；2009年8月26日；澳大利亚圣诞岛 | 最后录音中的圣诞岛伏翼是一名有明确记录的圣诞岛伏翼主人公。外来捕食者、疾病与延迟干预发生在灭绝之前，地点为圣诞岛。 结果：记录到最后一次回声定位声，此后再未发现个体。 | 无额外重大争议；按公开资料范围表述 | Australian Government（一手）；CSIRO Publishing | Australian Government，research-only；纳入 |
| 111 孤独乔治 | 平塔岛象龟；2012年6月24日；厄瓜多尔法乌斯托·列雷纳繁育中心 | 孤独乔治是一名有明确记录的平塔岛象龟主人公。历史捕杀与人类引入山羊使平塔种群消失，地点为法乌斯托·列雷纳繁育中心。 结果：乔治无后代死亡，平塔岛象龟灭绝。 | 无额外重大争议；按公开资料范围表述 | Galápagos Conservancy（一手）；Galápagos Conservancy | Galápagos Conservancy，research-only；纳入 |
| 112 最后布兰布尔礁裸尾鼠种群 | 布兰布尔礁裸尾鼠；2016年6月1日；澳大利亚托雷斯海峡布兰布尔礁 | 最后布兰布尔礁裸尾鼠种群是一名有明确记录的布兰布尔礁裸尾鼠主人公。人类驱动气候变化加剧海平面与风暴对小岛的冲击，地点为托雷斯海峡布兰布尔礁。 结果：调查未发现存活个体，物种被宣布灭绝。 | 无额外重大争议；按公开资料范围表述 | Queensland Government（一手）；IUCN Red List | Queensland Government，research-only；纳入 |
| 113 苏丹 | 北方白犀；2018年3月19日；肯尼亚奥佩杰塔保护区 | 苏丹是一名有明确记录的北方白犀主人公。盗猎与栖息地损失使亚种只能依赖辅助繁殖，地点为奥佩杰塔保护区。 结果：苏丹因年老病情被安乐死，只剩两只雌性。 | 无额外重大争议；按公开资料范围表述 | Ol Pejeta Conservancy（一手）；Reuters | Ol Pejeta Conservancy，research-only；纳入 |
| 114 最后一对野生夏威夷乌鸦 | 夏威夷乌鸦；2002年6月1日；美国夏威夷岛 | 最后一对野生夏威夷乌鸦是一名有明确记录的夏威夷乌鸦主人公。栖地损失、外来捕食者、疾病与迫害消灭野生种群，地点为夏威夷岛。 结果：最后野生个体消失，只剩圈养种群。 | The exact fate and date of the final wild birds are not known. | U.S. Fish and Wildlife Service（一手）；San Diego Zoo Wildlife Alliance | U.S. Fish and Wildlife Service，research-only；部分核实后纳入 |
| 115 最后已知野生斯皮克斯金刚鹦鹉 | 斯皮克斯金刚鹦鹉；2000年；巴西巴伊亚州 | 最后已知野生斯皮克斯金刚鹦鹉是一名有明确记录的斯皮克斯金刚鹦鹉主人公。宠物贸易捕捉与河岸栖地损失消灭野生种群，地点为巴伊亚州。 结果：最后已知野生雄鸟消失，只能依靠圈养繁殖尝试回归。 | The final bird disappeared rather than being recovered dead. | Brazilian Ministry of the Environment / ICMBio（一手）；Association for the Conservation of Threatened Parrots | Brazilian Ministry of the Environment / ICMBio，research-only；部分核实后纳入 |
| 116 阿尔伯特二号 | 恒河猴；1949年6月14日；美国新墨西哥州白沙导弹场 | 阿尔伯特二号是一名有明确记录的恒河猴主人公。灵长类被用于军用火箭实验，地点为新墨西哥州白沙导弹场。 结果：猴子挺过飞行，却因降落伞失效撞击死亡。 | 无额外重大争议；按公开资料范围表述 | NASA（一手）；NASA History Office | NASA，research-only；纳入 |
| 117 戈多 | 松鼠猴；1958年12月13日；美国卡纳维拉尔角与大西洋 | 戈多是一名有明确记录的松鼠猴主人公。灵长类被用于测试载人航天风险，地点为卡纳维拉尔角与大西洋。 结果：戈多挺过飞行，却因溅落后漂浮系统失效死亡。 | 无额外重大争议；按公开资料范围表述 | NASA（一手）；NASA History Office | NASA，research-only；纳入 |
| 118 别尔卡与斯特列尔卡 | 家犬；1960年8月19日；苏联拜科努尔至地球轨道 | 别尔卡与斯特列尔卡是一名有明确记录的家犬主人公。犬、鼠与兔被禁闭于轨道生命保障试验，地点为拜科努尔至地球轨道。 结果：这些动物在十七圈轨道飞行后被活着回收。 | 无额外重大争议；按公开资料范围表述 | NASA Goddard Space Flight Center（一手）；NASA | NASA Goddard Space Flight Center，research-only；纳入 |
| 119 小蜜蜂与小苍蝇 | 家犬；1960年12月1日；苏联拜科努尔至地球轨道 | 小蜜蜂与小苍蝇是一名有明确记录的家犬主人公。犬与其他动物被置于带自毁装置的轨道试验，地点为拜科努尔至地球轨道。 结果：飞船在再入时被销毁，舱内动物全部死亡。 | 无额外重大争议；按公开资料范围表述 | NASA Technical Reports Server（一手）；NASA History Office | NASA Technical Reports Server，research-only；纳入 |
| 120 微风与煤球 | 家犬；1966年2月22日；苏联宇宙110号地球轨道 | 微风与煤球是一名有明确记录的家犬主人公。长期禁闭被用于测试航天生理极限，地点为宇宙110号地球轨道。 结果：两只犬活着返回，但严重虚弱与脱水。 | 无额外重大争议；按公开资料范围表述 | NASA Technical Reports Server（一手）；NASA History Office | NASA Technical Reports Server，research-only；纳入 |
| 121 邦尼 | 豚尾猕猴；1969年6月29日；美国生物卫星三号地球轨道 | 邦尼是一名有明确记录的豚尾猕猴主人公。灵长类被束缚于轨道中接受生理监测，地点为生物卫星三号地球轨道。 结果：邦尼状况恶化促使任务提前结束，回收后死亡。 | 无额外重大争议；按公开资料范围表述 | NASA Technical Reports Server（一手）；NASA History Office | NASA Technical Reports Server，research-only；纳入 |
| 122 哈洛隔离实验猴群 | 恒河猴；1971年；美国威斯康星大学麦迪逊分校 | 研究人员将幼年恒河猴长期单独禁闭，用于观察严重社会剥夺及后续恢复。实验论文记录了持续行为伤害。 | 项目跨越多年；1971年是恢复研究发表年，不代表单一暴露日。 | Proceedings of the National Academy of Sciences（一手）；Developmental Psychology | PNAS 论文记录，research-only；部分核实后纳入 |
| 123 宾夕法尼亚大学头部创伤狒狒群 | 狒狒；1985年5月1日；美国宾夕法尼亚大学 | 宾夕法尼亚大学头部创伤狒狒群是一名有明确记录的狒狒主人公。狒狒被束缚并反复接受脑损伤操作，地点为宾夕法尼亚大学。 结果：联邦审查发现严重缺陷并撤回资助。 | Exact animal counts differ across summaries of the laboratory records. | National Institutes of Health archive（一手）；National Library of Medicine | National Institutes of Health archive，research-only；部分核实后纳入 |
| 124 花子 | 亚洲象；2016年5月26日；日本井之头自然文化园 | 花子是一名有明确记录的亚洲象主人公。大象在城市混凝土围场中长期独居，地点为井之头自然文化园。 结果：花子六十九岁死亡，在园内生活六十二年。 | The zoo and advocates disagreed about how her welfare should be characterized. | Tokyo Zoological Park Society（一手）；Elephant Encyclopedia | Tokyo Zoological Park Society，research-only；部分核实后纳入 |
| 125 玛吉 | 非洲象；2007年11月1日；美国阿拉斯加动物园至ARK 2000保护区 | 玛吉是一名有明确记录的非洲象主人公。群居暖地动物被单独圈养于北极冬季环境，地点为阿拉斯加动物园至ARK 2000保护区。 结果：玛吉被空运至加州保护区并与其他大象共同生活。 | 无额外重大争议；按公开资料范围表述 | U.S. Air Force（一手）；Alaska Public Media | U.S. Air Force，research-only；纳入 |
| 126 哈皮 | 亚洲象；2022年6月14日；美国纽约布朗克斯动物园 | 哈皮是一名有明确记录的亚洲象主人公。数十年圈养与社会隔离进入动物权利诉讼，地点为纽约布朗克斯动物园。 结果：法院认定人身保护令不适用，哈皮留在动物园直至2026年死亡。 | The court did not rule that captivity was ideal; it ruled on the reach of habeas corpus. | New York Court of Appeals（一手）；Associated Press | New York Court of Appeals，research-only；部分核实后纳入 |
| 127 桑德拉 | 红毛猩猩杂交个体；2014年12月18日；阿根廷布宜诺斯艾利斯动物园 | 桑德拉是一名有明确记录的红毛猩猩杂交个体主人公。长期圈养与不合适围场引发法律行动，地点为布宜诺斯艾利斯动物园。 结果：法院要求改善福利，桑德拉后来转移至佛罗里达保护区。 | Popular reports simplify the wording and effect of the personhood rulings. | Buenos Aires Judiciary（一手）；TIME | Buenos Aires Judiciary，research-only；部分核实后纳入 |
| 128 波妮 | 婆罗洲红毛猩猩；2003年；印度尼西亚中加里曼丹 | 波妮是一名有明确记录的婆罗洲红毛猩猩主人公。红毛猩猩被剃毛、锁链束缚并遭性剥削，地点为中加里曼丹。 结果：执法与救援人员将波妮带走并送入康复项目。 | Graphic and sensational retellings are excluded; only documented conditions are summarized. | Borneo Orangutan Survival Foundation（一手）；BBC Earth | Borneo Orangutan Survival Foundation，research-only；部分核实后纳入 |
| 129 拉朱 | 亚洲象；2014年7月2日；印度北方邦 | 拉朱是一名有明确记录的亚洲象主人公。大象被用于乞讨并长期受带刺锁链束缚，地点为北方邦。 结果：在法院支持下，拉朱被转移至大象护理中心。 | 无额外重大争议；按公开资料范围表述 | Wildlife SOS（一手）；BBC News | Wildlife SOS，research-only；纳入 |
| 130 露西 | 亚洲象；2021年10月1日；加拿大埃德蒙顿河谷动物园 | 露西是一名有明确记录的亚洲象主人公。群居大象在寒冷地区动物园长期没有同类陪伴，地点为埃德蒙顿河谷动物园。 结果：独立评估对转移风险是否高于继续圈养存在分歧。 | Veterinary experts and advocates disagree over transport risk and welfare. | City of Edmonton（一手）；CBC News | City of Edmonton，research-only；部分核实后纳入 |
| 131 阿图罗 | 北极熊；2016年7月3日；阿根廷门多萨动物园 | 阿图罗是一名有明确记录的北极熊主人公。北极熊被单独圈养并暴露于极端夏季高温，地点为门多萨动物园。 结果：转移方案未实施，阿图罗最终死于园内。 | Sources disagreed over whether transport would have been medically safe. | Government of Mendoza（一手）；BBC News | Government of Mendoza，research-only；部分核实后纳入 |
| 132 披萨 | 北极熊；2016年11月13日；中国广州正佳极地海洋世界 | 披萨是一名有明确记录的北极熊主人公。北极熊被置于狭小室内展区服务商业娱乐，地点为广州正佳极地海洋世界。 结果：国际批评后，披萨一度被送回海洋公园。 | Later public information about Pizza's long-term location is limited. | Animals Asia（一手）；BBC News | Animals Asia，research-only；部分核实后纳入 |
| 133 凯科 | 虎鲸；2002年7月15日；冰岛冰岛韦斯特曼纳群岛 | 凯科是一名有明确记录的虎鲸主人公。捕捉与娱乐利用塑造了虎鲸对人类的依赖，地点为冰岛韦斯特曼纳群岛。 结果：凯科在监测下自由游动，2003年在挪威因肺炎死亡。 | Experts still debate whether the release program met its welfare and conservation goals. | Oregon Coast Aquarium（一手）；NOAA Fisheries | Oregon Coast Aquarium，research-only；部分核实后纳入 |
| 134 纳姆 | 虎鲸；1966年7月9日；美国西雅图海洋水族馆 | 纳姆是一名有明确记录的虎鲸主人公。虎鲸被网捕并运往商业展示设施，地点为西雅图海洋水族馆。 结果：纳姆在圈养约一年后死亡。 | Published accounts differ on whether infection alone explains his death. | Washington State History Museum（一手）；The Whale Museum | Washington State History Museum，research-only；部分核实后纳入 |
| 135 坎杜五号 | 虎鲸；1989年8月21日；美国圣迭戈海洋世界 | 坎杜五号是一名有明确记录的虎鲸主人公。圈养社会冲突与坚硬池壁造成致命创伤，地点为圣迭戈海洋世界。 结果：坎杜五号撞击另一只虎鲸后下颌骨折并死亡。 | 无额外重大争议；按公开资料范围表述 | NOAA Fisheries（一手）；The Whale Museum | NOAA Fisheries，research-only；纳入 |
| 136 雨果 | 虎鲸；1980年3月4日；美国迈阿密海洋水族馆 | 雨果是一名有明确记录的虎鲸主人公。被捕虎鲸在长期圈养中反复撞击水池，地点为迈阿密海洋水族馆。 结果：雨果死于脑动脉瘤，尸检记录提及此前头部损伤。 | Accounts differ on the causal role of repeated tank impacts. | NOAA Fisheries（一手）；Miami Herald | NOAA Fisheries，research-only；部分核实后纳入 |
| 137 哈妮 | 宽吻海豚；2020年3月29日；日本犬吠埼海洋公园 | 哈妮是一名有明确记录的宽吻海豚主人公。海豚在水族馆关闭后被遗留并仅获最低照护，地点为犬吠埼海洋公园。 结果：转移完成前，哈妮在原设施死亡。 | The facility did not release a complete veterinary report. | Dolphin Project（一手）；Japan Times | Dolphin Project，research-only；部分核实后纳入 |
| 138 纳努克 | 白鲸；2015年2月25日；美国奥兰多海洋世界 | 纳努克是一名有明确记录的白鲸主人公。白鲸被跨馆运输并用于圈养繁殖项目，地点为奥兰多海洋世界。 结果：纳努克在下颌骨折与感染后死亡。 | 无额外重大争议；按公开资料范围表述 | NOAA Fisheries（一手）；Orlando Sentinel | NOAA Fisheries，research-only；纳入 |
| 139 肯尼 | 白虎；2008年；美国松节油溪野生动物保护区 | 肯尼是一名有明确记录的白虎主人公。为商业毛色进行近亲繁殖造成先天畸形，地点为松节油溪野生动物保护区。 结果：肯尼在保护区生活，2008年因癌症死亡。 | Cancer was the direct cause of death; inbreeding explains his documented deformities. | Turpentine Creek Wildlife Refuge（一手）；Big Cat Rescue | Turpentine Creek Wildlife Refuge，research-only；部分核实后纳入 |
| 140 明 | 虎杂交个体；2003年10月4日；美国纽约哈莱姆公寓 | 明是一名有明确记录的虎杂交个体主人公。大型野生猫科被私人圈养于住宅公寓，地点为纽约哈莱姆公寓。 结果：执法人员将明移出公寓并转往保护区。 | Some early reports gave conflicting details about the length of confinement. | New York City Police Department archive（一手）；Associated Press | New York City Police Department archive，research-only；部分核实后纳入 |
| 141 利奥 | 雪豹；2006年；巴基斯坦／美国纳尔塔山谷至布朗克斯动物园 | 利奥是一名有明确记录的雪豹主人公。猎人在山地杀死幼崽的母亲，地点为纳尔塔山谷至布朗克斯动物园。 结果：利奥获救，后来被转移至布朗克斯动物园。 | 无额外重大争议；按公开资料范围表述 | U.S. Department of State archive（一手）；Wildlife Conservation Society | U.S. Department of State archive，research-only；纳入 |
| 142 庞索 | 黑猩猩；2015年；科特迪瓦阿比让附近实验弃置岛 | 庞索是一名有明确记录的黑猩猩主人公。实验黑猩猩被转移至岛屿并依赖当地人投喂，地点为阿比让附近实验弃置岛。 结果：其他被放置的黑猩猩死亡后，庞索独自存活。 | Responsibility for long-term support was disputed by the organizations involved. | New York Blood Center（一手）；BBC Future | New York Blood Center，research-only；部分核实后纳入 |
| 143 罗密欧 | 佛罗里达海牛；2023年11月3日；美国迈阿密海洋水族馆 | 罗密欧是一名有明确记录的佛罗里达海牛主人公。群居海牛被单独留在设施恶化的场馆，地点为迈阿密海洋水族馆。 结果：联邦与地方团队于2023年12月转移罗密欧及其他海牛。 | 无额外重大争议；按公开资料范围表述 | U.S. Department of Agriculture（一手）；Associated Press | U.S. Department of Agriculture，research-only；纳入 |
| 144 伊努卡 | 北极熊；2018年4月24日；新加坡新加坡动物园 | 伊努卡是一名有明确记录的北极熊主人公。圈养出生的北极熊一生生活在热带动物园，地点为新加坡动物园。 结果：伊努卡因健康恶化与严重老年疾病被安乐死。 | The direct cause was age-related decline; the entry concerns lifetime climate-controlled captivity. | Wildlife Reserves Singapore（一手）；BBC News | Wildlife Reserves Singapore，research-only；部分核实后纳入 |
| 145 玛莉 | 河马；2019年；泰国律实动物园搬迁 | 玛莉是一名有明确记录的河马主人公。高度社会化哺乳动物长期被单独展示，地点为律实动物园搬迁。 结果：律实动物园关闭后，玛莉被转移至考艾开放动物园。 | The exact balance of solitary and group housing changed over her lifetime. | Zoological Park Organization of Thailand（一手）；Bangkok Post | Zoological Park Organization of Thailand，research-only；部分核实后纳入 |
| 146 迪吉特 | 山地大猩猩；1977年12月31日；卢旺达维龙加山地 | 迪吉特是一名有明确记录的山地大猩猩主人公。盗猎者杀害已习惯人类观察的山地大猩猩，地点为维龙加山地。 结果：迪吉特死亡，其事件推动反盗猎工作。 | 无额外重大争议；按公开资料范围表述 | Dian Fossey Gorilla Fund（一手）；International Gorilla Conservation Programme | Dian Fossey Gorilla Fund，research-only；纳入 |
| 147 疤脸 | 灰熊；2015年11月30日；美国黄石国家公园 | 疤脸是一名有明确记录的灰熊主人公。知名灰熊在合法狩猎制度之外被枪杀，地点为黄石国家公园。 结果：疤脸因枪伤死亡，枪手身份未公开。 | The investigation did not establish a prosecutable suspect. | U.S. Fish and Wildlife Service（一手）；National Geographic | U.S. Fish and Wildlife Service，research-only；部分核实后纳入 |
| 148 灰熊399 | 灰熊；2024年10月22日；美国怀俄明州蛇河峡谷 | 灰熊399是一名有明确记录的灰熊主人公。道路交通杀死长期被监测的野生灰熊，地点为怀俄明州蛇河峡谷。 结果：这头二十八岁灰熊在车辆碰撞中死亡。 | 无额外重大争议；按公开资料范围表述 | U.S. Fish and Wildlife Service（一手）；Associated Press | U.S. Fish and Wildlife Service，research-only；纳入 |
| 149 灰熊148 | 灰熊；2017年7月8日；加拿大不列颠哥伦比亚省麦卡利斯特 | 灰熊148是一名有明确记录的灰熊主人公。人类食物、开发与跨辖区转移升级冲突，地点为不列颠哥伦比亚省麦卡利斯特。 结果：阿尔伯塔省转移后，灰熊148被猎人合法猎杀。 | Agencies disagreed over management choices before the killing. | Parks Canada（一手）；CBC News | Parks Canada，research-only；部分核实后纳入 |
| 150 布鲁诺（JJ1） | 棕熊；2006年6月26日；德国巴伐利亚 | 布鲁诺（JJ1）是一名有明确记录的棕熊主人公。扩散中的棕熊接近人类区域后被认定危险，地点为巴伐利亚。 结果：捕捉尝试失败后，获授权猎人射杀布鲁诺。 | 无额外重大争议；按公开资料范围表述 | Bavarian Environment Agency（一手）；Deutsche Welle | Bavarian Environment Agency，research-only；纳入 |
| 151 达妮扎 | 棕熊；2014年9月11日；意大利特伦蒂诺 | 达妮扎是一名有明确记录的棕熊主人公。带幼崽母熊伤人后成为捕捉对象，地点为特伦蒂诺。 结果：达妮扎在捕捉行动的麻醉后死亡。 | Authorities described an adverse reaction; advocates questioned the operation. | Autonomous Province of Trento（一手）；BBC News | Autonomous Province of Trento，research-only；部分核实后纳入 |
| 152 喷火（926F） | 灰狼；2018年11月24日；美国蒙大拿州银门附近 | 喷火（926F）是一名有明确记录的灰狼主人公。习惯人类观察的狼越过无形公园边界进入猎区，地点为蒙大拿州银门附近。 结果：猎人在公园外合法射杀这只狼。 | 无额外重大争议；按公开资料范围表述 | National Park Service（一手）；New York Times | National Park Service，research-only；纳入 |
| 153 莫帕尼 | 非洲狮；2021年8月5日；津巴布韦万基国家公园附近 | 莫帕尼是一名有明确记录的非洲狮主人公。受监测雄狮在保护地外遭战利品猎杀，地点为万基国家公园附近。 结果：莫帕尼在狩猎许可框架下被杀。 | Public accounts differ about the exact location and whether bait was used. | Zimbabwe Parks and Wildlife Management Authority（一手）；National Geographic | Zimbabwe Parks and Wildlife Management Authority，research-only；部分核实后纳入 |
| 154 坦迪 | 南方白犀；2012年3月2日；南非卡里加野生动物保护区 | 坦迪是一名有明确记录的南方白犀主人公。盗猎者麻醉犀牛并割走犀角，地点为卡里加野生动物保护区。 结果：坦迪在多次兽医治疗后从严重面部损伤中存活。 | 无额外重大争议；按公开资料范围表述 | Kariega Game Reserve（一手）；Save the Rhino International | Kariega Game Reserve，research-only；纳入 |
| 155 贝拉 | 南方白犀；2021年3月16日；南非克鲁格斯多普 | 贝拉是一名有明确记录的南方白犀主人公。盗猎者为犀角杀死获救犀牛，地点为克鲁格斯多普。 结果：贝拉与未出生幼崽死亡，犀角被割走。 | 无额外重大争议；按公开资料范围表述 | Rhino Orphanage（一手）；BBC News | Rhino Orphanage，research-only；纳入 |
| 156 霍普 | 南方白犀；2015年8月4日；南非隆巴迪尼野生动物农场 | 霍普是一名有明确记录的南方白犀主人公。盗猎者为割取双角切入犀牛面部，地点为隆巴迪尼野生动物农场。 结果：霍普接受多次重建手术，2016年因感染死亡。 | 无额外重大争议；按公开资料范围表述 | Saving the Survivors（一手）；Reuters | Saving the Survivors，research-only；纳入 |
| 157 永基 | 苏门答腊象；2015年9月18日；印度尼西亚武吉巴里桑南部国家公园 | 永基是一名有明确记录的苏门答腊象主人公。巡护象疑遭毒杀或袭击并被割取象牙，地点为武吉巴里桑南部国家公园。 结果：永基被发现死亡，两枚象牙被割走。 | The precise killing method was not publicly established. | Indonesian Ministry of Environment and Forestry（一手）；Reuters | Indonesian Ministry of Environment and Forestry，research-only；部分核实后纳入 |
| 158 阿芙妮（T1） | 孟加拉虎；2018年11月2日；印度马哈拉施特拉邦亚瓦特马尔 | 阿芙妮（T1）是一名有明确记录的孟加拉虎主人公。被指与人类死亡有关的母虎在猎杀令下遭追捕，地点为马哈拉施特拉邦亚瓦特马尔。 结果：私人猎手团队射杀阿芙妮，幼崽后来被捕获。 | Responsibility for particular human deaths and compliance with the capture protocol were disputed. | Supreme Court of India（一手）；BBC News | Supreme Court of India，research-only；部分核实后纳入 |
| 159 乌斯塔德（T24） | 孟加拉虎；2015年5月16日；印度伦滕波尔至萨詹加尔 | 乌斯塔德（T24）是一名有明确记录的孟加拉虎主人公。受监测野生虎在人类死亡事件后被捕并永久圈养，地点为伦滕波尔至萨詹加尔。 结果：乌斯塔德被转移至动物园围场，没有返回领地。 | Whether the identified tiger was responsible for every attributed death remained contested. | Rajasthan High Court（一手）；BBC News | Rajasthan High Court，research-only；部分核实后纳入 |
| 160 帕皮永（M49） | 棕熊；2023年7月30日；意大利特伦蒂诺卡斯特勒 | 帕皮永（M49）是一名有明确记录的棕熊主人公。野生棕熊因牲畜冲突被反复捕捉和圈养，地点为特伦蒂诺卡斯特勒。 结果：M49在卡斯特勒野生动物设施内死亡。 | A full independent necropsy report was not public at verification. | Autonomous Province of Trento（一手）；ANSA | Autonomous Province of Trento，research-only；部分核实后纳入 |
| 161 斯凯 | 灰狼；2020年12月4日；美国明尼苏达边界水域 | 斯凯是一名有明确记录的灰狼主人公。佩戴项圈的研究个体进入合法猎区，地点为明尼苏达边界水域。 结果：这只受监测灰狼在保护研究区外被合法射杀。 | The animal's public nickname and exact boundary-crossing time vary in reports. | University of Minnesota（一手）；Minnesota Public Radio | University of Minnesota，research-only；部分核实后纳入 |
| 162 察沃迁移黑犀群 | 东部黑犀；2018年6月至7月；肯尼亚察沃东国家公园 | 政府迁移的十一只黑犀全部死亡；议会调查认定盐中毒、脱水、饥饿、应激与协调监督失败共同造成十只死亡，最后一只遭狮子袭击。 | 死亡分布在数周内，不能压缩成单一日期。 | Parliament of Kenya（一手）；Save the Rhino International | 肯尼亚议会调查报告，research-only；部分核实后纳入 |
| 163 幸运 | 马来穿山甲；2022年；越南越南野生动物救护中心 | 幸运是一名有明确记录的马来穿山甲主人公。穿山甲被捕获并经非法野生动物贸易运输，地点为越南野生动物救护中心。 结果：幸运被查获、治疗并进入放归准备。 | The rescue program publishes limited individual dates for security reasons. | Save Vietnam's Wildlife（一手）；CITES | Save Vietnam's Wildlife，research-only；部分核实后纳入 |
| 164 古驰 | 家犬；1994年5月1日；美国阿拉巴马州莫比尔 | 古驰是一名有明确记录的家犬主人公。施害者殴打、勒缚并焚烧幼犬，地点为阿拉巴马州莫比尔。 结果：古驰幸存，案件推动严重虐待动物成为重罪。 | The law was formally Alabama's 2000 Pet Protection Act; 'Gucci's Law' is the public name. | Alabama Legislature（一手）；The Humane Society of the United States | Alabama Legislature，research-only；部分核实后纳入 |
| 165 苏茜 | 家犬；2009年8月20日；美国北卡罗来纳州格林斯伯勒 | 苏茜是一名有明确记录的家犬主人公。幼犬被殴打、焚烧并遭遗弃，地点为北卡罗来纳州格林斯伯勒。 结果：苏茜幸存，北卡罗来纳州提高恶意虐待处罚。 | 无额外重大争议；按公开资料范围表述 | North Carolina General Assembly（一手）；North Carolina General Assembly | North Carolina General Assembly，research-only；纳入 |
| 166 露西 | 骑士查理王小猎犬；2013年；英国南威尔士繁殖场 | 露西是一名有明确记录的骑士查理王小猎犬主人公。繁殖犬在恶劣商业环境中被反复繁殖，地点为南威尔士繁殖场。 结果：露西获救，英格兰后来禁止第三方销售幼犬与幼猫。 | 无额外重大争议；按公开资料范围表述 | UK Government（一手）；RSPCA | UK Government，research-only；纳入 |
| 167 汤米 | 家犬；2019年2月10日；美国弗吉尼亚州里士满 | 汤米是一名有明确记录的家犬主人公。犬被绑在围栏上、泼洒助燃剂并焚烧，地点为弗吉尼亚州里士满。 结果：汤米因烧伤死亡，弗吉尼亚州提高虐待动物处罚。 | 无额外重大争议；按公开资料范围表述 | Virginia General Assembly（一手）；Richmond Animal Care and Control | Virginia General Assembly，research-only；纳入 |
| 168 特鲁珀 | 斗牛梗；2024年10月9日；美国坦帕附近75号州际公路 | 特鲁珀是一名有明确记录的斗牛梗主人公。犬在强飓风来临前被遗弃于上涨水位中，地点为坦帕附近75号州际公路。 结果：公路巡警救出特鲁珀，主人被起诉并推动新的遗弃法律。 | 无额外重大争议；按公开资料范围表述 | Florida Department of Highway Safety and Motor Vehicles（一手）；Florida Senate | Florida Department of Highway Safety and Motor Vehicles，research-only；纳入 |
| 169 德克斯特 | 斗牛犬混种；2024年3月26日；美国佛罗里达州皮内拉斯县 | 德克斯特是一名有明确记录的斗牛犬混种主人公。伴侣犬被故意杀死并弃置，地点为佛罗里达州皮内拉斯县。 结果：嫌疑人被起诉，佛罗里达后来建立虐待动物者登记制度。 | Charges are allegations until resolved in court. | Florida Senate（一手）；Pinellas County Sheriff's Office | Florida Senate，research-only；部分核实后纳入 |
| 170 菲尼克斯 | 比特类型犬；2009年5月27日；美国马里兰州巴尔的摩 | 菲尼克斯是一名有明确记录的比特类型犬主人公。犬被泼洒汽油并纵火焚烧，地点为马里兰州巴尔的摩。 结果：菲尼克斯经治疗后死亡，刑事案件未形成定罪。 | Two trials ended without a final conviction. | Baltimore City State's Attorney（一手）；Baltimore Sun | Baltimore City State's Attorney，research-only；部分核实后纳入 |
| 171 奥利 | 比特类型犬；2017年10月10日；美国佛罗里达州好莱坞 | 奥利是一名有明确记录的比特类型犬主人公。犬被多次刺伤并塞入行李箱遗弃，地点为佛罗里达州好莱坞。 结果：奥利获救后死亡，被告后来因虐待动物获罪。 | 无额外重大争议；按公开资料范围表述 | Hollywood Police Department（一手）；Sun Sentinel | Hollywood Police Department，research-only；纳入 |
| 172 伦诺克斯 | 美国斗牛犬与拉布拉多混种；2012年7月11日；英国贝尔法斯特 | 伦诺克斯是一名有明确记录的美国斗牛犬与拉布拉多混种主人公。家庭犬因外形类型被扣押并圈禁两年，地点为贝尔法斯特。 结果：上诉失败后，贝尔法斯特市议会对伦诺克斯实施安乐死。 | The council and family disputed temperament evidence and access during confinement. | Belfast City Council（一手）；BBC News | Belfast City Council，research-only；部分核实后纳入 |
| 173 花生与弗雷德 | 东部灰松鼠与浣熊；2024年10月30日；美国纽约州派恩城 | 花生与弗雷德是一名有明确记录的东部灰松鼠与浣熊主人公。作为社交媒体宠物饲养的野生动物依据法规被查扣，地点为纽约州派恩城。 结果：咬伤事件后，州政府为狂犬病检测对两只动物实施安乐死。 | The legality of possession and proportionality of the response remained publicly disputed. | New York State Department of Environmental Conservation（一手）；Associated Press | New York State Department of Environmental Conservation，research-only；部分核实后纳入 |
| 174 奥利奥 | 比特类型犬；2009年6月1日；美国纽约市 | 奥利奥是一名有明确记录的比特类型犬主人公。犬被从建筑物抛下，后又被认定不适合安置，地点为纽约市。 结果：尽管有保护区愿意接收，收容机构仍对奥利奥实施安乐死。 | The shelter and advocates disagreed over behavioral risk and transfer duties. | New York State Senate（一手）；New York Times | New York State Senate，research-only；部分核实后纳入 |
| 175 天狼星 | 拉布拉多寻回犬；2001年9月11日；美国纽约世界贸易中心 | 天狼星是一名有明确记录的拉布拉多寻回犬主人公。警用爆炸物搜查犬在恐怖袭击中被留于犬舍，地点为纽约世界贸易中心。 结果：南塔在训导员返回前倒塌，天狼星死亡。 | 无额外重大争议；按公开资料范围表述 | Officer Down Memorial Page（一手）；PDSA | Officer Down Memorial Page，research-only；纳入 |
| 176 罗科 | 德国牧羊犬；2014年1月30日；美国宾夕法尼亚州匹兹堡 | 罗科是一名有明确记录的德国牧羊犬主人公。警方将犬部署进与持刀逃犯的近距离冲突，地点为宾夕法尼亚州匹兹堡。 结果：罗科在肾脏与脊椎受伤两天后死亡。 | 无额外重大争议；按公开资料范围表述 | Officer Down Memorial Page（一手）；Pittsburgh Post-Gazette via Police1 | Officer Down Memorial Page，research-only；纳入 |
| 177 凯 | 德国牧羊犬；2014年8月25日；美国俄克拉何马城 | 凯是一名有明确记录的德国牧羊犬主人公。警犬被派入黑暗排水区域追捕嫌疑人，地点为俄克拉何马城。 结果：凯在刺伤手术后死亡。 | 无额外重大争议；按公开资料范围表述 | Officer Down Memorial Page（一手）；Oklahoma City Police Department | Officer Down Memorial Page，research-only；纳入 |
| 178 艾克 | 德国牧羊犬；2015年9月2日；美国华盛顿州温哥华 | 艾克是一名有明确记录的德国牧羊犬主人公。警犬被派入灌木丛面对携刀逃犯，地点为华盛顿州温哥华。 结果：艾克经紧急治疗后因刺伤死亡。 | 无额外重大争议；按公开资料范围表述 | Officer Down Memorial Page（一手）；Police1 | Officer Down Memorial Page，research-only；纳入 |
| 179 克里赫尔 | 比利时马里努阿犬；2016年1月11日；美国弗吉尼亚州诺福克 | 克里赫尔是一名有明确记录的比利时马里努阿犬主人公。警犬在家庭警情中被派向持枪人员，地点为弗吉尼亚州诺福克。 结果：克里赫尔因枪伤死亡。 | 无额外重大争议；按公开资料范围表述 | Officer Down Memorial Page（一手）；Norfolk Police Department | Officer Down Memorial Page，research-only；纳入 |
| 180 罗宁 | 比利时马里努阿犬；2013年6月20日；美国亚利桑那州格伦代尔 | 罗宁是一名有明确记录的比利时马里努阿犬主人公。战术警犬被派入持枪对峙现场，地点为亚利桑那州格伦代尔。 结果：罗宁因枪伤死亡，训导员也受伤。 | 无额外重大争议；按公开资料范围表述 | Officer Down Memorial Page（一手）；Glendale Police Department | Officer Down Memorial Page，research-only；纳入 |
| 181 贾多 | 比利时马里努阿犬；2016年11月18日；美国爱达荷州博伊西 | 贾多是一名有明确记录的比利时马里努阿犬主人公。警犬在与持枪嫌疑人对峙中被部署，地点为爱达荷州博伊西。 结果：贾多在枪伤手术及并发症后死亡。 | 无额外重大争议；按公开资料范围表述 | Officer Down Memorial Page（一手）；Boise Police Department | Officer Down Memorial Page，research-only；纳入 |
| 182 西戈 | 比利时马里努阿犬；2018年12月24日；美国佛罗里达州惠灵顿 | 西戈是一名有明确记录的比利时马里努阿犬主人公。警犬被派向持枪的谋杀未遂嫌疑人，地点为佛罗里达州惠灵顿。 结果：西戈在行动中因枪击死亡。 | 无额外重大争议；按公开资料范围表述 | Officer Down Memorial Page（一手）；Palm Beach County Sheriff's Office | Officer Down Memorial Page，research-only；纳入 |
| 183 查基 | 比利时马里努阿犬；2019年1月25日；美国得克萨斯州贝尔县 | 查基是一名有明确记录的比利时马里努阿犬主人公。缉毒与巡逻犬被派向持枪驾驶者，地点为得克萨斯州贝尔县。 结果：嫌疑人在抓捕中枪杀查基。 | 无额外重大争议；按公开资料范围表述 | Officer Down Memorial Page（一手）；Officer Down Memorial Page | Officer Down Memorial Page，research-only；纳入 |
| 184 基特 | 比利时马里努阿犬；2021年6月4日；美国马萨诸塞州布伦特里 | 基特是一名有明确记录的比利时马里努阿犬主人公。警犬被派向林地中的持枪人员，地点为马萨诸塞州布伦特里。 结果：基特被枪杀，两名警员受伤。 | 无额外重大争议；按公开资料范围表述 | Officer Down Memorial Page（一手）；Braintree Police Department | Officer Down Memorial Page，research-only；纳入 |
| 185 卢卡 | 德国牧羊犬与马里努阿犬混种；2012年3月23日；阿富汗赫尔曼德省 | 卢卡是一名有明确记录的德国牧羊犬与马里努阿犬混种主人公。军犬被派在巡逻队前方探测爆炸物，地点为赫尔曼德省。 结果：卢卡在简易爆炸装置爆炸后幸存，左前腿被截肢。 | 无额外重大争议；按公开资料范围表述 | PDSA（一手）；U.S. Marine Corps | PDSA，research-only；纳入 |
| 186 库诺 | 比利时马里努阿犬；2019年5月1日；阿富汗阿富汗 | 库诺是一名有明确记录的比利时马里努阿犬主人公。军犬在特种部队突袭中被派入枪火，地点为阿富汗。 结果：库诺经大型手术幸存并安装义肢。 | 无额外重大争议；按公开资料范围表述 | PDSA（一手）；UK Ministry of Defence | PDSA，research-only；纳入 |
| 187 雷克利斯军士 | 蒙古母马；1953年；朝鲜半岛维加斯前哨战 | 雷克利斯军士是一名有明确记录的蒙古母马主人公。马被用于在炮火中运送沉重弹药，地点为维加斯前哨战。 结果：雷克利斯两次受伤仍存活并继续任务。 | 无额外重大争议；按公开资料范围表述 | National Museum of the Marine Corps（一手）；PDSA | National Museum of the Marine Corps，research-only；纳入 |
| 188 塞夫顿 | 军马；1982年7月20日；英国伦敦海德公园 | 塞夫顿是一名有明确记录的军马主人公。仪仗军马被置于爱尔兰共和军炸弹袭击中，地点为伦敦海德公园。 结果：塞夫顿全身多处受伤并接受数小时手术。 | 无额外重大争议；按公开资料范围表述 | PDSA（一手）；Household Cavalry Museum | PDSA，research-only；纳入 |
| 189 尼莫A534 | 德国牧羊犬；1966年12月4日；越南共和国新山一空军基地 | 尼莫A534是一名有明确记录的德国牧羊犬主人公。哨戒犬被部署进武装战斗，地点为新山一空军基地。 结果：尼莫从面部枪伤中幸存，但失去一只眼睛。 | 无额外重大争议；按公开资料范围表述 | National Museum of the U.S. Air Force（一手）；U.S. War Dogs Association | National Museum of the U.S. Air Force，research-only；纳入 |
| 190 奇普斯 | 牧羊犬、柯利犬与哈士奇混种；1943年7月10日；意大利西西里岛 | 奇普斯是一名有明确记录的牧羊犬、柯利犬与哈士奇混种主人公。家庭犬被捐给军队并部署进战斗，地点为西西里岛。 结果：奇普斯遭烧伤与枪伤但在战争中幸存。 | 无额外重大争议；按公开资料范围表述 | PDSA（一手）；National Archives Foundation | PDSA，research-only；纳入 |
| 191 巴哈马群体搁浅鲸群 | 喙鲸及其他鲸豚；2000年3月15日；巴哈马巴哈马北部 | 巴哈马群体搁浅鲸群是一名有明确记录的喙鲸及其他鲸豚主人公。军用中频声呐使深潜鲸豚暴露于强烈声音，地点为巴哈马北部。 结果：十七只鲸豚搁浅，至少七只死亡。 | The official report described sonar as the most plausible cause while retaining scientific limits. | U.S. Navy and NOAA（一手）；NOAA Fisheries | U.S. Navy and NOAA，research-only；部分核实后纳入 |
| 192 马达加斯加瓜头鲸群 | 瓜头鲸；2008年5月30日；马达加斯加洛扎潟湖 | 马达加斯加瓜头鲸群是一名有明确记录的瓜头鲸主人公。高功率多波束测深声呐被认定为可能诱因，地点为洛扎潟湖。 结果：约一百只鲸进入潟湖或搁浅，多只死亡。 | The panel called the echosounder plausible but could not prove a unique cause. | International Whaling Commission（一手）；IWC and U.S. Marine Mammal Commission | International Whaling Commission，research-only；部分核实后纳入 |
| 193 马比尼柯氏喙鲸 | 柯氏喙鲸；2019年3月16日；菲律宾达沃德奥罗省马比尼 | 马比尼柯氏喙鲸是一名有明确记录的柯氏喙鲸主人公。海洋塑料垃圾阻塞进食并损害消化系统，地点为达沃德奥罗省马比尼。 结果：喙鲸死亡，尸检记录约四十公斤塑料。 | 无额外重大争议；按公开资料范围表述 | Philippines Department of Environment and Natural Resources（一手）；TIME | Philippines Department of Environment and Natural Resources，research-only；纳入 |
| 194 宋卡领航鲸 | 短肢领航鲸；2018年6月1日；泰国宋卡府 | 宋卡领航鲸是一名有明确记录的短肢领航鲸主人公。废弃塑料阻塞鲸的胃部，地点为宋卡府。 结果：鲸吐出塑料袋后死亡，尸检发现约八公斤塑料。 | 无额外重大争议；按公开资料范围表述 | Thailand Department of Marine and Coastal Resources（一手）；TIME | Thailand Department of Marine and Coastal Resources，research-only；纳入 |
| 195 阿根廷斯氏鵟群 | 斯氏鵟；1995年12月1日；阿根廷潘帕斯农业区 | 阿根廷斯氏鵟群是一名有明确记录的斯氏鵟主人公。有机磷农药使农田取食鸟类中毒，地点为潘帕斯农业区。 结果：多个季节有数千只鵟死亡，随后相关农药受到限制。 | Counts vary by carcass search area and season. | U.S. Fish and Wildlife Service（一手）；Journal of Raptor Research | U.S. Fish and Wildlife Service，research-only；部分核实后纳入 |
| 196 费尔奥克斯农场犊牛群 | 家牛；2019年6月4日；美国印第安纳州费尔奥克斯农场 | 费尔奥克斯农场犊牛群是一名有明确记录的家牛主人公。员工被记录殴打、投掷与拖拽幼小犊牛，地点为印第安纳州费尔奥克斯农场。 结果：员工被解雇并遭起诉，零售商一度下架产品。 | The footage documented specific sites and dates, not every farm employee. | Newton County Sheriff's Office（一手）；Associated Press | Newton County Sheriff's Office，research-only；部分核实后纳入 |
| 197 爱荷华精选农场猪群 | 家猪；2020年5月19日；美国爱荷华州养殖设施 | 爱荷华精选农场猪群是一名有明确记录的家猪主人公。供应链危机中，生产者以升温和关闭通风清空猪舍，地点为爱荷华州养殖设施。 结果：大量猪因高热与窒息死亡。 | The company did not publish a complete site-by-site death count. | U.S. Department of Agriculture（一手）；The Intercept | U.S. Department of Agriculture，research-only；部分核实后纳入 |
| 198 阿瓦西快运号绵羊群 | 家绵羊；2017年8月1日；澳大利亚／中东印度洋至波斯湾航线 | 阿瓦西快运号绵羊群是一名有明确记录的家绵羊主人公。活体出口条件使拥挤动物暴露于极端高温高湿，地点为印度洋至波斯湾航线。 结果：2017年8月航程中两千四百余只绵羊死亡。 | 无额外重大争议；按公开资料范围表述 | Australian Department of Agriculture（一手）；ABC News | Australian Department of Agriculture，research-only；纳入 |
| 199 玛丽女王号绵羊群 | 家绵羊；2019年11月24日；罗马尼亚米迪亚港 | 玛丽女王号绵羊群是一名有明确记录的家绵羊主人公。高密度活体运输使动物困在倾覆船舱，地点为米迪亚港。 结果：仅数百只绵羊获救，大多数溺亡或死于船内。 | Final rescued and deceased totals differ slightly across reports. | Romanian Naval Authority（一手）；BBC News | Romanian Naval Authority，research-only；部分核实后纳入 |
| 200 童话橡树林动物园动物群 | 动物园哺乳类、鸟类与爬行类；2023年6月6日；乌克兰新卡霍夫卡 | 童话橡树林动物园动物群是一名有明确记录的动物园哺乳类、鸟类与爬行类主人公。战争相关大坝毁坏使圈养动物围场迅速被淹，地点为新卡霍夫卡。 结果：动物园称大多数动物死亡，确切数量无法独立统计。 | The occupied location prevented a complete independent inventory. | Ukrainian Ministry of Environmental Protection（一手）；Associated Press | Ukrainian Ministry of Environmental Protection，research-only；部分核实后纳入 |

### 第四轮结论

- 严格致死候选达到 200 个事件；相邻同物种精简后，当前公开时间线为 191 个事件，资料核实日更新为 2026-07-13。
- 新增 100 个事件覆盖 1826—2024，并保留既有时间线中截至 2026 年 7 月的最新记录。
- 新增类别包括灭绝、动物实验、长期圈养、盗猎、战利品狩猎、人兽冲突、伴侣动物虐待、警犬与军用动物、军用声呐、塑料污染、农药、工业化养殖、活体海运与战争洪灾。
- 第四轮专属动物画像尚未批量生成；前台以明确的中性研究队列标记替代，不复用旧画像冒充新个体。

<!-- FATAL_EXPANSION_START -->

## 201–286. 严格致死扩展：新增 86 个研究事件

本轮在保留原有 86 条暂缓伤害记录的同时，新增 86 条“死亡已确认且由人类行为造成”的替代记录，使研究库达到 286 条、严格致死候选达到 200 条。相邻同物种精简后，公开时间线为 191 条。新增案例覆盖航天实验、警犬因公死亡、圈养管理、野生动物犯罪、污染与工业事故、伴侣动物虐待、影视与赛马、农业扑杀和活体运输；每条至少两项来源并至少包含一项机构、法院、政府或同期正式记录。

| 编号／事件主人公 | 物种；日期；地点 | 已核实的人类行为与死亡结果 | 不确定信息 | 一手与独立来源 | 图片许可与纳入判断 |
|---|---|---|---|---|---|
| 201 阿尔伯特四号 | 恒河猴；1949年12月12日；美国新墨西哥州白沙试验场 | 军用V-2研究飞行没有提供可生还的回收。阿尔伯特四号在飞行中存活，却在返回撞击时死亡。 | 关键日期、地点、行为与结果在两项来源间无实质冲突。 | NASA《A Brief History of Animals in Space》；独立来源：Smithsonian National Air and Space Museum《Blazing the Trail in Space》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 202 V-2飞行小鼠 | 实验小鼠；1950年8月31日；美国新墨西哥州白沙试验场 | 未麻醉小鼠被送上没有可生还降落的V-2火箭。小鼠在飞行中被拍摄，返回撞击后死亡。 | 关键日期、地点、行为与结果在两项来源间无实质冲突。 | NASA《A Brief History of Animals in Space》；独立来源：Smithsonian National Air and Space Museum《Blazing the Trail in Space》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 203 德齐克与莉萨 | 家犬；1951年9月；苏联卡普斯京亚尔发射场 | 两只犬被置于发生故障的R-1实验火箭中。两只犬均死亡，数据记录器被找回。 | NASA资料只写明1951年9月上旬，未给出一致的具体日期。 | NASA《A Brief History of Animals in Space》；独立来源：Smithsonian National Air and Space Museum《Blazing the Trail in Space》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 204 MIA-1小鼠 | 实验小鼠；1958年4月23日；美国佛罗里达州卡纳维拉尔角 | 再入试验把活体小鼠置于升空后被毁的火箭中。运载火箭被毁，小鼠随之死亡。 | 关键日期、地点、行为与结果在两项来源间无实质冲突。 | NASA《A Brief History of Animals in Space》；独立来源：Smithsonian National Air and Space Museum《Blazing the Trail in Space》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 205 拉斯卡 | 实验小鼠；1958年7月9日；美国佛罗里达州卡纳维拉尔角 | 小鼠被用于极端加速度与不可回收的再入试验。拉斯卡经历约60G加速度与45分钟失重后死亡。 | 关键日期、地点、行为与结果在两项来源间无实质冲突。 | NASA《A Brief History of Animals in Space》；独立来源：Smithsonian National Air and Space Museum《Blazing the Trail in Space》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 206 艾布尔 | 恒河猴；1959年6月1日；美国肯塔基州诺克斯堡 | 研究人员在飞行后为取出植入电极实施麻醉手术。艾布尔在获救四天后因麻醉并发症死亡。 | 关键日期、地点、行为与结果在两项来源间无实质冲突。 | NASA《A Brief History of Animals in Space》；独立来源：Smithsonian National Air and Space Museum《Blazing a Trail for Human Spaceflight》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 207 发现者3号小鼠组 | 实验小鼠；1959年6月3日；美国加利福尼亚州范登堡空军基地 | 首组误食有毒笼具涂层，替补组又被送入失败轨道。四只小鼠发射前中毒死亡，另四只随飞行器坠入太平洋死亡。 | 同一任务包含两组死亡原因不同的小鼠，合并为一个事件记录。 | NASA《A Brief History of Animals in Space》；独立来源：U.S. Central Intelligence Agency《Discoverer program history》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 208 朱庇特火箭十四只小鼠 | 实验小鼠；1959年9月16日；美国佛罗里达州卡纳维拉尔角 | 十四只小鼠被置于升空后被毁的朱庇特火箭中。火箭被毁，所载十四只小鼠全部死亡。 | 关键日期、地点、行为与结果在两项来源间无实质冲突。 | NASA《A Brief History of Animals in Space》；独立来源：Smithsonian National Air and Space Museum《Blazing the Trail in Space》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 209 巴尔斯与利西奇卡 | 家犬；1960年7月28日；苏联拜科努尔航天发射场 | 两只犬被送入助推器发生爆炸的东方号原型任务。两只犬均在发射过程中死亡。 | 关键日期、地点、行为与结果在两项来源间无实质冲突。 | NASA《A Brief History of Animals in Space》；独立来源：Smithsonian National Air and Space Museum《Blazing the Trail in Space》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 210 歌利亚 | 松鼠猴；1961年11月10日；美国佛罗里达州卡纳维拉尔角 | 松鼠猴被置于升空数十秒后被毁的Atlas E试验中。歌利亚在升空35秒后随火箭被毁而死亡。 | 关键日期、地点、行为与结果在两项来源间无实质冲突。 | NASA《A Brief History of Animals in Space》；独立来源：Smithsonian National Air and Space Museum《Blazing the Trail in Space》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 211 探测器6号生物样本群 | 陆龟、昆虫与微生物；1968年11月17日；苏联绕月与返回航程 | 载有生物样本的载人飞船原型在返回途中失去舱压。陆龟及其他生物样本因失压而死亡。 | 公开资料列出陆龟等生物载荷，但未公开逐项数量。 | NASA《50 Years Ago, On the Way to the Moon》；独立来源：NASA《A Brief History of Animals in Space》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 212 穆尔季克 | 恒河猴；1997年1月8日；俄罗斯莫斯科飞行后实验室 | 研究人员在飞行后为侵入性取样实施麻醉。穆尔季克在着陆后的医学手术中死亡。 | 关键日期、地点、行为与结果在两项来源间无实质冲突。 | NASA Open Science Data Repository《Bion 11 payload record》；独立来源：The Washington Post《U.S. Drops Primate Study Citing Unacceptable Risk》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 213 埃尔德岛最后一对大海雀 | 大海雀；1844年6月；冰岛埃尔德岛 | 渔民为博物馆收藏者杀死一对繁殖中的大海雀。两只鸟均被杀，鸟蛋被毁，此后没有再确认繁殖对。 | 现代资料对具体日写作6月3日或7月3日，本条仅采用1844年6月的月份精度。 | Smithsonian Institution《Research Case: The Great Auk》；独立来源：Cincinnati Museum Center《Cincinnati specimen helps solve 180-year extinction mystery》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 214 坎皮恩鸸鹋群 | 鸸鹋；1932年11月2日；澳大利亚西澳大利亚州坎皮恩地区 | 澳大利亚政府在农业害兽控制行动中部署士兵与机枪。同期报道确认有鸸鹋被杀，后来的死亡总数仍有争议。 | 行动持续数周，关于确认死亡数量的说法从数十只到986只不等；本条不采用最高数字。 | Rotorua Morning Post / Papers Past《Emus in Thousands — settlers seek machine guns》；独立来源：ABC News Australia《Australia's Emu War 90 years on》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 215 明／哈弗伦 | 北极圆蛤；2006年；冰岛／英国冰岛近海 | 研究人员采集活体圆蛤并打开贝壳，当时尚不知道其异常高龄。开壳使圆蛤死亡，后续年轮计数确认其年龄为507岁。 | 研究团队不知道活体的确切年龄，必须开壳后才能计数；死亡并非在已知其年龄后故意实施。 | Bangor University《Clam found to be over 500 years old》；独立来源：Nature Portfolio blog《A clam named Ming》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 216 佩佩 | 河马；2009年6月18日；哥伦比亚安蒂奥基亚省贝里奥港 | 环境主管机构授权猎人并由军人协助杀死一头逃逸河马。佩佩在控制猎杀中遭枪击死亡。 | 佩佩属于被私人引入后扩散的外来河马；本条记录个体被授权射杀，不评价当前种群管理方案。 | Tribunal Administrativo de Cundinamarca《Judgment on management of Colombia's hippopotamuses》；独立来源：El Tiempo《La colombianísima muerte de Pepe》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 217 威尔逊维尔熊蜂群 | 本地熊蜂；2013年6月17日；美国俄勒冈州威尔逊维尔 | 园林公司把呋虫胺施用于熊蜂正在采食的开花椴树。估计约五万只熊蜂死亡，俄勒冈州后来限制在椴树上使用相关农药。 | 早期估算为2.5万只，后续研究估算约5万只；前台使用“约”和机构后续数字。 | Oregon Department of Agriculture《Pesticide Analytical and Response Council 2011–2013 report》；独立来源：Xerces Society《The Wilsonville Bee Kill》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 218 黄石野牛幼崽 | 美洲野牛；2016年5月16日；美国黄石国家公园 | 游客把新生幼崽放进汽车，护林员随后未能使它回到野牛群。幼崽反复接近人和车辆后，园方将其安乐死。 | 游客可能自认为是在救助幼崽；本条不推断动机，只记录违规接触、无法归群与随后安乐死。 | U.S. National Park Service《May 2016 Bison Calf Incident》；独立来源：The Guardian《Yellowstone bison calf euthanized after park visitors picked up animal》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 219 ESI风电设施鹰群 | 白头海雕与金雕；2022年4月5日；美国美国八州风电设施 | 未取得所需捕杀许可的风电设施叶片撞击鹰类。企业承认自2012年以来至少150只鹰死亡，其中136只确认由叶片撞击造成。 | 这是跨十年、多设施的法院案件记录，以2022年判决日期定位；并非同一天死亡。 | U.S. Department of Justice《ESI Energy sentenced for killing and wounding eagles》；独立来源：The Guardian / Associated Press《Wind energy company pleads guilty to killing at least 150 eagles》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 220 雪松 | 波尔山羊；2022年7月28日；美国加利福尼亚州沙斯塔县 | 警员追回一名儿童从拍卖中带走的山羊，并交给随后安排屠宰的展会人员。法院记录称雪松于2022年7月28日被屠宰。 | 案件涉及所有权、搜查、扣押和民权争议；本条只陈述法院文件确认的扣押、交付与屠宰。 | U.S. District Court, Eastern District of California《E.L. v. Fernandez — summary judgment order》；独立来源：The Sacramento Bee《New court filings shed light on seizure and slaughter of Cedar》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 221 麦考密克中心迁徙鸟群 | 三十三种迁徙鸣禽；2023年10月5日；美国芝加哥麦考密克会展中心 | 恶劣天气中，亮灯玻璃幕墙吸引并撞击夜间迁徙鸟类。菲尔德博物馆人员在该建筑记录964只、33个物种的死亡鸟类。 | 964只是菲尔德博物馆在该建筑的计数，不等于当夜芝加哥全市死亡总数。 | McCormick Place《McCormick Place bird-collision mitigation release》；独立来源：Associated Press《Nearly 1,000 migrating songbirds perish at Chicago exhibition hall》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 222 艾普 | 德国牧羊犬；2013年3月14日；美国纽约州赫基默 | 警犬被部署进入有持枪者据守的建筑。艾普在突入行动中遭枪击死亡。 | 关键日期、地点、行为与结果在两项来源间无实质冲突。 | U.S. Bureau of Justice Assistance《Special Agent Ryan Harding — Badge of Bravery》；独立来源：Officer Down Memorial Page《K9 Ape》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 223 科布斯 | 比利时马里努阿犬；2016年1月23日；美国内布拉斯加州奥马哈 | 警犬在武装对峙中被派入住宅。科布斯遭枪击死亡，当时已临近退役。 | 关键日期、地点、行为与结果在两项来源间无实质冲突。 | Omaha Police Foundation《K9 Kobus memorial》；独立来源：Officer Down Memorial Page《K9 Kobus》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 224 杰迪 | 德国牧羊犬与比利时马里努阿犬混种；2022年1月5日；美国华盛顿州西雅图 | 警犬被释放追捕持砍刀的入室嫌疑人。杰迪遭刺击并死亡。 | 关键日期、地点、行为与结果在两项来源间无实质冲突。 | Seattle Police Department《Police shoot burglary suspect after he fatally stabs K9》；独立来源：Officer Down Memorial Page《K9 Jedi》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 225 里万 | 比利时马里努阿犬；2024年4月2日；美国弗吉尼亚州萨塞克斯第一州立监狱 | 监狱工作犬在囚犯袭击狱警时介入。里万遭刺击和殴打死亡。 | 关键日期、地点、行为与结果在两项来源间无实质冲突。 | Virginia Department of Corrections《VADOC mourns K-9 killed while protecting officer》；独立来源：Officer Down Memorial Page《K9 Rivan》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 226 奈特 | 比利时马里努阿犬；2026年5月31日；美国弗吉尼亚州米德洛锡安 | 警犬随警员进入住宅枪击警情现场。奈特遭枪击死亡，两名警员重伤。 | 关键日期、地点、行为与结果在两项来源间无实质冲突。 | Chesterfield County Police via WTVR《Knight memorial service and county police account》；独立来源：Officer Down Memorial Page《K9 Knight》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 227 约翰、东奇与万里 | 亚洲象；1943年9月23日；日本东京上野动物园 | 动物园执行战时清除所谓危险动物的命令。约翰在投毒与断食后死亡，东奇与万里也因长期断食死亡。 | 三头象死亡的具体日次不同，本条以最后一头万里死亡日期标记。 | Tokyo Zoological Park Society《History of Ueno Zoological Gardens》；独立来源：Japanese Journal of Zoo and Wildlife Medicine《Wartime disposal of dangerous animals in Japanese zoos》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 228 萨拉热窝动物园最后一头熊 | 棕熊；1992年11月3日；波斯尼亚和黑塞哥维那萨拉热窝先锋谷动物园 | 战争围城切断圈养动物的食物与照护。园内最后存活的一头熊因饥饿死亡。 | 同期报道确认死亡与饥饿，动物个体姓名未被公开。 | Pionirska Dolina / KJKP Park《Sarajevo zoo wartime archive》；独立来源：The Washington Post《Sarajevo Zoo's Last Animal, a Bear, Starves to Death》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 229 哥本哈根动物园四头狮子 | 非洲狮；2014年3月24日；丹麦哥本哈根动物园 | 动物园以圈养种群管理为由处死两头成年狮与两头幼狮。四头狮子均被处死，园方随后引入新的雄狮。 | 公开材料未稳定列出四头狮子的个体姓名。 | European Association of Zoos and Aquaria《Copenhagen Zoo population-management statement reported by the EAZA community》；独立来源：TIME《Copenhagen Zoo Kills Four Lions》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 230 马尔加什 | 雪豹；2018年10月23日；英国达德利动物园 | 饲养员失误导致笼门未关，逃出的雪豹随后被射杀。马尔加什被动物园枪手射杀。 | 关键日期、地点、行为与结果在两项来源间无实质冲突。 | Dudley Zoo《Spring ZooNooz 2019 — Margaash incident》；独立来源：The Guardian《Snow leopard shot dead after escaping zoo enclosure》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 231 迈克与卡里布纳 | 黑猩猩；2020年11月3日；荷兰阿默斯福特动物园 | 饲养员未正确关闭围场，动物逃出后园方使用致命武力。两只黑猩猩均被射杀。 | 关键日期、地点、行为与结果在两项来源间无实质冲突。 | DierenPark Amersfoort《Jaaroverzicht 2020》；独立来源：Algemeen Dagblad《Investigation confirms human error in chimpanzee escape》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 232 埃科 | 马来虎；2021年12月29日；美国佛罗里达州那不勒斯动物园 | 承包商进入关闭区域并把手臂伸进虎笼。警员在袭击处置中开枪杀死埃科。 | 关键日期、地点、行为与结果在两项来源间无实质冲突。 | Naples Zoo《Remembering Eko》；独立来源：ABC News《Naples Zoo supports deputy's decision to shoot tiger》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 233 纽伦堡动物园狒狒群 | 几内亚狒狒；2025年7月29日；德国纽伦堡动物园 | 动物园以圈养种群过密为由实施计划性处死。十二只狒狒被杀，遗体随后被用作食肉动物饲料。 | 关键日期、地点、行为与结果在两项来源间无实质冲突。 | Tiergarten Nürnberg《Tiergarten reduces baboon group through killing》；独立来源：Associated Press《German zoo kills baboons to reduce overcrowding》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 234 卢汉动物园狮虎群 | 狮与虎；约2025年11月；阿根廷布宜诺斯艾利斯省卢汉动物园 | 圈养大型猫科动物在关闭园区、诉讼延误与照护不足中滞留多年。官方与救援记录确认多只狮虎在全面评估前死亡。 | 死亡发生于多年滞留期，公开资料没有逐只列出一致的死亡日期与总数。 | Argentina Subsecretaría de Ambiente《International mission to assist more than 60 big cats at Luján Zoo》；独立来源：FOUR PAWS《Historic veterinary assessment completed in Argentina》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 235 露娜（L98） | 南方居民型虎鲸；2006年3月10日；加拿大不列颠哥伦比亚省努特卡湾 | 长期接近船只的年轻虎鲸被拖船螺旋桨击中。露娜因螺旋桨造成的创伤死亡。 | 关键日期、地点、行为与结果在两项来源间无实质冲突。 | Government of Canada《Killer whale killed in accident believed to be Luna》；独立来源：CBC News《Luna the lonely killer whale dies in collision》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 236 斯托迪庄园猛禽群 | 普通鵟与雀鹰；2013年4月；英国诺福克郡斯托迪庄园 | 猎场看守在庄园布放有毒诱饵。十只普通鵟与一只雀鹰被毒死。 | 关键日期、地点、行为与结果在两项来源间无实质冲突。 | Natural England《Natural England welcomes conviction for illegal poisoning》；独立来源：The Guardian《Gamekeeper found guilty of poisoning 10 buzzards and a sparrowhawk》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 237 山牛 | 非洲象；2014年5月15日；肯尼亚肯尼亚山 | 盗猎者杀死知名雄象并取走象牙。山牛被发现死亡，象牙已被取走。 | 关键日期、地点、行为与结果在两项来源间无实质冲突。 | Save the Elephants《A tribute to Mountain Bull》；独立来源：African Wildlife Foundation《Elephant bulls survive first poaching war, not second》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 238 塞尔比运河水獭 | 欧亚水獭；2015年5月；英国北约克郡塞尔比运河 | 未经许可的小龙虾笼没有防止水獭进入的护栏。受保护的水獭进入陷阱后溺亡。 | 关键日期、地点、行为与结果在两项来源间无实质冲突。 | Environment Agency《Otter found dead in illegal trap on Selby Canal》；独立来源：The Yorkshire Post《Otter death sparks warning over illegal traps》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 239 莫霍克 | 非洲狮；2016年3月30日；肯尼亚卡贾多县伊辛亚 | 狮子进入居民区并伤人后，野生动物部门使用枪械处置。莫霍克被多次开枪射杀。 | 同期报道的具体射击次数存在差异，本条不采用最高数字。 | Kenya Wildlife Service《KWS response and subsequent equipment changes》；独立来源：The Star Kenya《Celebrity lion Mohawk felled by bullets》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 240 萨陶二世 | 非洲象；2017年1月7日；肯尼亚东察沃国家公园 | 盗猎者用毒箭攻击一头大牙雄象。萨陶二世死亡，象牙在发现前已被取走。 | 尸体在2017年1月发现，事件于3月公开；本条使用发现日期。 | Tsavo Trust《Big Tusker Project rationale》；独立来源：The Guardian《Poachers kill Satao II elephant in Kenya》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 241 峡谷狼群白色首领雌狼 | 灰狼；2017年4月13日；美国黄石国家公园 | 一只知名项圈狼在国家公园内遭枪击。护林员对重伤雌狼实施安乐死，尸检确认枪伤。 | 关键日期、地点、行为与结果在两项来源间无实质冲突。 | National Park Service《Yellowstone Morning Report, April 2017》；独立来源：Defenders of Wildlife《Iconic Yellowstone female white wolf illegally killed》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 242 图利亚拉走私陆龟群 | 辐射陆龟；2018年4月10日；马达加斯加马达加斯加图利亚拉 | 走私者把逾万只陆龟拥挤关在缺乏食水与卫生条件的房屋内。尽管展开紧急救援，仍有至少574只陆龟死亡。 | 救援期间死亡数量持续变化，本条采用公开更新中的至少574只。 | WWF Madagascar《Record rescue mission for more than 10,000 tortoises》；独立来源：National Geographic《Thousands of rare tortoises found in Madagascar home》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 243 P-56 | 美洲狮；2019年1月27日；美国加利福尼亚州圣莫尼卡山脉 | 土地所有者依据州级损害许可射杀一只GPS项圈美洲狮。P-56的项圈停止传输后，官方确认其被射杀。 | 关键日期、地点、行为与结果在两项来源间无实质冲突。 | National Park Service《Male mountain lion killed under state depredation law》；独立来源：Los Angeles Times《P-56 mountain lion killed under depredation permit》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 244 福特雷克 | 沙漠适应型非洲象；2019年6月；纳米比亚纳米比亚奥马杰特 | 主管部门为知名沙漠适应型雄象签发战利品猎杀许可。福特雷克被战利品猎人开枪杀死。 | 公开资料对具体射杀日不一致，本条采用2019年6月的月份精度。 | Elephant Human Relations Aid《Statement on Voortrekker's killing》；独立来源：Africanews《Killing of Namibia desert elephant stirs conservationists》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 245 蛇眼（#1226） | 北大西洋露脊鲸；2019年9月16日；美国纽约长岛以南海域 | 渔具缠绕造成长期创伤与体况恶化。蛇眼被发现死亡，尸检把死因归于渔具缠绕。 | 两项来源同属NOAA体系，但分别记录现场响应与尸检结论；研究库另保留个体目录交叉核对。 | NOAA Fisheries《When a Right Whale Dies》；独立来源：NOAA Fisheries《Dead North Atlantic right whale found south of Long Island》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 246 布里奇沃特角考拉群 | 考拉；2020年2月；澳大利亚维多利亚州布里奇沃特角 | 蓝桉人工林在缺乏充分野生动物保护下被机械清理。数十只考拉死亡或因重伤被安乐死。 | 不同阶段统计包含当场死亡与后续安乐死，公开总数存在小幅差异。 | Victoria State Government《Fine after Cape Bridgewater koala cruelty prosecution》；独立来源：ABC News Australia《Contractor fined over Cape Bridgewater koala deaths》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 247 白色长颈鹿母子 | 网纹长颈鹿；2020年3月10日；肯尼亚伊沙克比尼希罗拉保护区 | 盗猎者杀死一只白化雌性长颈鹿及其幼崽。护林员发现母子遗体，此后仅剩一只已知白色雄性个体。 | 关键日期、地点、行为与结果在两项来源间无实质冲突。 | Northern Rangelands Trust《Ishaqbini conservancy statement on the white giraffes》；独立来源：The Washington Post《Two rare white giraffes were killed by poachers》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 248 棉尾（#3920） | 北大西洋露脊鲸；2021年2月27日；美国南卡罗来纳州默特尔比奇外海 | 尽管多次尝试解缠，沉重渔线仍持续嵌入鲸体。棉尾在被记录缠绕数月后死亡。 | 关键日期、地点、行为与结果在两项来源间无实质冲突。 | NOAA Fisheries《Adult North Atlantic right whale found dead off South Carolina》；独立来源：Clearwater Marine Aquarium Research Institute《Entangled right whale found dead off South Carolina》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 249 OR-93 | 灰狼；2021年11月10日；美国加利福尼亚州勒贝克附近5号州际公路 | 一只扩散迁徙的灰狼在穿越高速州际公路时被车辆撞击。OR-93被发现死于5号州际公路旁。 | 关键日期、地点、行为与结果在两项来源间无实质冲突。 | California Department of Fish and Wildlife《California wolf OR-93 mortality report》；独立来源：Center for Biological Diversity《Epic-traveling wolf OR-93 is dead after vehicle strike》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 250 霍利斯特加州神鹫 | 加州神鹫；2022年7月；美国加利福尼亚州霍利斯特 | 未知人员枪击一只自由飞行的濒危神鹫。法医尸检确认神鹫死于枪伤。 | 官方仅公开发现月份，未公布个体编号与确切死亡日。 | U.S. Fish and Wildlife Service《Condor shooting under investigation in California》；独立来源：San Francisco Chronicle《California offers reward in killing of a condor》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 251 弗兰 | 座头鲸；2022年8月28日；美国加利福尼亚州半月湾 | 一只长期被识别的座头鲸遭受与船撞一致的创伤。尸检认为疑似船撞造成弗兰死亡。 | 尸检使用“疑似船撞”表述，未确认具体船只。 | The Marine Mammal Center《Humpback whale killed by suspected ship strike was well known》；独立来源：San Francisco Chronicle《Humpback whale found dead on Half Moon Bay beach》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 252 丹尼尔镇灰狼 | 灰狼；2024年2月29日；美国怀俄明州丹尼尔镇 | 一名男子用雪地摩托撞伤灰狼，将其束缚展示后杀死。灰狼死亡，行为人后来就重罪虐待动物认罪。 | 公开材料没有确认灰狼的个体姓名；“丹尼尔镇灰狼”仅用于地理识别。 | Wyoming Public Media《Judge accepts plea and sentences wolf captor》；独立来源：Associated Press《Wyoming man sentenced in wolf abuse case》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 253 朱诺的2024年幼鲸 | 北大西洋露脊鲸；2024年3月3日；美国佐治亚州坎伯兰岛 | 新生露脊鲸遭船撞并留下螺旋桨创伤。幼鲸在重伤被监测数周后被发现死亡。 | 关键日期、地点、行为与结果在两项来源间无实质冲突。 | NOAA Fisheries《North Atlantic right whale health updates 2024》；独立来源：Associated Press《Endangered whale calf found dead after vessel strike》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 254 斯普林霍尔姆红鸢与秃鼻乌鸦群 | 红鸢与秃鼻乌鸦；2019年5月；英国邓弗里斯和加洛韦斯普林霍尔姆 | 土地使用者把禁用农药施加在雏鸭、面包等诱饵上。五只红鸢与十只秃鼻乌鸦被毒死。 | 投毒发生在2019年5月至2020年2月，本条以起始月份标记。 | Crown Office and Procurator Fiscal Service《Man sentenced for poisoning wild birds》；独立来源：BBC News《Scottish man sentenced over poisoned red kites and rooks》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 255 塞维索污染区动物群 | 兔、家禽、牲畜与野生动物；1976年7月10日；意大利塞维索及周边市镇 | 工业反应釜向居民区与农田释放含二噁英的有毒云团。部分动物急性死亡，另有数万只为阻断污染食物链被杀。 | 来源对自然死亡、紧急扑杀与后续预防性清除的分项数字不同，本条不采用单一总数。 | UK Health and Safety Executive《The Seveso accident》；独立来源：European Commission Joint Research Centre《Seveso disaster case record》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 256 桑多兹火灾后的莱茵河鱼群 | 欧洲鳗鲡及其他河鱼；1986年11月1日；瑞士／法国／德国／荷兰巴塞尔下游莱茵河 | 灭火水把仓库中的农药与化学品带入莱茵河。大规模鱼类死亡沿河下游扩散，部分河段鳗鲡种群几乎消失。 | 死亡数量只能按河段与物种估计，来源一致确认大规模鱼类死亡。 | International Commission for the Protection of the Rhine《The turning point: the Sandoz accident》；独立来源：Eawag《Rhine running red, fish dead — 30th anniversary》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 257 多西河水生动物群 | 淡水与河口鱼类；2015年11月5日；巴西多西河流域 | 丰当矿山尾矿坝溃决，废弃物沿河流域扩散。数百公里河段出现鱼类及其他水生动物死亡。 | 生态影响覆盖多物种和长河段，没有可靠的单一死亡总数。 | IBAMA《Samarco waste wave affected 663 km of rivers》；独立来源：Associated Press《Brazil mine disaster's environmental toll》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 258 威德河鱼群 | 拟鲤、雅罗鱼、鲢鲃等淡水鱼；2016年6月；英国埃塞克斯郡威德河 | 供水公司泵站故障向河流排放污水污染。有记录河段内超过五千尾鱼死亡。 | 事件发生于2016年，法院与机构页面未在摘要中给出具体某日。 | Environment Agency《Anglian Water fined after pollution killed 5,000 fish》；独立来源：BBC News《Anglian Water fined after pump failure kills fish》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 259 希兰代尔农场蛋鸡群 | 家鸡；2023年1月28日；美国康涅狄格州博兹拉 | 火灾蔓延至高密度蛋鸡禽舍。康涅狄格州官员估计约十万只蛋鸡死亡。 | 官方数字为约数，火灾起因在最初报告时仍在调查。 | Connecticut Department of Agriculture《Connecticut Weekly Agricultural Report, February 3, 2023》；独立来源：Associated Press《Officials: Estimated 100,000 hens died in fire》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 260 东巴勒斯坦水生动物群 | 鱼类、两栖类及其他水生动物；2023年2月3日；美国俄亥俄州东巴勒斯坦 | 货运列车脱轨与化学品释放污染附近水道。俄亥俄州官员估计近四万四千只水生动物死亡。 | 该估算针对经调查水道内的水生动物，不等同于所有居民宠物或牲畜说法。 | Village of East Palestine / U.S. EPA TASC《East Palestine TASC environmental data review》；独立来源：Axios《Over 43,000 aquatic animals estimated dead》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 261 南福克奶牛场牛群 | 奶牛；2023年4月10日；美国得克萨斯州迪米特 | 设备起火与爆炸蔓延至大型封闭奶牛集中区域。近一万八千头奶牛在火灾中死亡。 | 调查认定为事故性设备火灾；死亡数字为接近值。 | Texas State Fire Marshal's Office via Texas Tribune《South Fork Dairy fire investigation findings》；独立来源：Texas Tribune《Texas dairy farm explosion kills 18,000 cows》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 262 尼特罗与高口径犬舍犬群 | 家犬；2008年10月19日；美国俄亥俄州扬斯敦 | 犬舍经营者让寄养犬只长期缺乏足够食物、饮水与照护。调查人员发现多只犬死亡，其中包括尼特罗。 | 法院与立法资料对现场死亡总数的表述不同，本条不采用最高数字。 | Ohio House of Representatives《Nitro's Law advanced by the Ohio House》；独立来源：Ohio Legislative Service Commission《Protecting Ohioans' Best Friends》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 263 巴迪 | 德国牧羊犬混种；2009年12月30日；美国科罗拉多国家纪念地 | 一名男子把犬绑在皮卡后并在国家纪念地拖行。巴迪因拖拽造成的伤害死亡。 | 两项记录来自起诉与判决阶段，均为官方材料；研究登记另核对同期地方报道。 | U.S. Department of Justice《Man charged in killing of dog Buddy》；独立来源：U.S. Department of Justice《Colorado man sentenced in dog-dragging death》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 264 乌德尼棕野兔 | 棕野兔；2019年8月21日；英国阿伯丁郡乌德尼 | 两名男子使用猎犬进行非法逐兔。目击者看到猎犬追上并杀死野兔，警方随后找到遗体。 | 关键日期、地点、行为与结果在两项来源间无实质冲突。 | Crown Office and Procurator Fiscal Service《Two men sentenced for hare coursing》；独立来源：Police Scotland《Men sentenced after hare coursing cases》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 265 克里斯托·斯科特案猫犬受害群 | 家猫与家犬；2020年5月；美国印第安纳州科科莫 | 行为人拍摄并传播虐待、杀死猫犬的影像。联邦案件记录了多只动物死亡，行为人随后被定罪。 | 起诉材料没有公开每只动物的姓名与完整数量，本条不补写。 | U.S. Department of Justice《Kokomo resident arrested on federal animal cruelty charges》；独立来源：Humane Action《Indiana woman charged under the PACT Act》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 266 法夫郡家猫与野生动物群 | 家猫、鹿、野兔、狐狸与鸟类；2022年8月；英国法夫与金罗斯 | 行为人使用猎犬与武器猎杀动物并拍摄影像。一只家猫与多只野生动物在连续事件中死亡。 | 犯罪发生于2022年8月至11月，本条以起始月份标记；未公开完整死亡总数。 | Police Scotland《Man jailed after wildlife crime spree in Fife》；独立来源：Crown Office and Procurator Fiscal Service《Man who filmed dogs attacking animals jailed》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 267 莫赫林虎斑犬 | 家犬；2022年10月；英国苏格兰莫赫林 | 主人把犬关在笼中数日，缺乏可取得的饮水与照护。犬只被发现时已虚弱倒地，因极度痛苦被安乐死。 | 公开资料没有公布犬只姓名。 | Crown Office and Procurator Fiscal Service《Man jailed for dog cruelty and banned for ten years》；独立来源：Scottish SPCA《Dog found collapsed in crate after abandonment》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 268 米尼奥拉家猫 | 家猫；2022年12月8日；美国得克萨斯州米尼奥拉 | 行为人在一系列暴力犯罪中杀死并斩首一只猫。家猫死亡，该行为被纳入联邦判刑记录。 | 官方记录未公布家猫姓名。 | U.S. Department of Justice《Texas resident sentenced for arson, assaults, and animal cruelty》；独立来源：KLTV《Mineola man accused of assault with cat's head》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 269 布朗尼 | 山地犬与德国牧羊犬混种；2024年2月16日；美国华盛顿特区海军工厂区犬托中心 | 犬只托管中心员工用力踢击一只五个月大幼犬。布朗尼倒地后死亡，尸检确认腹部钝伤与失血性休克。 | 关键日期、地点、行为与结果在两项来源间无实质冲突。 | U.S. Department of Justice《Dog daycare employee indicted for kicking dog to death》；独立来源：The Washington Post《District Dogs worker indicted after dog killed》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 270 阿帕 | 家犬；2024年9月；美国华盛顿特区 | 犬只照护员工在夜班中击打并强行控制阿帕。阿帕死亡，涉事员工后来在联邦法院认罪。 | 公开法院资料以月份描述事件，本条不虚构具体日期。 | U.S. Department of Justice《Former dog care employee pleads guilty in death of dog》；独立来源：Humane Rescue Alliance《Animal cruelty case involving Appa》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 271 贝尔法斯特一只犬与两只兔 | 家犬与家兔；2025年4月；英国贝尔法斯特 | 饲养人长期未向伴侣动物提供足够食水与兽医照护。一只犬与两只兔死亡，两名饲养人因动物福利罪被判刑。 | 官方页面未公开动物个体姓名，事件日期以调查材料中的月份精度呈现。 | Belfast City Council《Two Belfast residents sentenced for animal welfare offences》；独立来源：Belfast Live《Belfast pair sentenced after pets found dead》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 272 《轻骑兵冲锋》特技马群 | 家马；1935年；美国加利福尼亚州拍摄地 | 电影拍摄使用隐藏绊马索制造骑兵跌倒镜头。至少五匹马在拍摄期间死亡。 | 流行叙事常引用更高数字；可核查材料支持“至少五匹”，本条不采用未经证实的25匹。 | AFI Catalog《The Charge of the Light Brigade》；独立来源：Humane World for Animals《Humane Society legal brief recounting film-animal deaths》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 273 《杰西·詹姆斯》拍摄马匹 | 家马；1938年；美国加利福尼亚州拍摄地 | 电影特技让马与骑手从悬崖坠入水中。马匹死亡，事件推动片场动物监督制度扩大。 | 死亡发生在1938年制作期间，公开资料未给出一致的具体拍摄日与马名。 | American Humane《American Humane history of film-set oversight》；独立来源：Turner Classic Movies《Jesse James (1939)》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 274 鲁菲安 | 纯血赛马；1975年7月7日；美国纽约州贝尔蒙特公园 | 高关注对抗赛高速进行时，鲁菲安腿部发生灾难性骨折。鲁菲安手术后在恢复中再次受伤，随后被安乐死。 | 关键日期、地点、行为与结果在两项来源间无实质冲突。 | National Museum of Racing and Hall of Fame《Ruffian Hall of Fame record》；独立来源：The Daily Iowan archive《Ruffian buried after fatal match race injury》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 275 奋进魔杖 | 纯血赛马；1990年10月27日；美国纽约州贝尔蒙特公园 | 赛马在高速竞赛中发生开放性骨折。奋进魔杖在赛道现场被安乐死。 | 关键日期、地点、行为与结果在两项来源间无实质冲突。 | National Museum of Racing and Hall of Fame《Go for Wand Hall of Fame record》；独立来源：United Press International《Tragedy mars Breeders' Cup Distaff》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 276 巴巴罗 | 纯血赛马；2007年1月29日；美国宾夕法尼亚州新博尔顿中心 | 巴巴罗在必利时锦标赛中后腿粉碎性骨折并出现严重并发症。治疗八个月后，因疼痛与蹄叶炎无法控制而被安乐死。 | 关键日期、地点、行为与结果在两项来源间无实质冲突。 | University of Pennsylvania《Barbaro, 2003–2007》；独立来源：Associated Press via ESPN《Barbaro euthanized after lengthy fight》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 277 《鸿运赛马》制作中的三匹马 | 家马；2012年3月13日；美国加利福尼亚州圣安妮塔公园 | 电视剧制作反复使用马匹拍摄竞速场面，三匹马先后发生致命事故。三匹马死亡，剧集随后停止制作。 | 三起死亡发生在不同拍摄日，本条以制作取消前最后一匹马死亡日期标记。 | HBO via Los Angeles Times《Statement on cancellation of Luck after third horse death》；独立来源：The Guardian《HBO sued over alleged horse abuse on Luck》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 278 蒙古新郎 | 纯血赛马；2019年11月2日；美国加利福尼亚州圣安妮塔公园 | 赛马在赛前兽医观察记录后来受到监管审查的情况下参赛。蒙古新郎后腿灾难性受伤并被安乐死。 | 监管审查讨论赛前观察是否足以阻止参赛，但死亡与比赛骨折本身确定。 | California Horse Racing Board《California Horse Racing Board annual and mortality review》；独立来源：ABC News《Breeders' Cup marred by Mongolian Groom's death》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 279 枫叶梅尔 | 纯血赛马；2023年8月5日；美国纽约州萨拉托加赛马场 | 赛马在终点前高速奔跑时发生灾难性腿伤。枫叶梅尔因伤势无法存活被安乐死。 | 关键日期、地点、行为与结果在两项来源间无实质冲突。 | New York State Gaming Commission《2023 Saratoga mortality review》；独立来源：ESPN《Maple Leaf Mel euthanized after collapse》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 280 英国口蹄疫扑杀动物群 | 牛、羊、猪与山羊；2001年2月19日；英国英国多地 | 政府疫病控制政策要求对感染场与相邻农场实施扑杀。2001年疫情应对期间超过六百万只动物被扑杀。 | 统计口径是否包含出生后即杀、预防性扑杀等项目有所不同，本条使用议会报告的“超过六百万”。 | UK Parliament《Foot and Mouth Disease 2001: Lessons to be Learned Inquiry》；独立来源：UK Parliament Public Accounts Committee《The 2001 Outbreak of Foot and Mouth Disease》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 281 荷兰Q热扑杀山羊与绵羊群 | 奶山羊与绵羊；2009年12月17日；荷兰荷兰多地 | 国家疫病控制命令要求扑杀感染农场的怀孕动物。官方统计记录51,820只山羊与绵羊被扑杀。 | 关键日期、地点、行为与结果在两项来源间无实质冲突。 | Government of the Netherlands《Q-fever culling regulation》；独立来源：Statistics Netherlands《Dairy goat herd has increased again》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 282 美国2014至2015年禽流感家禽群 | 家鸡与火鸡；2015年6月；美国美国中西部多州 | 高致病性禽流感与官方清群措施席卷商业禽群。疫情与应对期间超过五千万只家禽死亡或被销毁。 | 官方总数合并感染死亡与为防疫实施的清群，无法逐场分离。 | USDA APHIS《2014–2015 HPAI final report》；独立来源：U.S. Government Accountability Office《Animal Disease: USDA Needs to Better Manage Emergency Response》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 283 拉拉镇受忽视羊群 | 家绵羊；2022年8月；澳大利亚维多利亚州拉拉 | 农场主未向怀孕与哺乳母羊提供足够饲料和兽医治疗。二十只羊死亡，另有十四只严重失能。 | 违法期间为2022年7月至8月，本条采用8月月份精度。 | Agriculture Victoria《Barwon farmer convicted for animal cruelty》；独立来源：ABC News Australia《Farmer convicted over deaths of 20 sheep》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 284 “科威特号”牛群 | 家牛；2024年2月18日；南非开普敦港 | 数千头牛在拥挤、粪污累积的船舱条件中航行数周。船上发现死亡牛只，另有至少八头因福利原因被安乐死。 | 公开资料对航程中已死亡数量不完全一致，本条仅明确写出确认的安乐死下限。 | National Council of SPCAs《The Big Stink leaves Cape Town, but suffering continues》；独立来源：Associated Press《Cape Town hit by stench from cattle ship》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 285 悉尼至雅加达空运绵羊群 | 家绵羊；2024年8月17日；澳大利亚／印度尼西亚悉尼至雅加达货运航班 | 货机冷却与通风系统故障造成危险货舱环境。卸货时发现八十只羊死亡，另有五只随后死亡。 | 两项材料同属澳大利亚农业部门，分别为原始调查报告与公开索引；结论明确为技术故障造成的多因素死亡。 | Australian Department of Agriculture, Fisheries and Forestry《Notifiable mortality incident report 90》；独立来源：Australian Department of Agriculture, Fisheries and Forestry《Investigations into notifiable livestock mortality incidents》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |
| 286 黎明食品公司鸡群 | 家鸡；2025年4月30日；南非姆普马兰加与豪登省养鸡场 | 家禽企业在财务危机中未能向多个养殖点供应饲料。许多鸡在救援前已死亡，另有超过三十五万只因无法恢复被安乐死。 | 因现场存在同类相食，救援前死亡总数无法精确计算；三十五万为后续安乐死下限。 | National Council of SPCAs《NSPCA intervenes in mass starvation at poultry sites》；独立来源：Associated Press《Thousands of chickens euthanized after starvation》 | 机构或研究来源页仅作身份与体态核对，作者／单图许可未确认，research-only；专属非写实插画列入统一生成队列；纳入严格致死时间线 |

### 第五轮结论

- 新增调查并纳入：86 条；本轮另排除 8 个死因或身份不足的候选，见 `research/rejected-cases.md`。
- 研究库：286 条；严格人类致死候选：200 条；公开时间线：191 条；致死审计暂缓：86 条；相邻同物种精简：9 条。
- 新增事件全部具有至少两个来源与至少一个一手或同期机构记录；有数量、日期或因果限制的条目均保留不确定性说明。
- 参考照片只作身份与体态核对；单图作者或许可未明确时一律标记 `research-only`，不下载、不热链。

<!-- FATAL_EXPANSION_END -->
