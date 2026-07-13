import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { PointerEvent } from "react";
import type { Project } from "../data/projects";
import ImageWithFallback from "./ImageWithFallback";
import Tag from "./Tag";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--y", `${event.clientY - rect.top}px`);
  };

  const content = (
    <motion.article
      onPointerMove={handlePointerMove}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className="interactive-surface group h-full overflow-hidden rounded-lg border border-ink/10 bg-white/55 shadow-sm backdrop-blur transition focus-within:border-ember focus-within:shadow-soft hover:border-ember/45 hover:shadow-soft"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <ImageWithFallback
          src={project.image}
          alt={project.imageAlt}
          title={project.displayTitle ?? project.title}
          className="transition duration-500 group-hover:scale-[1.035]"
        />
      </div>
      <div className="flex min-h-72 flex-col p-5">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-ember">{project.year}</p>
            <h3 className="mt-1 text-xl font-semibold leading-snug text-ink">
              {project.displayTitle ?? project.title}
            </h3>
          </div>
          <ArrowUpRight
            aria-hidden="true"
            className="mt-1 h-5 w-5 shrink-0 text-graphite transition group-hover:text-ember"
          />
        </div>
        <p className="text-sm leading-6 text-graphite">{project.shortDescription}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        {project.status ? (
          <p className="mt-auto pt-5 text-xs font-semibold uppercase tracking-[0.16em] text-graphite">
            {project.statusLabel ?? project.status}
          </p>
        ) : null}
      </div>
    </motion.article>
  );

  if (project.route) {
    return (
      <Link to={project.route} className="block h-full focus:outline-none">
        {content}
      </Link>
    );
  }

  return content;
}
