import { ExternalLink } from "lucide-react";
import type { Project } from "../data/projects";
import Tag from "./Tag";

type ResearchTimelineProps = {
  items: Project[];
};

function HighlightedAuthors({ authors }: { authors: string }) {
  const target = "Ruiyuan Bai";
  const parts = authors.split(target);

  return (
    <>
      {parts.map((part, index) => (
        <span key={`${part}-${index}`}>
          {part}
          {index < parts.length - 1 ? (
            <strong className="font-semibold text-ink">{target}</strong>
          ) : null}
        </span>
      ))}
    </>
  );
}

export default function ResearchTimeline({ items }: ResearchTimelineProps) {
  return (
    <div className="space-y-5">
      {items.map((item) => (
        <article
          key={item.id}
          className="rounded-lg border border-ink/10 bg-white/60 p-5 shadow-sm md:p-7"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <Tag>{item.year}</Tag>
                {item.venue ? <Tag>{item.venue}</Tag> : null}
              </div>
              <h3 className="max-w-4xl text-2xl font-semibold leading-tight text-ink">
                {item.title}
              </h3>
              {item.authors ? (
                <p className="mt-3 text-sm leading-6 text-graphite">
                  <HighlightedAuthors authors={item.authors} />
                </p>
              ) : null}
            </div>
            <div className="flex shrink-0 flex-wrap gap-2">
              {item.links.map((link) => (
                <a
                  key={link.label}
                  className="inline-flex items-center gap-2 rounded-full border border-ink/10 px-3 py-2 text-sm font-medium text-ink hover:border-ember hover:text-ember"
                  href={link.url}
                  target={link.url.startsWith("http") ? "_blank" : undefined}
                  rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {link.label}
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <p className="mt-5 max-w-4xl text-base leading-7 text-graphite">
            {item.abstract}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
