import { useEffect, useId, useRef } from "react";

type GooeyTextProps = {
  texts: string[];
  morphTime?: number;
  cooldownTime?: number;
  className?: string;
  textClassName?: string;
};

export default function GooeyText({
  texts,
  morphTime = 1,
  cooldownTime = 0.35,
  className = "",
  textClassName = "",
}: GooeyTextProps) {
  const text1Ref = useRef<HTMLSpanElement | null>(null);
  const text2Ref = useRef<HTMLSpanElement | null>(null);
  const filterId = useId().replace(/:/g, "");

  useEffect(() => {
    if (texts.length === 0) return undefined;

    let textIndex = texts.length - 1;
    let time = new Date();
    let morph = 0;
    let cooldown = cooldownTime;
    let animationId = 0;

    const setMorph = (fraction: number) => {
      if (!text1Ref.current || !text2Ref.current) return;

      const safeFraction = Math.max(fraction, 0.001);
      text2Ref.current.style.filter = `blur(${Math.min(
        8 / safeFraction - 8,
        100
      )}px)`;
      text2Ref.current.style.opacity = `${Math.pow(safeFraction, 0.4) * 100}%`;

      const inverse = Math.max(1 - safeFraction, 0.001);
      text1Ref.current.style.filter = `blur(${Math.min(8 / inverse - 8, 100)}px)`;
      text1Ref.current.style.opacity = `${Math.pow(inverse, 0.4) * 100}%`;
    };

    const doCooldown = () => {
      morph = 0;
      if (!text1Ref.current || !text2Ref.current) return;

      text2Ref.current.style.filter = "";
      text2Ref.current.style.opacity = "100%";
      text1Ref.current.style.filter = "";
      text1Ref.current.style.opacity = "0%";
    };

    const doMorph = () => {
      morph -= cooldown;
      cooldown = 0;
      let fraction = morph / morphTime;

      if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
      }

      setMorph(fraction);
    };

    const animate = () => {
      animationId = window.requestAnimationFrame(animate);
      const newTime = new Date();
      const shouldIncrementIndex = cooldown > 0;
      const dt = (newTime.getTime() - time.getTime()) / 1000;
      time = newTime;

      cooldown -= dt;

      if (cooldown <= 0) {
        if (shouldIncrementIndex) {
          textIndex = (textIndex + 1) % texts.length;
          if (text1Ref.current && text2Ref.current) {
            text1Ref.current.textContent = texts[textIndex % texts.length];
            text2Ref.current.textContent = texts[(textIndex + 1) % texts.length];
          }
        }
        doMorph();
      } else {
        doCooldown();
      }
    };

    if (text1Ref.current && text2Ref.current) {
      text1Ref.current.textContent = texts[textIndex % texts.length];
      text2Ref.current.textContent = texts[(textIndex + 1) % texts.length];
    }

    animate();

    return () => window.cancelAnimationFrame(animationId);
  }, [texts, morphTime, cooldownTime]);

  return (
    <div className={`gooey-text ${className}`}>
      <svg className="absolute h-0 w-0" aria-hidden="true" focusable="false">
        <defs>
          <filter id={filterId}>
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>

      <span className="sr-only">{texts.join(", ")}</span>
      <div className="gooey-text-inner" style={{ filter: `url(#${filterId})` }}>
        <span ref={text1Ref} className={`gooey-text-layer ${textClassName}`} />
        <span ref={text2Ref} className={`gooey-text-layer ${textClassName}`} />
      </div>
    </div>
  );
}
