import type { Project } from "../data/projects";
import ProjectCard from "./ProjectCard";

type ProjectGridProps = {
  projects: Project[];
};

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
