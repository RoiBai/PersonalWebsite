"use client";
import type { RefObject } from "react";
import { motion, type MotionValue } from "framer-motion";
import type { AnimalEvent } from "@/types/event";
import { TimelineAxis } from "./TimelineAxis";
import { TimelineEvent } from "./TimelineEvent";
import { useLanguage } from "@/components/ui/LanguageProvider"; import { ui } from "@/lib/i18n";

export function TimelineTrack({ events, trackRef, x, openId, isMobile, onOpenBoard, onCloseBoard, onOpenDetail, onBoardEnter, onBoardLeave }: { events: AnimalEvent[]; trackRef: RefObject<HTMLDivElement | null>; x: MotionValue<number>; openId: string | null; isMobile: boolean; onOpenBoard: (id: string) => void; onCloseBoard: () => void; onOpenDetail: (event: AnimalEvent, anchor: HTMLElement) => void; onBoardEnter: () => void; onBoardLeave: () => void }) {
  const {locale}=useLanguage(); return <motion.div ref={trackRef} className="timeline-track" style={isMobile ? undefined : { x }}><TimelineAxis />{events.map((event, index) => <TimelineEvent key={event.id} event={event} index={index} open={openId === event.id} isMobile={isMobile} onOpenBoard={() => onOpenBoard(event.id)} onCloseBoard={onCloseBoard} onBoardEnter={onBoardEnter} onBoardLeave={onBoardLeave} onOpenDetail={(anchor) => onOpenDetail(event, anchor)} />)}<div className="track-end"><span>{ui[locale].keepGoing}</span><b aria-hidden="true">…</b></div></motion.div>;
}
