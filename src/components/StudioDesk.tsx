import { BrainCircuit, Camera, FlaskConical, Gamepad2, Layers3, Sparkles } from "lucide-react";
import type { CSSProperties } from "react";
import { Link } from "react-router-dom";

type DeskObject = {
  title: string;
  caption: string;
  to: string;
  icon: typeof Sparkles;
  accent: string;
  className: string;
  style: CSSProperties & {
    "--tilt": string;
    "--hover-tilt": string;
  };
};

type StudioDeskProps = {
  compact?: boolean;
};

const objects: DeskObject[] = [
  {
    title: "Plog",
    caption: "graduation, dog walks, travel fragments",
    to: "/plog",
    icon: Camera,
    accent: "#C1E8FF",
    className: "lg:left-2 lg:top-8 lg:w-60",
    style: { "--tilt": "-4deg", "--hover-tilt": "-1deg" },
  },
  {
    title: "SocialLayer",
    caption: "camera fragments become shared collage stickers",
    to: "/art/wall",
    icon: Layers3,
    accent: "#7DA0CA",
    className: "lg:right-0 lg:top-24 lg:w-64",
    style: { "--tilt": "5deg", "--hover-tilt": "2deg" },
  },
  {
    title: "Tarot test",
    caption: "symbolic cards for reflective AI conversation",
    to: "/tarot",
    icon: Sparkles,
    accent: "#D8ECFA",
    className: "lg:left-28 lg:top-48 lg:w-56",
    style: { "--tilt": "3deg", "--hover-tilt": "0deg" },
  },
  {
    title: "PersonaMail",
    caption: "tone, relationship, and context-aware writing",
    to: "/research",
    icon: FlaskConical,
    accent: "#9FC8EA",
    className: "lg:right-16 lg:top-72 lg:w-60",
    style: { "--tilt": "-3deg", "--hover-tilt": "-6deg" },
  },
  {
    title: "Newsgame",
    caption: "racing through ambulance ramping delays",
    to: "/games/ambulance-rush",
    icon: Gamepad2,
    accent: "#5483B3",
    className: "lg:left-0 lg:top-80 lg:w-52",
    style: { "--tilt": "6deg", "--hover-tilt": "3deg" },
  },
  {
    title: "Killing Brain",
    caption: "a physical installation about mental pressure",
    to: "/tangible/killing-brain",
    icon: BrainCircuit,
    accent: "#B9D9EC",
    className: "lg:right-8 lg:top-0 lg:w-52",
    style: { "--tilt": "-7deg", "--hover-tilt": "-3deg" },
  },
];

export default function StudioDesk({ compact = false }: StudioDeskProps) {
  return (
    <div
      className={
        compact
          ? "studio-desk-rail relative w-full"
          : "relative mx-auto min-h-[34rem] w-full max-w-[34rem] lg:min-h-[36rem]"
      }
      aria-label="Roi's desk of selected projects"
    >
      {!compact ? (
        <div className="pointer-events-none absolute -top-4 left-4 z-10 hidden rounded-full border border-[#052659]/18 bg-[#F6FBFF]/90 px-3 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#052659] shadow-sm lg:block">
          Roi's desk
        </div>
      ) : null}
      {!compact ? (
        <div className="pointer-events-none absolute inset-8 hidden rounded-[2rem] border border-[#052659]/10 bg-[linear-gradient(135deg,rgba(193,232,255,0.18),rgba(246,251,255,0.04))] lg:block" />
      ) : null}

      <div
        className={
          compact
            ? "grid gap-3 sm:grid-cols-2 lg:grid-cols-6"
            : "grid gap-3 sm:grid-cols-2 lg:block"
        }
      >
        {objects.map((object) => {
          const Icon = object.icon;

          return (
            <Link
              key={object.title}
              to={object.to}
              className={
                compact
                  ? "studio-object group"
                  : `studio-object group lg:absolute ${object.className}`
              }
              style={object.style}
            >
              <span
                className="studio-object-pin"
                style={{ backgroundColor: object.accent }}
                aria-hidden="true"
              />
              <span className="flex items-start gap-3">
                <Icon className="mt-1 h-5 w-5 shrink-0 text-[#052659]" />
                <span>
                  <span className="block text-lg font-semibold text-[#021024]">
                    {object.title}
                  </span>
                  <span className="mt-1 block text-sm leading-6 text-[#052659]">
                    {object.caption}
                  </span>
                </span>
              </span>
              <span className="mt-4 block text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#5483B3] opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
                open object
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
