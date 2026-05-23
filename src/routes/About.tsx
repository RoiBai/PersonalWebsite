import { Link } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";
import Tag from "../components/Tag";

const interests = [
  "Human-AI Interaction",
  "Creativity Support Tools",
  "Spatial Computing",
  "Tangible Interaction",
  "Creative Coding",
  "Game-based Communication",
  "Emotional Design",
  "Reflective Systems",
];

export default function About() {
  return (
    <section className="section">
      <SectionHeader
        eyebrow="About"
        title="Ruiyuan Bai / 白蕊源 / Roi"
        description="HCI researcher, interaction designer, creative technologist, game / web prototype developer, and tangible / physical interaction designer."
      />
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-lg border border-ink/10 bg-white/55 p-6">
          <h2 className="text-2xl font-semibold text-ink">Education</h2>
          <div className="mt-5 space-y-5 text-sm leading-6 text-graphite">
            <p>
              <strong className="text-ink">City University of Hong Kong</strong>
              <br />
              Master of Fine Arts, HCI Stream, Year 2
            </p>
            <p>
              <strong className="text-ink">The Hong Kong Polytechnic University</strong>
              <br />
              Bachelor of Science in Financial Technology and Artificial
              Intelligence, 2021-2025
            </p>
          </div>
        </div>
        <div className="space-y-6 text-lg leading-8 text-graphite">
          <p>
            My practice spans HCI research, interactive systems, creative coding,
            game design, tangible / physical computing, and spatial computing.
            I am interested in how interaction can become more reflective,
            playful, and emotionally resonant across both digital and material
            forms.
          </p>
          <div className="flex flex-wrap gap-2">
            {interests.map((interest) => (
              <Tag key={interest}>{interest}</Tag>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <Link className="button-primary w-fit" to="/art">
              Explore projects
            </Link>
            <Link className="button-secondary w-fit" to="/plog">
              Open plog
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
