import ProjectGrid from "../components/ProjectGrid";
import SectionHeader from "../components/SectionHeader";
import { getProjectsByType } from "../data/projects";

export default function Ongoing() {
  const projects = getProjectsByType("ongoing");

  return (
    <section className="section">
      <SectionHeader
        eyebrow="Ongoing Projects"
        title="Current experiments, prototypes, and testing links."
        description="A compact space for work that visitors can try, test, or follow as it develops."
      />
      <ProjectGrid projects={projects} />
    </section>
  );
}
