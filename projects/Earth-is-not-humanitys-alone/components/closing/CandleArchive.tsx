"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "@/components/ui/LanguageProvider";
import { ui } from "@/lib/i18n";

const CANDLE_COUNT = 10;
const ESTIMATED_RECORDS = 2_000;

export function CandleArchive({ recordedCount }: { recordedCount: number }) {
  const { locale } = useLanguage();
  const t = ui[locale];
  const [visitorLit, setVisitorLit] = useState<Set<number>>(() => new Set());
  const baselineLit = Math.max(1, Math.min(CANDLE_COUNT, Math.round((recordedCount / ESTIMATED_RECORDS) * CANDLE_COUNT)));
  const litCount = baselineLit + visitorLit.size;
  const formatter = useMemo(() => new Intl.NumberFormat(locale === "zh" ? "zh-CN" : "en-US"), [locale]);

  const toggle = (index: number) => {
    if (index < baselineLit) return;
    setVisitorLit((current) => {
      const next = new Set(current);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <section className="candle-archive" aria-labelledby="candle-title">
      <div className="candle-heading">
        <p className="candle-kicker">{t.candleKicker}</p>
        <h3 id="candle-title">{t.candleTitle}</h3>
      </div>

      <div className="candle-scene" role="group" aria-label={t.candleGroupLabel}>
        <div className="candle-wall" aria-hidden="true" />
        <div className="candle-row">
          {Array.from({ length: CANDLE_COUNT }, (_, index) => {
            const isBaseline = index < baselineLit;
            const isLit = isBaseline || visitorLit.has(index);
            return (
              <button
                className={`candle ${isLit ? "is-lit" : "is-dark"}`}
                key={index}
                type="button"
                aria-pressed={isLit}
                aria-label={isBaseline ? t.candleAlwaysLit(index + 1) : t.candleToggle(index + 1, isLit)}
                onClick={() => toggle(index)}
              >
                <span className="candle-flame" aria-hidden="true"><i /></span>
                <span className="candle-wick" aria-hidden="true" />
                <span className="candle-rim" aria-hidden="true" />
                <span className="candle-body" aria-hidden="true"><i /></span>
                <span className="candle-base" aria-hidden="true" />
              </button>
            );
          })}
        </div>
        <div className="candle-shelf" aria-hidden="true" />
        <p className="candle-status" aria-live="polite">{t.candleStatus(litCount, CANDLE_COUNT)}</p>
      </div>

      <div className="candle-copy">
        <p>{t.candleEstimate(formatter.format(ESTIMATED_RECORDS), formatter.format(recordedCount))}</p>
        <p className="candle-law-call">{t.candleLawCall}</p>
        <p className="candle-instruction">{t.candleInstruction}</p>
      </div>
    </section>
  );
}
