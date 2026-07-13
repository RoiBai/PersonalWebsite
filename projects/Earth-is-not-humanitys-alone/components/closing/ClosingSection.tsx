"use client";
import type { AnimalEvent } from "@/types/event";
import { eventStats } from "@/lib/timeline";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { useLanguage } from "@/components/ui/LanguageProvider";
import { ui } from "@/lib/i18n";
import { CandleArchive } from "@/components/closing/CandleArchive";

export function ClosingSection({ events, reviewedCount }: { events: AnimalEvent[]; reviewedCount: number }) {
  const stats=eventStats(events); const {locale}=useLanguage(); const t=ui[locale];
  return <section className="closing" aria-labelledby="closing-title"><div className="closing-mark" aria-hidden="true">{stats.count}</div><div className="closing-copy"><p className="eyebrow"><span />{t.stop}</p><h2 id="closing-title"><span>{t.closingTitleA}</span><br /><span>{t.closingTitleB}</span></h2><p className="closing-lede">{t.closingLede}</p></div><CandleArchive recordedCount={stats.count} /><div className="method-grid"><section><h3>{t.howTitle}</h3><p>{t.how}</p></section><section><h3>{t.auditTitle}</h3><p>{t.audit(reviewedCount,stats.count)}</p></section><section><h3>{t.correctionTitle}</h3><p>{t.correction}</p></section><section><h3>{t.orgTitle}</h3><ul><li><ExternalLink href="https://www.iucnredlist.org/">IUCN Red List</ExternalLink></li><li><ExternalLink href="https://cites.org/">CITES</ExternalLink></li><li><ExternalLink href="https://www.worldanimalprotection.org/">World Animal Protection</ExternalLink></li></ul></section></div><footer><p>{t.footer(stats.count,stats.species,stats.verifiedAt)}</p><a href="#site-main">{t.back}</a></footer></section>;
}
