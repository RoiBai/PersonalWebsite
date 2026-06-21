import { useEffect, useRef } from "react";

type EntropyProps = {
  className?: string;
  size?: number;
  leftLabel?: string;
  rightLabel?: string;
};

type Particle = {
  x: number;
  y: number;
  size: number;
  order: boolean;
  velocity: { x: number; y: number };
  originalX: number;
  originalY: number;
  influence: number;
  neighbors: Particle[];
};

export default function Entropy({
  className = "",
  size = 400,
  leftLabel = "order",
  rightLabel = "chaos",
}: EntropyProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const context = canvas.getContext("2d");
    if (!context) return undefined;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    context.setTransform(dpr, 0, 0, dpr, 0, 0);

    const particles: Particle[] = [];
    const gridSize = 25;
    const spacing = size / gridSize;

    for (let i = 0; i < gridSize; i += 1) {
      for (let j = 0; j < gridSize; j += 1) {
        const x = spacing * i + spacing / 2;
        const y = spacing * j + spacing / 2;
        particles.push({
          x,
          y,
          originalX: x,
          originalY: y,
          size: 2,
          order: x < size / 2,
          velocity: {
            x: (Math.random() - 0.5) * 2,
            y: (Math.random() - 0.5) * 2,
          },
          influence: 0,
          neighbors: [],
        });
      }
    }

    const updateNeighbors = () => {
      particles.forEach((particle) => {
        particle.neighbors = particles.filter((other) => {
          if (other === particle) return false;
          return Math.hypot(particle.x - other.x, particle.y - other.y) < 100;
        });
      });
    };

    const updateParticle = (particle: Particle) => {
      if (particle.order) {
        const dx = particle.originalX - particle.x;
        const dy = particle.originalY - particle.y;
        const chaosInfluence = { x: 0, y: 0 };

        particle.neighbors.forEach((neighbor) => {
          if (!neighbor.order) {
            const distance = Math.hypot(particle.x - neighbor.x, particle.y - neighbor.y);
            const strength = Math.max(0, 1 - distance / 100);
            chaosInfluence.x += neighbor.velocity.x * strength;
            chaosInfluence.y += neighbor.velocity.y * strength;
            particle.influence = Math.max(particle.influence, strength);
          }
        });

        particle.x +=
          dx * 0.05 * (1 - particle.influence) +
          chaosInfluence.x * particle.influence;
        particle.y +=
          dy * 0.05 * (1 - particle.influence) +
          chaosInfluence.y * particle.influence;
        particle.influence *= 0.99;
      } else {
        particle.velocity.x += (Math.random() - 0.5) * 0.5;
        particle.velocity.y += (Math.random() - 0.5) * 0.5;
        particle.velocity.x *= 0.95;
        particle.velocity.y *= 0.95;
        particle.x += particle.velocity.x;
        particle.y += particle.velocity.y;

        if (particle.x < size / 2 || particle.x > size) particle.velocity.x *= -1;
        if (particle.y < 0 || particle.y > size) particle.velocity.y *= -1;
        particle.x = Math.max(size / 2, Math.min(size, particle.x));
        particle.y = Math.max(0, Math.min(size, particle.y));
      }
    };

    const drawParticle = (particle: Particle) => {
      const alpha = particle.order ? 0.8 - particle.influence * 0.5 : 0.8;
      context.fillStyle = particle.order
        ? `rgba(47, 127, 123, ${alpha})`
        : `rgba(128, 106, 146, ${alpha * 0.9})`;
      context.beginPath();
      context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      context.fill();
    };

    let time = 0;
    let animationId = 0;

    const animate = () => {
      context.clearRect(0, 0, size, size);

      if (time % 30 === 0) updateNeighbors();

      particles.forEach((particle) => {
        if (!reducedMotion) updateParticle(particle);
        drawParticle(particle);

        particle.neighbors.forEach((neighbor) => {
          const distance = Math.hypot(particle.x - neighbor.x, particle.y - neighbor.y);
          if (distance < 50) {
            const alpha = 0.2 * (1 - distance / 50);
            context.strokeStyle = `rgba(23, 18, 15, ${alpha * 0.72})`;
            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(neighbor.x, neighbor.y);
            context.stroke();
          }
        });
      });

      context.strokeStyle = "rgba(23, 18, 15, 0.18)";
      context.lineWidth = 0.5;
      context.beginPath();
      context.moveTo(size / 2, 0);
      context.lineTo(size / 2, size);
      context.stroke();

      context.font = "12px monospace";
      context.fillStyle = "rgba(76, 64, 54, 0.76)";
      context.textAlign = "center";
      context.fillText(leftLabel, size * 0.25, size - 18);
      context.fillText(rightLabel, size * 0.75, size - 18);

      time += 1;
      if (!reducedMotion) {
        animationId = window.requestAnimationFrame(animate);
      }
    };

    animate();

    return () => window.cancelAnimationFrame(animationId);
  }, [leftLabel, rightLabel, size]);

  return (
    <div className={`entropy-panel ${className}`} style={{ width: size, height: size }}>
      <canvas ref={canvasRef} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
}
