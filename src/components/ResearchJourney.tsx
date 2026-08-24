import { ArrowDown, ArrowUp, BookOpen, ExternalLink, GitBranch, Sparkles } from "lucide-react";
import { useMemo, useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { getProjectById } from "../data/projects";
import ImageWithFallback from "./ImageWithFallback";

type TimelineDirection = "newest" | "origin";
type IdeaKind = "root" | "continuation" | "spark";
type IdeaThread = "play" | "companion" | "life";

type JourneyEntry = {
  projectId: string;
  date: string;
  order: number;
  kind: IdeaKind;
  thread: IdeaThread;
  source: string;
  reflection: string;
  continuesFrom?: string;
  ongoing?: boolean;
  publication?: {
    date: string;
    title: string;
    url: string;
  };
};

const THREADS: Record<
  IdeaThread,
  { label: string; color: string }
> = {
  play: { label: "Play + learning", color: "#7662a8" },
  companion: { label: "Companion systems", color: "#2f7f7b" },
  life: { label: "Lived moments", color: "#d56b4d" },
};

const JOURNEY: JourneyEntry[] = [
  {
    projectId: "ambulance-rush",
    date: "2024.05 — 2025.02",
    order: 202405,
    kind: "root",
    thread: "play",
    source: "The starting point",
    reflection:
      "My first encounter with game-based learning changed how I understood games: they could do more than entertain. By turning ambulance ramping into time pressure, traffic, and difficult routing decisions, the project made a public issue something players could experience, question, and discuss.",
    publication: {
      date: "2025.12.09",
      title: "It’s all fun and games: Contemporary newsgames and journalism",
      url: "https://doi.org/10.1386/ajr_00184_1",
    },
  },
  {
    projectId: "zoi",
    date: "2024.09 — 2025.05",
    order: 202409,
    kind: "spark",
    thread: "companion",
    source: "A pet idea",
    reflection:
      "Zoi began with a simple question: could the companionship I feel with a real dog carry into spatial computing? I designed the Shiba Inu not as a chatbot with a body, but as an adopted companion that could remember, recommend, play, and quietly share everyday space.",
  },
  {
    projectId: "killing-brain",
    date: "2025.10",
    order: 202510,
    kind: "spark",
    thread: "life",
    source: "A lived moment",
    reflection:
      "Social pressure, assignments, and other people’s gaze sometimes made me feel as if my own mind were being sliced into separate pieces. I translated that feeling literally through an acrylic brain and moving blades, asking viewers whether they would interrupt the pressure or allow it to continue.",
  },
  {
    projectId: "rewind-past-self",
    date: "2025.10 — Now",
    order: 202510.2,
    kind: "spark",
    thread: "life",
    source: "A lived moment",
    reflection:
      "I became interested in the moment after regret: what if a past version of us could return just before we repeat the same habit? Rewind stores voice and expression in a gentle cat avatar, transforming self-criticism into a softer pause before action.",
    ongoing: true,
  },
  {
    projectId: "with-me",
    date: "2025.11",
    order: 202511,
    kind: "continuation",
    thread: "companion",
    source: "The pet thread",
    continuesFrom: "Zoi",
    reflection:
      "Zoi made me ask whether companionship could leave the screen. With Me places it inside a physical dog that senses darkness, warmth, and touch, then responds through light, sound, and a heartbeat-like vibration—small signals that make care feel reciprocal.",
  },
  {
    projectId: "loofa-man",
    date: "2026.01 — 2026.06",
    order: 202601,
    kind: "continuation",
    thread: "play",
    source: "Using games to speak",
    continuesFrom: "Ramping Rush",
    reflection:
      "I wanted to use a game to express how family expectations, workplace pressure, and personal agency collide around a dinner table. Rotation, limited actions, and item choices turn social obligation into something players can negotiate, resist, and ultimately decide for themselves.",
  },
  {
    projectId: "wall",
    date: "2026.03",
    order: 202603,
    kind: "spark",
    thread: "life",
    source: "A lived moment",
    reflection:
      "Our lives are built from posts laid over posts, with each new image partially covering what came before. SocialLayer turns that feeling into a shared collage wall, where live camera fragments accumulate, overlap, and become a visible form of social memory.",
  },
  {
    projectId: "tarot-reflection",
    date: "2026.05",
    order: 202605.1,
    kind: "spark",
    thread: "life",
    source: "A lived moment",
    reflection:
      "I kept meeting people who turned to mysticism with everyday problems. Often they were not really asking for a prediction; they needed a structure for hearing their own thoughts. I designed tarot as a symbolic illusion—a gentle mirror that helps people reframe a question and face it themselves.",
  },
  {
    projectId: "monster-between-us",
    date: "2026.05",
    order: 202605.3,
    kind: "continuation",
    thread: "play",
    source: "The learning thread",
    continuesFrom: "Ramping Rush",
    reflection:
      "MOMO began after I watched my mother and younger sister argue. Children and adults can inhabit the same conflict while understanding it from entirely different worlds. By turning task-initiation tension into a small monster, the project gives both sides something visible they can approach and resolve together.",
  },
  {
    projectId: "space",
    date: "2026.05",
    order: 202605.4,
    kind: "spark",
    thread: "life",
    source: "A lived moment",
    reflection:
      "Words seem to disappear the moment we say them, yet listeners remember, distort, edit, and pass them on until they become something else. Here, speech leaves the mouth as particles, collides with space, and returns to recolor the speaker—making that transformation visible.",
  },
  {
    projectId: "earth-is-not-humanitys-alone",
    date: "2026.07",
    order: 202607,
    kind: "spark",
    thread: "life",
    source: "A story in the news",
    reflection:
      "A news story made me want to build a public record of animals killed through human actions. The timeline preserves each life as more than a statistic, while its evidence, sources, and memorial frame the archive as an argument for enforceable animal-protection law.",
  },
];

const kindLabel: Record<IdeaKind, string> = {
  root: "Starting point",
  continuation: "Following a thread",
  spark: "Sudden spark",
};

export default function ResearchJourney() {
  const [direction, setDirection] = useState<TimelineDirection>("newest");
  const orderedEntries = useMemo(() => {
    const items = [...JOURNEY].sort((a, b) => a.order - b.order);
    return direction === "newest" ? items.reverse() : items;
  }, [direction]);

  return (
    <div className="research-journey">
      <div className="research-journey-toolbar">
        <div className="research-journey-legend" aria-label="Idea thread legend">
          {(Object.keys(THREADS) as IdeaThread[]).map((thread) => (
            <span key={thread} className="research-journey-legend-item">
              <span
                className="research-journey-legend-dot"
                style={{ backgroundColor: THREADS[thread].color }}
                aria-hidden="true"
              />
              {THREADS[thread].label}
            </span>
          ))}
        </div>

        <div className="research-journey-direction" role="group" aria-label="Timeline direction">
          <button
            type="button"
            className={direction === "newest" ? "is-active" : ""}
            aria-pressed={direction === "newest"}
            onClick={() => setDirection("newest")}
          >
            <ArrowDown className="h-4 w-4" aria-hidden="true" />
            Latest first
          </button>
          <button
            type="button"
            className={direction === "origin" ? "is-active" : ""}
            aria-pressed={direction === "origin"}
            onClick={() => setDirection("origin")}
          >
            <ArrowUp className="h-4 w-4" aria-hidden="true" />
            From the origin
          </button>
        </div>
      </div>

      <p className="research-journey-reading-note">
        One line marks time. Color traces recurring questions. Each reflective note connects
        the moment behind a project with what the finished system became.
      </p>

      <ol className="idea-timeline">
        {orderedEntries.map((entry, index) => {
          const project = getProjectById(entry.projectId);
          if (!project) return null;
          const thread = THREADS[entry.thread];
          const route = project.route;
          const imageSource = project.image ?? project.gallery?.[0]?.src;
          const imageAlt = project.imageAlt ?? project.gallery?.[0]?.alt;
          const style = { "--thread-color": thread.color } as CSSProperties;

          return (
            <li key={entry.projectId} className="idea-timeline-item" style={style}>
              <div className="idea-timeline-rail">
                <span className="idea-timeline-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <time>{entry.date}</time>
              </div>

              <span className="idea-timeline-node" aria-hidden="true" />

              <article className="idea-timeline-card">
                <div className="idea-timeline-card-topline">
                  <span className={`idea-kind idea-kind-${entry.kind}`}>
                    {entry.kind === "spark" ? (
                      <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                    ) : (
                      <GitBranch className="h-3.5 w-3.5" aria-hidden="true" />
                    )}
                    {kindLabel[entry.kind]}
                  </span>
                  <span className="idea-thread-label">{thread.label}</span>
                  {entry.ongoing ? <span className="idea-ongoing">Ongoing</span> : null}
                </div>

                <div className="idea-timeline-card-body">
                  {route ? (
                    <Link className="idea-timeline-visual" to={route} aria-label={`Open ${project.displayTitle ?? project.title}`}>
                      <ImageWithFallback
                        src={imageSource}
                        alt={imageAlt}
                        title={project.displayTitle ?? project.title}
                        className={`idea-timeline-image ${project.imageFit === "contain" ? "is-contain" : ""}`}
                      />
                    </Link>
                  ) : (
                    <div className="idea-timeline-visual">
                      <ImageWithFallback
                        src={imageSource}
                        alt={imageAlt}
                        title={project.displayTitle ?? project.title}
                        className={`idea-timeline-image ${project.imageFit === "contain" ? "is-contain" : ""}`}
                      />
                    </div>
                  )}

                  <div className="idea-timeline-copy">
                    <div className="idea-timeline-heading-row">
                      <div>
                        <p className="idea-timeline-source">Inspired by · {entry.source}</p>
                        <h3>
                          {route ? (
                            <Link to={route}>{project.displayTitle ?? project.title}</Link>
                          ) : (
                            project.displayTitle ?? project.title
                          )}
                        </h3>
                      </div>
                      {entry.continuesFrom ? (
                        <p className="idea-timeline-continues">
                          continues from
                          <strong>{entry.continuesFrom}</strong>
                        </p>
                      ) : null}
                    </div>

                    <p className="idea-project-description">{project.shortDescription}</p>

                    <blockquote className="idea-personal-note">
                      <span>researcher’s note</span>
                      {entry.reflection}
                    </blockquote>
                  </div>
                </div>

                {entry.publication ? (
                  <a
                    className="idea-publication"
                    href={entry.publication.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BookOpen className="h-5 w-5" aria-hidden="true" />
                    <span>
                      <small>Published paper · {entry.publication.date}</small>
                      <strong>{entry.publication.title}</strong>
                    </span>
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                ) : null}
              </article>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
