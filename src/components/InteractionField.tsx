import { MousePointer2, PanelsTopLeft, Sparkles, Waypoints } from "lucide-react";
import { motion } from "framer-motion";

const panels = [
  {
    title: "Sense",
    text: "Capture tone, context, cultural meaning, gesture, and small traces of behavior.",
    icon: MousePointer2,
  },
  {
    title: "Mediate",
    text: "Turn assistance into situated interaction through cards, pets, games, and spatial windows.",
    icon: Waypoints,
  },
  {
    title: "Reflect",
    text: "Make the system feel inspectable, playable, and open to interpretation.",
    icon: Sparkles,
  },
  {
    title: "Prototype",
    text: "Build quick web, Unity, and visionOS demos that can be tested with people.",
    icon: PanelsTopLeft,
  },
];

export default function InteractionField() {
  return (
    <section className="section py-14 md:py-16">
      <div className="interaction-field relative overflow-hidden rounded-lg border border-ink/10 bg-white/50 p-5 shadow-soft md:p-8">
        <div className="relative z-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ember">
              Interaction Field
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold text-ink md:text-5xl">
              A research surface for sensing, mediation, and reflection.
            </h2>
            <p className="mt-4 text-base leading-7 text-graphite">
              The work moves between careful study and playful making: observing
              human context, shaping interaction material, testing prototypes,
              and making systems easier to feel and question.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {panels.map((panel, index) => {
              const Icon = panel.icon;

              return (
                <motion.article
                  key={panel.title}
                  className="interactive-surface rounded-lg border border-ink/10 bg-paper/70 p-5"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.28, delay: index * 0.05 }}
                >
                  <Icon className="h-5 w-5 text-ember" aria-hidden="true" />
                  <h3 className="mt-4 text-xl font-semibold text-ink">{panel.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-graphite">{panel.text}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
