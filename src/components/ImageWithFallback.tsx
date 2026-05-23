import { useState } from "react";

type ImageWithFallbackProps = {
  src?: string;
  alt?: string;
  title: string;
  className?: string;
};

export default function ImageWithFallback({
  src,
  alt,
  title,
  className = "",
}: ImageWithFallbackProps) {
  const [failed, setFailed] = useState(!src);

  if (!src || failed) {
    return (
      <div
        className={`flex min-h-56 items-end overflow-hidden bg-[radial-gradient(circle_at_22%_12%,rgba(193,232,255,0.44),transparent_28%),radial-gradient(circle_at_78%_16%,rgba(84,131,179,0.26),transparent_26%),linear-gradient(135deg,#021024,#052659_52%,#5483B3)] p-5 text-paper ${className}`}
        role="img"
        aria-label={`${title} visual placeholder`}
      >
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-paper/70">
            Visual pending
          </p>
          <p className="text-xl font-semibold">{title}</p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt ?? `${title} project image`}
      loading="lazy"
      className={`h-full w-full object-cover ${className}`}
      onError={() => setFailed(true)}
    />
  );
}
