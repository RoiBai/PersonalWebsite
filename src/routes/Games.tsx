import ProjectGrid from "../components/ProjectGrid";
import SectionHeader from "../components/SectionHeader";
import { getProjectsByType } from "../data/projects";

export default function Games() {
  return (
    <section className="section">
      <SectionHeader
        eyebrow="Games"
        title="Playable systems for public issues, humor, and experiment."
        description="Game projects include newsgames, Unity web builds, and small browser-playable prototypes."
      />
      <ProjectGrid projects={getProjectsByType("game")} />
    </section>
  );
}
