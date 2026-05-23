import { useEffect, useMemo, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import type { PlogItem } from "../data/plog";
import ImageWithFallback from "./ImageWithFallback";

type PlogTimelineProps = {
  items: PlogItem[];
  compact?: boolean;
};

const kindLabel: Record<PlogItem["kind"], string> = {
  academic: "academic",
  life: "life",
  travel: "travel",
  making: "making",
};

export default function PlogTimeline({ items, compact = false }: PlogTimelineProps) {
  const [activeImages, setActiveImages] = useState<Record<string, number>>({});
  const [pausedItems, setPausedItems] = useState<Record<string, boolean>>({});
  const reduceMotion = useReducedMotion();
  const visibleItems = useMemo(() => (compact ? items.slice(0, 3) : items), [compact, items]);
  const autoplayItems = useMemo(
    () => visibleItems.filter((item) => item.images.length > 1),
    [visibleItems],
  );

  useEffect(() => {
    if (reduceMotion || autoplayItems.length === 0) return undefined;

    const timer = window.setInterval(() => {
      setActiveImages((current) => {
        const next = { ...current };

        autoplayItems.forEach((item) => {
          if (pausedItems[item.id]) return;
          next[item.id] = ((current[item.id] ?? 0) + 1) % item.images.length;
        });

        return next;
      });
    }, 3600);

    return () => window.clearInterval(timer);
  }, [autoplayItems, pausedItems, reduceMotion]);

  const setPaused = (itemId: string, paused: boolean) => {
    setPausedItems((current) => ({ ...current, [itemId]: paused }));
  };

  return (
    <div className="space-y-8">
      {visibleItems.map((item, index) => {
        const activeIndex = activeImages[item.id] ?? 0;
        const leadImage = item.images[activeIndex] ?? item.images[0];
        const accent = index % 2 === 0 ? "-rotate-1" : "rotate-1";

        return (
          <article
            key={item.id}
            className="group relative grid gap-5 border-l border-ink/12 pl-5 md:grid-cols-[0.72fr_1.28fr] md:gap-8 md:pl-8"
          >
            <span className="absolute -left-[0.43rem] top-2 h-3 w-3 rounded-full border border-ink/20 bg-paper shadow-[0_0_0_6px_rgba(193,232,255,0.24)]" />
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-graphite">
                {item.period}
              </p>
              <h3 className="mt-2 text-2xl font-semibold leading-tight text-ink">
                {item.title}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-graphite">
                <span className="rounded-full border border-ink/10 bg-white/58 px-3 py-1">
                  {kindLabel[item.kind]}
                </span>
                {item.location ? (
                  <span className="rounded-full border border-ink/10 bg-white/58 px-3 py-1">
                    {item.location}
                  </span>
                ) : null}
              </div>
              <p className="mt-4 text-sm leading-6 text-graphite">
                {item.description}
              </p>
            </div>

            <div
              className="min-w-0"
              onMouseEnter={() => setPaused(item.id, true)}
              onMouseLeave={() => setPaused(item.id, false)}
              onFocus={() => setPaused(item.id, true)}
              onBlur={() => setPaused(item.id, false)}
            >
              <a
                className={`interactive-surface block overflow-hidden rounded-lg border border-ink/10 bg-white/70 shadow-sm transition duration-500 group-hover:-translate-y-1 group-hover:shadow-soft ${accent}`}
                href={leadImage?.src}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${item.title} image`}
              >
                <div className="flex aspect-[4/3] items-center justify-center overflow-hidden bg-white/55">
                  <ImageWithFallback
                    src={leadImage?.src}
                    alt={leadImage?.alt}
                    title={item.title}
                    className="h-full w-full !object-contain transition duration-700 group-hover:scale-[1.012]"
                  />
                </div>
              </a>

              {item.images.length > 1 ? (
                <div className="mt-3">
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <p className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-graphite">
                      {reduceMotion ? "Gallery" : pausedItems[item.id] ? "Paused" : "Auto scroll"}
                    </p>
                    <div className="flex gap-1.5" aria-hidden="true">
                      {item.images.map((image, imageIndex) => (
                        <span
                          key={image.src}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            activeIndex === imageIndex
                              ? "w-7 bg-ink"
                              : "w-1.5 bg-ink/22"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3 overflow-x-auto pb-2">
                    {item.images.map((image, imageIndex) => (
                      <button
                        key={image.src}
                        type="button"
                        className={`h-20 w-28 shrink-0 overflow-hidden rounded-md border bg-white/65 transition hover:-translate-y-0.5 hover:shadow-soft focus:outline-none focus:ring-2 focus:ring-ember focus:ring-offset-2 ${
                          activeIndex === imageIndex
                            ? "border-ember shadow-soft"
                            : "border-ink/10"
                        }`}
                        onClick={() =>
                          setActiveImages((current) => ({
                            ...current,
                            [item.id]: imageIndex,
                          }))
                        }
                        aria-label={`Show ${item.title} image ${imageIndex + 1}`}
                        aria-pressed={activeIndex === imageIndex}
                      >
                        <ImageWithFallback
                          src={image.src}
                          alt={image.alt}
                          title={item.title}
                          className="h-full w-full"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </article>
        );
      })}

      {compact ? (
        <Link className="button-secondary ml-5 md:ml-8" to="/plog">
          Open full plog
        </Link>
      ) : null}
    </div>
  );
}
