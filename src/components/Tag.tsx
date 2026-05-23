type TagProps = {
  children: React.ReactNode;
  tone?: "light" | "dark";
};

export default function Tag({ children, tone = "light" }: TagProps) {
  return (
    <span
      className={
        tone === "dark"
          ? "inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-paper"
          : "inline-flex rounded-full border border-ink/10 bg-white/65 px-3 py-1 text-xs font-medium text-graphite"
      }
    >
      {children}
    </span>
  );
}
