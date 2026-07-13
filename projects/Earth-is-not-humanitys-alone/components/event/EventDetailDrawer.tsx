"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import type { AnimalEvent } from "@/types/event";
import { EventMeta } from "./EventMeta";
import { EventSourceList } from "./EventSourceList";
import { ContentWarning } from "@/components/ui/ContentWarning";
import { useLanguage } from "@/components/ui/LanguageProvider"; import { eventText, ui } from "@/lib/i18n";
import { withDemoBasePath } from "@/lib/basePath";

export function EventDetailDrawer({ event, previous, next, onClose, onNavigate }: { event: AnimalEvent | null; previous?: AnimalEvent; next?: AnimalEvent; onClose: () => void; onNavigate: (event: AnimalEvent) => void }) {
  const dialogRef = useRef<HTMLDivElement>(null); const closeRef = useRef<HTMLButtonElement>(null);
  const {locale}=useLanguage(); const t=ui[locale]; const text=event ? eventText(event,locale) : null;
  useEffect(() => {
    if (!event) return; const main = document.querySelector("#site-main"); const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden"; main?.setAttribute("inert", ""); window.setTimeout(() => closeRef.current?.focus(), 0);
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); if (e.key === "Tab") { const nodes = dialogRef.current?.querySelectorAll<HTMLElement>('button, a[href], [tabindex]:not([tabindex="-1"])'); if (!nodes?.length) return; const first = nodes[0], last = nodes[nodes.length - 1]; if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); } else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); } } };
    document.addEventListener("keydown", onKey); return () => { document.body.style.overflow = previousOverflow; main?.removeAttribute("inert"); document.removeEventListener("keydown", onKey); };
  }, [event, onClose]);
  if (!event || !text || typeof document === "undefined") return null;
  return createPortal(<div className="drawer-backdrop" role="presentation" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}><div ref={dialogRef} className="detail-drawer" role="dialog" aria-modal="true" aria-labelledby="drawer-title">
    <header className="drawer-header"><div><span>ARCHIVE / {event.id.toUpperCase()}</span><span>{event.verification.status === "verified" ? t.verifiedLabel : t.partial}</span></div><button ref={closeRef} className="close-button" onClick={onClose} aria-label={t.close}>{t.close} <b aria-hidden="true">×</b></button></header>
    <div className="drawer-layout"><aside>{event.illustration.generationStatus === "generated" ? <Image unoptimized src={withDemoBasePath(event.illustration.src)} alt={text.alt} width={event.illustration.width} height={event.illustration.height} sizes="(max-width: 720px) 58vw, 280px" /> : <div className="drawer-pending" role="img" aria-label={`${text.alt} ${t.pending}`}>{t.pending}</div>}<p>{text.highlightedFact}</p></aside><article>
      <p className="drawer-date">{text.displayDate} · {text.country}</p><h2 id="drawer-title">{text.animalName}</h2><p className="drawer-species">{text.species}{event.animal.scientificName ? ` · ${event.animal.scientificName}` : ""}</p>
      <EventMeta event={event} />{text.contentWarning && <ContentWarning label={t.warning}>{text.contentWarning}</ContentWarning>}
      <section><h3>{t.recordTitle}</h3><p>{text.fullStory}</p></section><section className="outcome-grid"><div><h3>{t.outcome}</h3><p>{text.outcome}</p></div>{text.aftermath && <div><h3>{t.aftermath}</h3><p>{text.aftermath}</p></div>}</section>
      {text.uncertaintyNote && <section className="uncertainty"><h3>{t.uncertainty}</h3><p>{text.uncertaintyNote}</p></section>}
      <section><h3>{t.sources}</h3><p className="source-note">{t.sourceNote}</p><EventSourceList sources={event.sources} /></section>
    </article></div>
    <nav className="drawer-nav" aria-label="Story navigation"><button disabled={!previous} onClick={() => previous && onNavigate(previous)}><span>{t.previous}</span>{previous ? eventText(previous,locale).animalName : t.beginning}</button><button disabled={!next} onClick={() => next && onNavigate(next)}><span>{t.next}</span>{next ? eventText(next,locale).animalName : t.ending}</button></nav>
  </div></div>, document.body);
}
