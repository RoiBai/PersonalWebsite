# Earth Is Not Humanity's Alone / 地球不只是人类的家园

一个记录“因人类行为死亡的动物”的中英双语互动叙事网站，默认英文，可在页面右上角切换中文。桌面端以纵向滚动驱动横向时间线；移动端使用原生横向滑动与 scroll snap。研究库现有 286 个经公开资料交叉核实的动物伤害事件；严格致死因果审计确认其中 200 个符合“死亡已确认且由人类行为造成”的规则，其中 191 个进入公开时间线，另 9 个仅因会与前后相邻事件形成完全相同物种而保留在研究库。其余 86 条幸存、自然死亡或结局未确认记录也不会被改写成死亡事件。

## 技术栈

Next.js App Router、React、TypeScript、Tailwind CSS、Framer Motion、`@floating-ui/react`、Zod。事件与来源均保存在本地 TypeScript 数据中，可静态部署，不需要客户端密钥。

## 本地运行

项目要求 Node.js 22.13 或更高版本。

```bash
npm install
npm run dev
```

打开终端输出的本地地址（默认 `http://localhost:3000`）。

## 验收命令

```bash
npm run lint
npm run typecheck
npm run validate:data
npm run sync:research
npm run verify:assets
npm run build
```

## 添加新事件

1. 先调查，不要先写前台文案。至少找到两个互相独立的可靠来源。
2. 能取得法院、政府、警方、机构声明或原始研究时，至少加入一项一手来源。
3. 在 `research/events-research.md` 记录关键事实、不确定信息、来源和图片许可；被排除的候选写入 `research/rejected-cases.md`。
4. 在 `data/events.ts` 或对应扩展数据文件中添加完整事件对象。不要手动维护另一个排序列表；导出时会按 ISO 日期排序。
5. 同时编写事件专属英文内容；插画必须以对应物种与身份资料生成，不能复用其他动物画像冒充。
6. 为事件新增 `image-prompts/{slug}.txt`，根据已核实照片描述物种和辨识特征。
7. 生成 `public/animals/{slug}.png`，透明背景、1024×1024，并遵守 `image-prompts/global-style-guide.md`。
8. 运行全部验收命令。

## 来源验证规则

- 来源不得为空，且至少两项；至少一项 `isPrimary: true`。
- 社交媒体、论坛、转载和无出处文章不能单独支撑事件。
- Wikipedia 只可用于找线索，不作为事件唯一来源。
- 每个来源必须记录标题、机构、类型、发布日期（若可得）、访问日期与外部链接。
- 更新来源时，同时更新事件的 `verification.verifiedAt` 和 `research/source-register.json`。
- 若日期、数量、地点、经过或法律结果冲突，保留各方口径，在 `uncertaintyNoteZh` 中说明，并使用“约”“据某来源”等措辞。
- 无法确认的细节直接删去，不使用看起来最戏剧化的版本。

## 不得写入的内容

- 虚构动物、虚构日期、占位故事、Lorem Ipsum、TBD 或无法追溯的数字。
- 不存在的直接引语，或从来源大段复制的文字。
- 未经许可热链或公开展示的新闻照片。
- 血腥伤口、尸体特写、虐待过程或以猎奇为目的的描述。
- 尚未核实或只有社交媒体说法的案例。

## 插画流程

原始照片只用于研究和核对物种、比例、毛色、斑纹与可辨识特征。公开页面使用统一生成的非写实透明 PNG，不下载或热链许可不明的原图。每个事件都有按 slug 命名的专属 prompt；研究库全部 286 条记录均已有独立透明 PNG，本轮新增的 86 条严格致死事件记录在 `image-prompts/FATAL_EXPANSION_QUEUE.md`。旧事件素材保留为研究档案，不能复用为新主人公画像。新增或替换插画后运行：

```bash
npm run verify:assets
```

## 交互差异

- 桌面端：进入时间线后视口保持 sticky，页面纵向进度映射为轨道横向位移；鼠标 hover、键盘 focus 都可打开档案信息板。
- 移动端：时间线为原生横向滚动。首次点击动物打开信息板，第二次点击或点击“查看完整故事”打开底部详情。
- `prefers-reduced-motion`：自动改用可直接横向浏览的轨道，取消长距离补间动画。

## 研究文件

- `research/events-research.md`：286 个研究候选的调查摘要与许可判断。
- `research/fatality-audit.md`：严格人类致死审计、暂缓清单与发布边界。
- `lib/timelineVisualDiversity.ts`：相邻同物种事件的公开时间线精简清单；事件仍保留在研究库。
- `research/source-register.json`：事件级来源数量、一手来源和核实状态登记。
- `research/rejected-cases.md`：当前排除案例及原因。
- `research/coverage-estimate.md`：可继续核实事件的数量级估算、依据与长期里程碑。
