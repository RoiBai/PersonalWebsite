"use client";

import { useEffect, useState, type RefObject } from "react";
import { FloatingArrow, FloatingPortal, arrow, autoUpdate, flip, offset, shift, size, useFloating } from "@floating-ui/react";
import type { AnimalEvent } from "@/types/event";
import { useLanguage } from "@/components/ui/LanguageProvider"; import { eventText, ui } from "@/lib/i18n";

export function EventInfoBoard({ event, anchorRef, onEnter, onLeave, onOpen }: { event: AnimalEvent; anchorRef: RefObject<HTMLButtonElement | null>; onEnter: () => void; onLeave: () => void; onOpen: () => void }) {
  const [arrowElement, setArrowElement] = useState<SVGSVGElement | null>(null);
  const {locale}=useLanguage(); const text=eventText(event,locale); const t=ui[locale];
  const { refs, floatingStyles, context } = useFloating({ placement: "top", strategy: "fixed", whileElementsMounted: autoUpdate, middleware: [offset(18), flip({ fallbackPlacements: ["top", "bottom"] }), shift({ padding: 14, crossAxis: true }), size({ padding: 14, apply({ availableHeight, elements }) { elements.floating.style.maxHeight = `${Math.max(140, availableHeight)}px`; } }), arrow({ element: arrowElement })] });
  useEffect(() => { refs.setReference(anchorRef.current); }, [anchorRef, refs]);
  // Floating UI intentionally exposes a stable callback ref; this is not a .current read.
  // eslint-disable-next-line react-hooks/refs
  return <FloatingPortal><div ref={refs.setFloating} style={floatingStyles} className="info-board" data-info-board onPointerEnter={onEnter} onPointerLeave={onLeave} role="dialog" aria-label={`${text.animalName}: ${text.shortTitle}`}>
    <div className="board-kicker"><span>{text.displayDate}</span><span>ARCHIVE {event.id.toUpperCase()}</span></div>
    <h3>{text.animalName}</h3><p className="board-species">{text.species}</p>
    <dl><div><dt>{t.place}</dt><dd>{text.place}, {text.country}</dd></div><div><dt>{t.event}</dt><dd>{text.shortTitle}</dd></div></dl>
    <p className="board-summary">{text.infoBoardText}</p>
    <div className="board-footer"><span>{t.sourcesCount(event.sources.length)}</span><button type="button" onClick={onOpen}>{t.fullStory} <b aria-hidden="true">→</b></button></div>
    <FloatingArrow ref={setArrowElement} context={context} className="floating-arrow" fill="var(--sage)" stroke="var(--ink)" strokeWidth={1} />
  </div></FloatingPortal>;
}
