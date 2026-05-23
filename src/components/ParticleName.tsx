import { useEffect, useRef, useState } from "react";

type Particle = {
  baseX: number;
  baseY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  phase: number;
};

type PointerState = {
  x: number;
  y: number;
  px: number;
  py: number;
  vx: number;
  vy: number;
  active: boolean;
};

const palette = ["#C1E8FF", "#9FC8EA", "#7DA0CA", "#5483B3", "#ffffff"];
const inkPalette = ["#021024", "#052659", "#174066", "#5483B3", "#7DA0CA"];

type ParticleNameProps = {
  tone?: "dark" | "light";
};

export default function ParticleName({ tone = "dark" }: ParticleNameProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const [isCanvasReady, setIsCanvasReady] = useState(false);
  const pointerRef = useRef<PointerState>({
    x: -9999,
    y: -9999,
    px: -9999,
    py: -9999,
    vx: 0,
    vy: 0,
    active: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    let animationId = 0;
    let width = 0;
    let height = 0;
    let frame = 0;
    let mounted = true;
    let animationStarted = false;
    let listenersAttached = false;
    const activePalette = tone === "light" ? inkPalette : palette;
    const textColor = tone === "light" ? "#021024" : "#ffffff";
    const staticColor = tone === "light" ? "#052659" : "#C1E8FF";
    const ghostColor =
      tone === "light" ? "rgba(5, 38, 89, 0.07)" : "rgba(246, 251, 255, 0.08)";

    const drawName = (
      target: CanvasRenderingContext2D,
      color = textColor
    ) => {
      target.fillStyle = color;
      target.textAlign = "left";
      target.textBaseline = "middle";

      const mainSize = Math.min(118, Math.max(60, width * 0.15));
      const subSize = Math.min(50, Math.max(31, width * 0.062));
      target.font = `700 ${mainSize}px Fraunces, Georgia, serif`;
      target.fillText("Ruiyuan Bai", 0, height * 0.38);
      target.font = `600 ${subSize}px "Noto Serif SC", "Songti SC", SimSun, Georgia, serif`;
      target.fillText("白蕊源 / Roi", 4, height * 0.7);
    };

    const buildParticles = () => {
      const rect = wrap.getBoundingClientRect();
      width = Math.max(320, rect.width);
      height = width < 560 ? 190 : 245;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      const sample = document.createElement("canvas");
      sample.width = width;
      sample.height = height;
      const sampleContext = sample.getContext("2d", {
        willReadFrequently: true,
      });
      if (!sampleContext) return;

      sampleContext.clearRect(0, 0, width, height);
      drawName(sampleContext);

      const image = sampleContext.getImageData(0, 0, width, height).data;
      const particles: Particle[] = [];
      const gap = width < 560 ? 3 : 2;

      for (let y = 0; y < height; y += gap) {
        for (let x = 0; x < width; x += gap) {
          const alpha = image[(y * width + x) * 4 + 3];
          if (alpha > 80) {
            particles.push({
              baseX: x,
              baseY: y,
              x,
              y,
              vx: 0,
              vy: 0,
              size: Math.random() * 0.65 + 0.82,
              color:
                activePalette[Math.floor(Math.random() * activePalette.length)],
              phase: Math.random() * Math.PI * 2,
            });
          }
        }
      }

      particlesRef.current = particles;
    };

    const drawStatic = () => {
      context.clearRect(0, 0, width, height);
      drawName(context, staticColor);
    };

    const drawCursorField = (pointer: PointerState) => {
      if (!pointer.active) return;

      const radius = 142 + Math.min(36, Math.hypot(pointer.vx, pointer.vy));
      const gradient = context.createRadialGradient(
        pointer.x,
        pointer.y,
        0,
        pointer.x,
        pointer.y,
        radius
      );
      gradient.addColorStop(0, "rgba(193, 232, 255, 0.2)");
      gradient.addColorStop(0.34, "rgba(125, 160, 202, 0.08)");
      gradient.addColorStop(1, "rgba(193, 232, 255, 0)");

      context.fillStyle = gradient;
      context.beginPath();
      context.arc(pointer.x, pointer.y, radius, 0, Math.PI * 2);
      context.fill();

      context.strokeStyle = "rgba(193, 232, 255, 0.22)";
      context.lineWidth = 1;
      context.beginPath();
      context.arc(pointer.x, pointer.y, radius * 0.36, 0, Math.PI * 2);
      context.stroke();
    };

    const animate = () => {
      frame += 0.012;
      context.clearRect(0, 0, width, height);
      const pointer = pointerRef.current;
      const particles = particlesRef.current;

      if (particles.length < 40) {
        drawStatic();
        animationId = window.requestAnimationFrame(animate);
        return;
      }

      drawCursorField(pointer);

      if (!pointer.active) {
        drawName(context, ghostColor);
      }

      for (const particle of particles) {
        const dx = particle.baseX - pointer.x;
        const dy = particle.baseY - pointer.y;
        const distance = Math.hypot(dx, dy);

        if (pointer.active && distance < 118) {
          const closeness = 1 - distance / 118;
          const force = closeness * closeness * 4.2;
          const angle = Math.atan2(dy, dx);
          particle.vx +=
            Math.cos(angle) * force + pointer.vx * closeness * 0.045;
          particle.vy +=
            Math.sin(angle) * force + pointer.vy * closeness * 0.045;
        }

        const returnForce = pointer.active ? 0.06 : 0.16;
        particle.vx += (particle.baseX - particle.x) * returnForce;
        particle.vy += (particle.baseY - particle.y) * returnForce;
        particle.vx *= pointer.active ? 0.82 : 0.7;
        particle.vy *= pointer.active ? 0.82 : 0.7;
        particle.x += particle.vx;
        particle.y += particle.vy;

        context.fillStyle = particle.color;
        context.globalAlpha = pointer.active
          ? 0.82 + Math.sin(frame + particle.phase) * 0.12
          : 0.96;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fill();
      }

      pointer.vx *= 0.86;
      pointer.vy *= 0.86;
      context.globalAlpha = 1;
      animationId = window.requestAnimationFrame(animate);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const pointer = pointerRef.current;
      const wasActive = pointer.active;

      pointer.vx = wasActive ? x - pointer.x : 0;
      pointer.vy = wasActive ? y - pointer.y : 0;
      pointer.px = pointer.x;
      pointer.py = pointer.y;
      pointer.x = x;
      pointer.y = y;
      pointer.active = true;
    };

    const handlePointerLeave = () => {
      const pointer = pointerRef.current;
      pointer.active = false;
      pointer.x = -9999;
      pointer.y = -9999;
      pointer.vx = 0;
      pointer.vy = 0;
    };

    const handleResize = () => {
      buildParticles();
      if (prefersReducedMotion) drawStatic();
    };

    const resizeObserver =
      "ResizeObserver" in window ? new ResizeObserver(handleResize) : null;

    const start = () => {
      if (!mounted) return;
      buildParticles();
      setIsCanvasReady(true);

      if (prefersReducedMotion) {
        drawStatic();
        return;
      }

      if (!listenersAttached) {
        canvas.addEventListener("pointermove", handlePointerMove);
        canvas.addEventListener("pointerleave", handlePointerLeave);
        listenersAttached = true;
      }

      if (!animationStarted) {
        animationStarted = true;
        animate();
      }
    };

    start();

    if (document.fonts) {
      void document.fonts.ready.then(() => {
        if (!mounted) return;
        buildParticles();
        if (prefersReducedMotion) drawStatic();
      });
    }

    if (resizeObserver) {
      resizeObserver.observe(wrap);
    } else {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      mounted = false;
      window.cancelAnimationFrame(animationId);
      resizeObserver?.disconnect();
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [tone]);

  return (
    <div ref={wrapRef} className="relative min-h-[190px] w-full md:min-h-[245px]">
      <h1
        className={`pointer-events-none absolute left-0 top-1/2 z-0 w-full -translate-y-1/2 font-display text-[clamp(3.9rem,15vw,7.4rem)] font-bold leading-[0.88] tracking-normal transition-opacity duration-500 ${
          tone === "light" ? "text-[#052659]" : "text-white"
        } ${isCanvasReady ? "opacity-0" : "opacity-100"}`}
      >
        Ruiyuan Bai
        <span
          className={`mt-4 block font-serif-sc text-[clamp(2rem,6.2vw,3.2rem)] font-semibold ${
            tone === "light" ? "text-[#5483B3]" : "text-[#C1E8FF]"
          }`}
        >
          白蕊源 / Roi
        </span>
      </h1>
      <span className="sr-only">Ruiyuan Bai 白蕊源 / Roi</span>
      <canvas
        ref={canvasRef}
        className="relative z-10 block max-w-full cursor-crosshair"
        aria-hidden="true"
      />
    </div>
  );
}
