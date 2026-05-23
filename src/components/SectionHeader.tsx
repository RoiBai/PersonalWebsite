type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mb-8 max-w-3xl">
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-ember">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold text-ink md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-pretty text-base leading-7 text-graphite md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
