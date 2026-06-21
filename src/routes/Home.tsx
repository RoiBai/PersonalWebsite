import { Link } from "react-router-dom";
import Entropy from "../components/Entropy";
import Hero from "../components/Hero";
import PlogTimeline from "../components/PlogTimeline";
import ProjectGrid from "../components/ProjectGrid";
import SectionHeader from "../components/SectionHeader";
import VisitorCounter from "../components/VisitorCounter";
import { plogItems } from "../data/plog";
import { getProjectsByType, projectsByNewest } from "../data/projects";

export default function Home() {
  const selectedIds = [
    "tarot-reflection",
    "rewind-past-self",
    "idea-weaver",
    "loofa-man",
    "zoi",
    "wall",
    "space",
    "ambulance-rush",
    "monster-between-us",
    "with-me",
    "killing-brain",
  ];

  const selected = projectsByNewest.filter((project) =>
    selectedIds.includes(project.id)
  );

  return (
    <>
      <Hero />

      <VisitorCounter />

      <section className="section selected-work-section">
        <div className="selected-work-heading">
          <SectionHeader
            eyebrow="Selected Objects"
            title="Pieces to open, test, read, and play."
            description="Across screen-based systems, spatial computing, games, and tangible interaction, I build experiences that are playful, reflective, and human-centered."
          />
          <div className="selected-work-animation" aria-hidden="true">
            <Entropy size={380} leftLabel="form" rightLabel="drift" />
          </div>
        </div>
        <ProjectGrid projects={selected} />
      </section>

      <section className="section bg-white/45">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader
            eyebrow="Paper Trail"
            title="Research work with social, cultural, and interaction detail."
            description="Publication work spans adaptive writing systems, culturally informed color design tools, and newsgames as interactive journalism."
          />
          <div className="grid gap-4">
            {getProjectsByType("research")
              .slice(0, 3)
              .map((project) => (
                <article
                  key={project.id}
                  className="rounded-lg border border-ink/10 bg-paper/80 p-5 shadow-sm"
                >
                  <p className="text-sm font-medium text-graphite">
                    {project.year} / {project.venue}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-ink">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-graphite">
                    {project.shortDescription}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        className="inline-flex items-center rounded-full border border-ink/10 px-3 py-2 text-sm font-medium text-ink hover:border-ember hover:text-ember"
                        href={link.url}
                        target={link.url.startsWith("http") ? "_blank" : undefined}
                        rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </article>
              ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            [
              "Creative Coding",
              "/art",
              "Camera collage, browser motion, perception, and digital space.",
            ],
            ["Games", "/games", "Newsgames and experimental Unity browser games."],
            [
              "Tangible",
              "/tangible",
              "Physical prototypes, embodied interaction, and installation-based reflection.",
            ],
            [
              "Ongoing Tests",
              "/ongoing",
              "Tarot reflection and prototypes open to testing and refinement.",
            ],
          ].map(([title, to, description], index) => (
            <Link
              key={to}
              to={to}
              className="interactive-surface rounded-lg border border-ink/10 bg-white/62 p-6 shadow-sm transition hover:-translate-y-1 hover:border-graphite/35 hover:shadow-soft"
              style={{ transform: `rotate(${index % 2 === 0 ? 0.7 : -0.7}deg)` }}
            >
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-graphite">
                drawer
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-ink">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-graphite">
                {description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section bg-white/45">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <SectionHeader
            eyebrow="Plog"
            title="The person around the prototypes."
            description="Graduation, dog walks, travel, posters, costumes, and the small archive of things that make the portfolio less like a company brochure."
          />
          <PlogTimeline items={plogItems} compact />
        </div>
      </section>

      <section className="section bg-mist/42 text-ink">
        <div className="grid gap-8 md:grid-cols-[1fr_0.55fr] md:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-graphite">
              About Roi
            </p>
            <h2 className="text-balance text-3xl font-semibold md:text-5xl">
              Designing interfaces that make reflection feel tangible.
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-graphite">
              Ruiyuan Bai is an HCI researcher, interaction designer, creative
              technologist, tangible / physical interaction designer, and game /
              web prototype developer currently in the MFA HCI stream at City
              University of Hong Kong.
            </p>
          </div>
          <Link className="button-primary justify-center" to="/contact">
            Contact / links
          </Link>
        </div>
      </section>
    </>
  );
}
