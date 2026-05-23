import PlogTimeline from "../components/PlogTimeline";
import SectionHeader from "../components/SectionHeader";
import { plogItems } from "../data/plog";

export default function Plog() {
  return (
    <>
      <section className="section">
        <SectionHeader
          eyebrow="Plog"
          title="Life notes, academic moments, travel fragments, and dog-walking evidence."
          description="A small personal timeline beside the formal portfolio: graduation, poster sharing, places, costumes, and the images that quietly feed the work."
        />
        <PlogTimeline items={plogItems} />
      </section>
    </>
  );
}
