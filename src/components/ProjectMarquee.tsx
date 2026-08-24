const items = [
  "tone-sensitive email",
  "blue leaves",
  "Vision Pro dog friend",
  "camera stickers",
  "tarot reflection",
  "ambulance ramping",
  "acrylic brain",
  "traditional Chinese colors",
  "late-night prototypes",
];

export default function ProjectMarquee() {
  const repeated = [...items, ...items];

  return (
    <section className="overflow-hidden border-y border-ink/10 bg-mist/35 py-4">
      <div className="marquee-track flex w-max gap-3">
        {repeated.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="rounded-full border border-ink/10 bg-paper/74 px-4 py-2 text-sm font-medium text-graphite shadow-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
