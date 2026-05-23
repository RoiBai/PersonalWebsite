import ResearchTimeline from "../components/ResearchTimeline";
import SectionHeader from "../components/SectionHeader";
import { getProjectsByType } from "../data/projects";

export default function Research() {
  return (
    <section className="section">
      <SectionHeader
        eyebrow="Research"
        title="Publication work and HCI research projects."
      />
      <ResearchTimeline items={getProjectsByType("research")} />
    </section>
  );
}
