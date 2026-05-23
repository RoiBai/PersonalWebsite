import ProjectGrid from "../components/ProjectGrid";
import SectionHeader from "../components/SectionHeader";
import { getProjectsByType } from "../data/projects";

export default function Tangible() {
  return (
    <>
      <section className="section">
        <SectionHeader
          eyebrow="Tangible / Physical Interaction"
          title="Material prototypes for embodied behavior, care, and reflection."
          description="Projects that explore interaction through physical artifacts, sensors, soft objects, installation forms, and shared embodied experience."
        />
        <ProjectGrid projects={getProjectsByType("tangible")} />
      </section>
      <section className="section bg-white/45">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["Object", "Interactive form, material affordance, and prototype body."],
            ["Behavior", "Sensors, lights, sound, vibration, tokens, and physical feedback."],
            ["Reflection", "Emotional mediation, care, pressure, and collaborative action."],
          ].map(([title, text]) => (
            <article
              key={title}
              className="interactive-surface rounded-lg border border-ink/10 bg-paper/75 p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ember">
                {title}
              </p>
              <p className="mt-4 text-sm leading-6 text-graphite">{text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
