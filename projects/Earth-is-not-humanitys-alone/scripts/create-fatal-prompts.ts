import fs from "node:fs";
import path from "node:path";
import { fatalExpansionEvents } from "../data/fatalExpansionEvents";

const REQUIRED_STYLE = "clumsy, scribbly, and utterly pathetic way possible. Use same color, and make it look like it was drawn in MS Paint with a mouse. It should be vaguely similar but also not really, kind of matching but also off in a confusing, awkward way, with that low-quality pixel-by-pixel feel that really emphasizes how ridiculously bad it is.";

for (const event of fatalExpansionEvents) {
  const sourcePages = event.sources.map((source) => `- ${source.publisher}: ${source.url}`).join("\n");
  const prompt = `Create one respectful archive portrait for the animal event below.

Subject: ${event.animal.originalName ?? event.animal.nameZh}
Species: ${event.animal.speciesEn ?? event.animal.speciesZh}
Identity and verified features: ${event.en?.alt ?? event.illustration.altZh}
Place and date: ${event.location.originalPlaceName ?? event.location.placeZh}; ${event.en?.displayDate ?? event.displayDateZh}
Pose: calm, still, full-body or clearly readable three-quarter body; do not depict the harmful event.

Required global style (verbatim):
“${REQUIRED_STYLE}”

Shared restrictions:
- transparent background
- no text, typography, watermark, logo, or decorative frame
- no gore, visible wounds, blood, corpse, restraint, weapon, explosion, crash, cage, or abuse scene
- jagged mouse-drawn outline, visibly uneven fill areas, awkward anatomy
- low-resolution MS Paint feeling while remaining identifiable as the correct species
- limited archival palette: charcoal #2b2926, warm paper #eee7e1, sage #8fa99b, dusty rose #c87586, muted rust #a95845
- consistent dark outline thickness, 1:1 canvas, subject occupying about 72% of the canvas
- roughly three-quarter view, facing slightly toward timeline travel (right)
- no cast shadow beyond a tiny rough charcoal grounding scribble

Reference pages used only to verify identity/species/proportions; do not reproduce or publish source photographs:
${sourcePages}
`;
  fs.writeFileSync(path.join(process.cwd(), event.illustration.promptFile), prompt);
}

console.log(`已创建 ${fatalExpansionEvents.length} 个事件专属插画 prompt。`);
