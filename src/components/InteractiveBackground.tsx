import { useEffect, useRef } from "react";

const nodes = [
  { x: 0.1, y: 0.18, r: 2.2 },
  { x: 0.26, y: 0.11, r: 1.8 },
  { x: 0.46, y: 0.26, r: 2.4 },
  { x: 0.68, y: 0.16, r: 1.8 },
  { x: 0.88, y: 0.38, r: 2.2 },
  { x: 0.17, y: 0.58, r: 1.8 },
  { x: 0.42, y: 0.74, r: 2.4 },
  { x: 0.64, y: 0.56, r: 1.8 },
  { x: 0.86, y: 0.8, r: 2.2 },
  { x: 0.52, y: 0.9, r: 1.7 },
];

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointer = useRef({ x: 0.5, y: 0.5 });
  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || reducedMotion) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let frame = 0;
    let animationId = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      context.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.current = {
        x: (event.clientX - rect.left) / rect.width,
        y: (event.clientY - rect.top) / rect.height,
      };
    };

    const draw = () => {
      frame += 0.006;
      const rect = canvas.getBoundingClientRect();
      context.clearRect(0, 0, rect.width, rect.height);
      context.lineWidth = 1;

      const plotted = nodes.map((node, index) => {
        const pullX = (pointer.current.x - 0.5) * 24;
        const pullY = (pointer.current.y - 0.5) * 24;
        return {
          x:
            node.x * rect.width +
            Math.sin(frame + index * 0.72) * 9 +
            pullX * (index % 3) * 0.16,
          y:
            node.y * rect.height +
            Math.cos(frame + index * 0.65) * 9 +
            pullY * (index % 2) * 0.2,
          r: node.r,
        };
      });

      plotted.forEach((a, index) => {
        plotted.slice(index + 1).forEach((b) => {
          const distance = Math.hypot(a.x - b.x, a.y - b.y);
          if (distance < 300) {
            context.strokeStyle = `rgba(193, 232, 255, ${0.18 - distance / 2200})`;
            context.beginPath();
            context.moveTo(a.x, a.y);
            context.lineTo(b.x, b.y);
            context.stroke();
          }
        });
      });

      plotted.forEach((node, index) => {
        context.fillStyle = index % 3 === 0 ? "rgba(193, 232, 255, 0.62)" : "rgba(125, 160, 202, 0.52)";
        context.beginPath();
        context.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        context.fill();
      });

      animationId = window.requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    canvas.addEventListener("pointermove", onPointerMove);

    return () => {
      window.cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointermove", onPointerMove);
    };
  }, [reducedMotion]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#021024]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(193,232,255,0.22),transparent_28%),radial-gradient(circle_at_84%_28%,rgba(84,131,179,0.28),transparent_34%),linear-gradient(145deg,#021024_0%,#052659_54%,#021024_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(193,232,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(193,232,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px] opacity-80" />
      <div className="absolute -right-28 top-28 h-72 w-72 rounded-full border border-[#C1E8FF]/20 blur-[1px]" />
      <div className="absolute bottom-16 left-1/2 h-px w-[42rem] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#C1E8FF]/35 to-transparent" />
      <canvas
        ref={canvasRef}
        className="hidden h-full w-full md:block"
        aria-hidden="true"
      />
    </div>
  );
}
