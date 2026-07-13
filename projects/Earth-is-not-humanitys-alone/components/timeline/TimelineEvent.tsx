"use client";

import { useRef } from "react";
import type { AnimalEvent } from "@/types/event";
import { AnimalPortrait } from "@/components/event/AnimalPortrait";
import { EventInfoBoard } from "@/components/event/EventInfoBoard";
import { useLanguage } from "@/components/ui/LanguageProvider";
import { eventText } from "@/lib/i18n";

export function TimelineEvent({ event, index, open, onOpenBoard, onCloseBoard, onOpenDetail, onBoardEnter, onBoardLeave, isMobile }: { event: AnimalEvent; index: number; open: boolean; onOpenBoard: () => void; onCloseBoard: () => void; onOpenDetail: (anchor: HTMLElement) => void; onBoardEnter: () => void; onBoardLeave: () => void; isMobile: boolean }) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const {locale}=useLanguage(); const text=eventText(event,locale);
  const activate = () => { if (isMobile && !open) onOpenBoard(); else if (buttonRef.current) onOpenDetail(buttonRef.current); };
  return <article className={`timeline-event event-${index % 2 ? "below" : "above"}`} data-event-index={index}>
    <button ref={buttonRef} className="event-trigger" type="button" aria-expanded={open} aria-controls={`info-${event.id}`} aria-label={`${text.animalName}: ${text.shortTitle}`} onPointerEnter={onOpenBoard} onPointerLeave={onCloseBoard} onFocus={onOpenBoard} onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) onCloseBoard(); }} onClick={activate} onKeyDown={(e) => { if (e.key === " " || e.key === "Enter") { e.preventDefault(); if (buttonRef.current) onOpenDetail(buttonRef.current); } }}>
      <span className="event-date">{event.date.slice(0, 4)}<small>{locale === "zh" ? text.displayDate.replace(`${event.date.slice(0,4)}年`, "") : text.displayDate.replace(event.date.slice(0,4), "")}</small></span><AnimalPortrait event={event} priority={index < 2} /><span className="event-name">{text.animalName}</span><span className="event-species">{text.species}</span><span className="event-tag">{text.harmCategory[0]}</span>
    </button>
    <span className="event-node" aria-hidden="true" />
    {open && <div id={`info-${event.id}`}><EventInfoBoard event={event} anchorRef={buttonRef} onEnter={onBoardEnter} onLeave={onBoardLeave} onOpen={() => buttonRef.current && onOpenDetail(buttonRef.current)} /></div>}
  </article>;
}
