import { useEffect, useRef, useState } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
};

type VisitorResponse = {
  padded?: string;
  number?: number;
};

let liveVisitorRequest: Promise<string> | null = null;

function getLiveVisitorNumber() {
  if (!liveVisitorRequest) {
    liveVisitorRequest = fetch("/api/visitor", {
      method: "POST",
      cache: "no-store",
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`Visitor counter failed: ${response.status}`);
        }

        const data = (await response.json()) as VisitorResponse;
        if (data.padded) return data.padded;
        if (typeof data.number === "number") {
          return data.number.toString().padStart(7, "0");
        }

        throw new Error("Visitor counter response was missing a number.");
      })
      .catch((error) => {
        liveVisitorRequest = null;
        throw error;
      });
  }

  return liveVisitorRequest;
}

function FlipDigit({ digit, index }: { digit: string; index: number }) {
  return (
    <span className="visitor-flip-digit" aria-hidden="true">
      <span
        key={`${index}-${digit}`}
        className="visitor-flip-digit-inner"
        style={{ animationDelay: `${index * 72}ms` }}
      >
        {digit}
      </span>
    </span>
  );
}

export default function VisitorCounter() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const pointerRef = useRef({ x: -9999, y: -9999, active: false });
  const [visitorNumber, setVisitorNumber] = useState("0000012");
  const [counterStatus, setCounterStatus] = useState<"loading" | "live" | "offline">(
    "loading"
  );

  useEffect(() => {
    getLiveVisitorNumber()
      .then((nextNumber) => {
        setVisitorNumber(nextNumber);
        setCounterStatus("live");
      })
      .catch(() => {
        setCounterStatus("offline");
      });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    let animationId = 0;
    let width = 0;
    let height = 0;

    const buildParticles = () => {
      const rect = wrap.getBoundingClientRect();
      width = Math.max(320, rect.width);
      height = Math.max(280, rect.height);
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(118, Math.max(48, Math.floor(width / 13)));
      particlesRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.34,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.55 + 0.65,
        alpha: Math.random() * 0.42 + 0.22,
      }));
    };

    const drawParticles = () => {
      context.clearRect(0, 0, width, height);
      const pointer = pointerRef.current;

      for (const particle of particlesRef.current) {
        if (!reducedMotion) {
          const dx = particle.x - pointer.x;
          const dy = particle.y - pointer.y;
          const distance = Math.hypot(dx, dy);

          if (pointer.active && distance < 124) {
            const force = (1 - distance / 124) * 0.5;
            const angle = Math.atan2(dy, dx);
            particle.vx += Math.cos(angle) * force;
            particle.vy += Math.sin(angle) * force;
          }

          particle.x += particle.vx;
          particle.y += particle.vy;
          particle.vx *= 0.992;
          particle.vy *= 0.992;

          if (particle.x < -8) particle.x = width + 8;
          if (particle.x > width + 8) particle.x = -8;
          if (particle.y < -8) particle.y = height + 8;
          if (particle.y > height + 8) particle.y = -8;
        }

        context.beginPath();
        context.fillStyle = `rgba(5, 38, 89, ${particle.alpha})`;
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fill();
      }

      for (let i = 0; i < particlesRef.current.length; i += 1) {
        const a = particlesRef.current[i];
        for (let j = i + 1; j < particlesRef.current.length; j += 1) {
          const b = particlesRef.current[j];
          const distance = Math.hypot(a.x - b.x, a.y - b.y);
          if (distance < 88) {
            context.strokeStyle = `rgba(84, 131, 179, ${
              0.13 * (1 - distance / 88)
            })`;
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(a.x, a.y);
            context.lineTo(b.x, b.y);
            context.stroke();
          }
        }
      }

      if (!reducedMotion) {
        animationId = window.requestAnimationFrame(drawParticles);
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointerRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
        active: true,
      };
    };

    const handlePointerLeave = () => {
      pointerRef.current.active = false;
    };

    const handleResize = () => {
      buildParticles();
      drawParticles();
    };

    const resizeObserver =
      "ResizeObserver" in window ? new ResizeObserver(handleResize) : null;

    buildParticles();
    drawParticles();
    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("pointerleave", handlePointerLeave);

    if (resizeObserver) {
      resizeObserver.observe(wrap);
    } else {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      window.cancelAnimationFrame(animationId);
      resizeObserver?.disconnect();
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <section className="section visitor-counter-section">
      <div ref={wrapRef} className="visitor-counter-shell">
        <canvas
          ref={canvasRef}
          className="visitor-counter-canvas"
          aria-hidden="true"
        />
        <div className="visitor-counter-content">
          <p className="visitor-counter-eyebrow">
            {counterStatus === "live" ? "live visitor note" : "visitor note"}
          </p>
          <h2 className="visitor-counter-title">
            你是第{" "}
            <span className="sr-only">{visitorNumber}</span>
            <span className="visitor-flip-board" aria-hidden="true">
              {visitorNumber.split("").map((digit, index) => (
                <FlipDigit key={`${index}-${digit}`} digit={digit} index={index} />
              ))}
            </span>{" "}
            位登录这个网站的人
          </h2>
          {counterStatus === "offline" ? (
            <p className="visitor-counter-copy">
              Counter will become live after Vercel KV / Redis is connected.
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
