import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link, useLocation, useParams } from "react-router-dom";
import ImageWithFallback from "../components/ImageWithFallback";
import ProcessGallery from "../components/ProcessGallery";
import Tag from "../components/Tag";
import { getProjectById } from "../data/projects";

type ProjectDetailProps = {
  projectIdOverride?: string;
};

export default function ProjectDetail({ projectIdOverride }: ProjectDetailProps) {
  const params = useParams();
  const location = useLocation();
  const projectId = projectIdOverride ?? params.projectId;
  const project = projectId ? getProjectById(projectId) : undefined;

  if (!project) {
    return (
      <section className="section">
        <Link className="mb-8 inline-flex items-center gap-2 text-sm text-graphite" to="/">
          <ArrowLeft className="h-4 w-4" />
          Back home
        </Link>
        <h1 className="text-4xl font-semibold text-ink">Project not found</h1>
      </section>
    );
  }

  const isIframeDemo =
    project.id === "wall" || project.id === "space" || project.id === "idea-weaver";
  const isCompactVideo = project.id === "killing-brain";
  const shouldReverseGallery = project.id === "killing-brain";
  const parentRoute =
    project.type === "research"
      ? "/research"
      : project.type === "game"
        ? "/games"
        : project.type === "art"
          ? "/art"
          : project.type === "tangible"
            ? "/tangible"
            : project.type === "spatial-computing"
              ? "/zoi"
              : "/ongoing";
  const isStandaloneRoute = location.pathname === "/tarot";

  return (
    <article>
      <section className="section">
        {!isStandaloneRoute ? (
          <Link
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-graphite hover:text-ember"
            to={parentRoute}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to {project.type}
          </Link>
        ) : null}
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ember">
              {project.year} · {project.status ?? project.type}
            </p>
            <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight text-ink md:text-6xl">
              {project.title}
            </h1>
            {project.role ? (
              <p className="mt-5 text-base leading-7 text-graphite">
                <strong className="text-ink">Role:</strong> {project.role}
              </p>
            ) : null}
            {project.platform ? (
              <p className="mt-2 text-base leading-7 text-graphite">
                <strong className="text-ink">Platform:</strong> {project.platform}
              </p>
            ) : null}
            {project.venue ? (
              <p className="mt-2 text-base leading-7 text-graphite">
                <strong className="text-ink">Venue:</strong> {project.venue}
              </p>
            ) : null}
            {project.authors ? (
              <p className="mt-2 text-base leading-7 text-graphite">
                <strong className="text-ink">Authors:</strong> {project.authors}
              </p>
            ) : null}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  className="button-secondary"
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
          <div className="overflow-hidden rounded-lg border border-ink/10 shadow-soft">
            <ImageWithFallback
              src={project.image}
              alt={project.imageAlt}
              title={project.displayTitle ?? project.title}
              className="aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      {project.video ? (
        <section className="section bg-white/45">
          <div className="mb-5 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ember">
              Video
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-ink">
              {project.video.title}
            </h2>
            {project.video.caption ? (
              <p className="mt-3 text-sm leading-6 text-graphite">
                {project.video.caption}
              </p>
            ) : null}
          </div>
          <div className={isCompactVideo ? "mx-auto max-w-[36.8rem]" : ""}>
            <video
              controls
              preload="metadata"
              poster={project.video.poster}
              className="w-full rounded-lg border border-ink/10 bg-ink shadow-soft"
            >
              <source src={project.video.src} type="video/mp4" />
            </video>
          </div>
        </section>
      ) : null}

      <section className="section">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <h2 className="text-3xl font-semibold text-ink">Overview</h2>
            <p className="mt-4 text-lg leading-8 text-graphite">{project.abstract}</p>
          </div>
          <div className="rounded-lg border border-ink/10 bg-white/55 p-6">
            <h2 className="text-2xl font-semibold text-ink">What I did</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-graphite">
              {(project.whatIDid ?? [
                "Contributed to concept framing, interaction design, implementation, and project communication.",
                "Shaped the project into a clear portfolio story with context, links, and visual placeholders ready for final media.",
              ]).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {isIframeDemo ? (
        <section className="section bg-white/45">
          <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ember">
                Interactive demo
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-ink">Try the live experiment</h2>
            </div>
            <a
              className="button-secondary"
              href={`/experiments/${project.id}/index.html`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open interactive demo
            </a>
          </div>
          <iframe
            title={`${project.title} interactive demo preview`}
            src={`/experiments/${project.id}/index.html`}
            loading="lazy"
            className="h-[46vh] min-h-[22rem] w-full rounded-lg border border-ink/10 bg-white"
          />
        </section>
      ) : null}

      {project.sections?.length ? (
        <section className="section bg-white/45">
          <div className="grid gap-5 md:grid-cols-2">
            {project.sections.map((section) => (
              <article
                key={section.title}
                className="interactive-surface rounded-lg border border-ink/10 bg-paper/75 p-6"
              >
                <h2 className="text-2xl font-semibold text-ink">{section.title}</h2>
                <p className="mt-3 text-sm leading-6 text-graphite">{section.body}</p>
                {section.items?.length ? (
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-graphite">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {project.gallery?.length ? (
        <section className="section">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ember">
              Gallery
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-ink">
              Process images and report excerpts
            </h2>
          </div>
          <ProcessGallery
            items={project.gallery}
            title={project.displayTitle ?? project.title}
            reverse={shouldReverseGallery}
          />
        </section>
      ) : null}
    </article>
  );
}
