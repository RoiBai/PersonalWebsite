"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import {
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import type { AnimalEvent } from "@/types/event";
import { TimelineTrack } from "./TimelineTrack";
import { TimelineProgress } from "./TimelineProgress";
import { TimelineNavigation } from "./TimelineNavigation";
import { EventDetailDrawer } from "@/components/event/EventDetailDrawer";
import { useLanguage } from "@/components/ui/LanguageProvider";
import { ui } from "@/lib/i18n";

type DragState = {
  pointerId: number;
  startX: number;
  lastX: number;
  moved: boolean;
};

export function HorizontalTimeline({ events }: { events: AnimalEvent[] }) {
  const { locale } = useLanguage();
  const t = ui[locale];
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<number | null>(null);
  const openTimer = useRef<number | null>(null);
  const returnFocus = useRef<HTMLElement | null>(null);
  const dragState = useRef<DragState | null>(null);
  const suppressClick = useRef(false);
  const reducedMotion = useReducedMotion();
  const [maxX, setMaxX] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [openId, setOpenId] = useState<string | null>(null);
  const [detailId, setDetailId] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileProgress, setMobileProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, reducedMotion ? 0 : -maxX],
  );
  const drawerEvent = events.find((event) => event.id === detailId) ?? null;
  const progress = isMobile
    ? mobileProgress
    : Math.max(0, Math.min(1, activeIndex / Math.max(1, events.length - 1)));

  useEffect(() => {
    const media = window.matchMedia("(max-width: 760px)");
    const sync = () => setIsMobile(media.matches || Boolean(reducedMotion));
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, [reducedMotion]);

  useEffect(() => {
    const measure = () =>
      setMaxX(
        Math.max(
          0,
          (trackRef.current?.scrollWidth ?? 0) -
            (viewportRef.current?.clientWidth ?? 0),
        ),
      );
    const observer = new ResizeObserver(measure);
    if (trackRef.current) observer.observe(trackRef.current);
    if (viewportRef.current) observer.observe(viewportRef.current);
    measure();
    return () => observer.disconnect();
  }, [events.length, isMobile]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (!isMobile) {
      setActiveIndex(
        Math.min(
          events.length - 1,
          Math.max(0, Math.round(value * (events.length - 1))),
        ),
      );
    }
  });

  // Both wheel axes and pointer dragging update the page's vertical position.
  // The existing scroll-linked animation remains the single source of truth,
  // so the closing section cannot appear before the full track is traversed.
  const advanceTimeline = useCallback((delta: number) => {
    const section = sectionRef.current;
    if (!section || !Number.isFinite(delta) || Math.abs(delta) < 0.01) return;

    const rect = section.getBoundingClientRect();
    const start = window.scrollY + rect.top;
    const end = start + Math.max(0, section.offsetHeight - window.innerHeight);
    const current = window.scrollY;
    let target = current + delta;

    if (delta > 0 && current < end - 1) target = Math.min(target, end);
    if (delta < 0 && current > start + 1) target = Math.max(target, start);

    window.scrollTo({ top: target, behavior: "instant" });
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const viewport = viewportRef.current;
    if (!viewport) return;

    const onWheel = (event: WheelEvent) => {
      if (event.ctrlKey) return;
      const section = sectionRef.current;
      const rect = section?.getBoundingClientRect();
      if (
        !rect ||
        rect.top > 1 ||
        rect.bottom < window.innerHeight - 1
      ) {
        return;
      }

      const dominantDelta =
        Math.abs(event.deltaX) > Math.abs(event.deltaY)
          ? event.deltaX
          : event.deltaY;
      if (Math.abs(dominantDelta) < 0.01) return;

      const unit =
        event.deltaMode === WheelEvent.DOM_DELTA_LINE
          ? 16
          : event.deltaMode === WheelEvent.DOM_DELTA_PAGE
            ? window.innerHeight
            : 1;
      event.preventDefault();
      advanceTimeline(dominantDelta * unit);
    };

    viewport.addEventListener("wheel", onWheel, { passive: false });
    return () => viewport.removeEventListener("wheel", onWheel);
  }, [advanceTimeline, isMobile]);

  const clearTimers = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    if (openTimer.current) window.clearTimeout(openTimer.current);
  };
  const openBoard = useCallback((id: string) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    if (openTimer.current) window.clearTimeout(openTimer.current);
    openTimer.current = window.setTimeout(() => setOpenId(id), 120);
  }, []);
  const closeBoard = useCallback(() => {
    if (openTimer.current) window.clearTimeout(openTimer.current);
    closeTimer.current = window.setTimeout(() => setOpenId(null), 180);
  }, []);
  const showDetail = useCallback((event: AnimalEvent, anchor: HTMLElement) => {
    clearTimers();
    setOpenId(null);
    returnFocus.current = anchor;
    setDetailId(event.id);
  }, []);
  const closeDetail = useCallback(() => {
    setDetailId(null);
    window.setTimeout(() => returnFocus.current?.focus(), 0);
  }, []);

  useEffect(() => {
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !detailId) setOpenId(null);
    };
    const outside = (event: PointerEvent) => {
      if (
        isMobile &&
        openId &&
        !(event.target as Element).closest(
          "[data-event-index], [data-info-board]",
        )
      ) {
        setOpenId(null);
      }
    };
    document.addEventListener("keydown", escape);
    document.addEventListener("pointerdown", outside);
    return () => {
      clearTimers();
      document.removeEventListener("keydown", escape);
      document.removeEventListener("pointerdown", outside);
    };
  }, [detailId, isMobile, openId]);

  useEffect(() => {
    if (isMobile) return;
    const onKey = (event: KeyboardEvent) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (
        !rect ||
        rect.top > 1 ||
        rect.bottom < window.innerHeight - 1 ||
        !["ArrowLeft", "ArrowRight"].includes(event.key)
      ) {
        return;
      }
      event.preventDefault();
      const direction = event.key === "ArrowRight" ? 1 : -1;
      advanceTimeline(
        direction * Math.max(260, maxX / Math.max(1, events.length - 1)),
      );
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [advanceTimeline, events.length, isMobile, maxX]);

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (isMobile || event.button !== 0 || event.pointerType === "touch") return;
    const target = event.target as Element;
    if (
      target.closest(
        "a, input, textarea, select, [contenteditable='true'], [data-info-board]",
      )
    ) {
      return;
    }

    dragState.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      lastX: event.clientX,
      moved: false,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const drag = dragState.current;
    if (!drag || drag.pointerId !== event.pointerId) return;

    const totalDistance = Math.abs(event.clientX - drag.startX);
    if (!drag.moved && totalDistance < 5) return;
    if (!drag.moved) {
      drag.moved = true;
      suppressClick.current = true;
      setIsDragging(true);
      setOpenId(null);
    }

    event.preventDefault();
    const delta = drag.lastX - event.clientX;
    drag.lastX = event.clientX;
    advanceTimeline(delta);
  };

  const finishPointerDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    const drag = dragState.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    if (drag.moved) event.preventDefault();
    dragState.current = null;
    setIsDragging(false);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    window.setTimeout(() => {
      suppressClick.current = false;
    }, 0);
  };

  const cancelPointerDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (dragState.current?.pointerId !== event.pointerId) return;
    dragState.current = null;
    suppressClick.current = false;
    setIsDragging(false);
  };

  const preventDraggedClick = (event: ReactMouseEvent<HTMLDivElement>) => {
    if (!suppressClick.current) return;
    event.preventDefault();
    event.stopPropagation();
    suppressClick.current = false;
  };

  const onMobileScroll = () => {
    if (!viewportRef.current) return;
    const element = viewportRef.current;
    const nextProgress =
      element.scrollLeft /
      Math.max(1, element.scrollWidth - element.clientWidth);
    setMobileProgress(nextProgress);
    setActiveIndex(
      Math.min(events.length - 1, Math.round(nextProgress * (events.length - 1))),
    );
    setOpenId(null);
  };

  const height = isMobile
    ? undefined
    : Math.max(
        1400,
        maxX + (typeof window !== "undefined" ? window.innerHeight : 900),
      );
  const drawerIndex = useMemo(
    () => events.findIndex((event) => event.id === detailId),
    [detailId, events],
  );

  return (
    <section
      ref={sectionRef}
      className={`timeline-section ${isMobile ? "is-mobile" : ""}`}
      style={height ? { height } : undefined}
      aria-labelledby="timeline-heading"
    >
      <h2 id="timeline-heading" className="sr-only">
        {t.timeline}
      </h2>
      <div
        ref={viewportRef}
        className={`timeline-viewport ${isDragging ? "is-dragging" : ""}`}
        onScroll={isMobile ? onMobileScroll : undefined}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={finishPointerDrag}
        onPointerCancel={cancelPointerDrag}
        onClickCapture={preventDraggedClick}
        onDragStart={(event) => event.preventDefault()}
      >
        <div className="timeline-chrome">
          <p>{t.archive}</p>
          <TimelineProgress
            index={activeIndex}
            total={events.length}
            year={events[activeIndex]?.date.slice(0, 4) ?? "—"}
            progress={progress}
          />
          <TimelineNavigation />
        </div>
        <TimelineTrack
          events={events}
          trackRef={trackRef}
          x={x}
          openId={openId}
          isMobile={isMobile}
          onOpenBoard={openBoard}
          onCloseBoard={closeBoard}
          onBoardEnter={clearTimers}
          onBoardLeave={closeBoard}
          onOpenDetail={showDetail}
        />
      </div>
      <p className="mobile-swipe" aria-hidden="true">
        {t.swipe}
      </p>
      <EventDetailDrawer
        event={drawerEvent}
        previous={drawerIndex > 0 ? events[drawerIndex - 1] : undefined}
        next={
          drawerIndex >= 0 && drawerIndex < events.length - 1
            ? events[drawerIndex + 1]
            : undefined
        }
        onClose={closeDetail}
        onNavigate={(event) => setDetailId(event.id)}
      />
    </section>
  );
}
