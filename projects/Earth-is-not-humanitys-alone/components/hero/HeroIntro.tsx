"use client";
import type { AnimalEvent } from "@/types/event";
import { eventStats } from "@/lib/timeline";
import { useLanguage } from "@/components/ui/LanguageProvider";
import { ui } from "@/lib/i18n";

export function HeroIntro({ events }: { events: AnimalEvent[] }) {
  const stats = eventStats(events);
  const {locale} = useLanguage(); const t = ui[locale];
  return <section className="hero" aria-labelledby="hero-title">
    <div className="hero-index" aria-hidden="true">FIELD NOTES / 001—{String(stats.count).padStart(3, "0")}</div>
    <div className="hero-copy">
      <p className="eyebrow"><span />{t.record}</p>
      <h1 id="hero-title">{t.titleA}<br />{t.titleB}</h1>
      <p className="hero-en">{t.motto}</p>
      <p className="hero-lede">{t.lede}</p>
      <p className="hero-method">{t.method}</p>
    </div>
    <dl className="hero-stats">
      <div><dt>{t.events}</dt><dd>{String(stats.count).padStart(2, "0")}</dd></div>
      <div><dt>{t.species}</dt><dd>{String(stats.species).padStart(2, "0")}</dd></div>
      <div><dt>{t.span}</dt><dd>{stats.startYear}—{stats.endYear}</dd></div>
      <div><dt>{t.verified}</dt><dd>{stats.verifiedAt}</dd></div>
    </dl>
    <div className="scroll-cue"><span>{t.scroll}</span><i aria-hidden="true">→</i></div>
  </section>;
}
