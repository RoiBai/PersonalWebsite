import ProjectGrid from "../components/ProjectGrid";
import SectionHeader from "../components/SectionHeader";
import { getProjectsByType } from "../data/projects";

export default function Art() {
  return (
    <section className="section">
      <SectionHeader
        eyebrow="Creative Coding / Art"
        title="Interactive websites, visual experiments, and small companion prototypes."
        description="These works collect browser art, symbolic interfaces, camera collage, spatial companions, and the weirder playable edges of my practice."
      />
      <ProjectGrid projects={getProjectsByType("art")} />
    </section>
  );
}
