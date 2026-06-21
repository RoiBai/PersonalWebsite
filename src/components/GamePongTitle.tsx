import { useEffect, useRef } from "react";

type Pixel = {
  x: number;
  y: number;
  size: number;
  hit: boolean;
};

type Ball = {
  x: number;
  y: number;
  dx: number;
  dy: number;
  radius: number;
};

type Paddle = {
  x: number;
  y: number;
  width: number;
  height: number;
  target: number;
  isVertical: boolean;
};

type GamePongTitleProps = {
  className?: string;
};

const COLOR = "#052659";
const HIT_COLOR = "#7DA0CA";
const BALL_COLOR = "#5483B3";
const PADDLE_COLOR = "#021024";
const LETTER_SPACING = 1;
const WORD_SPACING = 3;

const PIXEL_MAP: Record<string, number[][]> = {
  A: [
    [0, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
  ],
  C: [
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 1, 1, 1],
  ],
  E: [
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 1, 1, 1],
  ],
  G: [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0],
    [1, 0, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1],
  ],
  I: [
    [1, 1, 1],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [1, 1, 1],
  ],
  L: [
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 1, 1, 1],
  ],
  M: [
    [1, 0, 0, 0, 1],
    [1, 1, 0, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
  ],
  R: [
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
    [1, 0, 1, 0],
    [1, 0, 0, 1],
  ],
  S: [
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 1],
    [1, 1, 1, 1],
  ],
  T: [
    [1, 1, 1, 1, 1],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
  ],
  V: [
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0],
  ],
  W: [
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 1, 0, 1, 1],
    [1, 0, 0, 0, 1],
  ],
  Y: [
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
  ],
};

const words = ["GAMES", "ALWAYS ATTRACTIVE"];

export default function GamePongTitle({ className = "" }: GamePongTitleProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pixelsRef = useRef<Pixel[]>([]);
  const ballRef = useRef<Ball>({ x: 0, y: 0, dx: 0, dy: 0, radius: 0 });
  const paddlesRef = useRef<Paddle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const context = canvas.getContext("2d");
    if (!context) return undefined;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    let animationId = 0;
    let width = 0;
    let height = 0;

    const calculateWordWidth = (word: string, pixelSize: number) =>
      word.split("").reduce((lineWidth, letter) => {
        if (letter === " ") return lineWidth + WORD_SPACING * pixelSize;

        const map = PIXEL_MAP[letter];
        if (!map) return lineWidth;

        return lineWidth + (map[0].length + LETTER_SPACING) * pixelSize;
      }, 0) -
      LETTER_SPACING * pixelSize;

    const buildPixels = () => {
      pixelsRef.current = [];

      const baseLarge = 8;
      const baseSmall = baseLarge * 0.64;
      const largeWidth = calculateWordWidth(words[0], baseLarge);
      const smallWidth = calculateWordWidth(words[1], baseSmall);
      const scaleFactor = Math.min(
        (width * 0.9) / Math.max(largeWidth, smallWidth),
        (height * 0.58) / (5 * baseLarge + 2.1 * baseLarge + 5 * baseSmall)
      );
      const largePixel = baseLarge * scaleFactor;
      const smallPixel = baseSmall * scaleFactor;
      const totalHeight = 5 * largePixel + 2.1 * largePixel + 5 * smallPixel;
      let startY = (height - totalHeight) / 2;

      words.forEach((word, wordIndex) => {
        const pixelSize = wordIndex === 0 ? largePixel : smallPixel;
        const lineWidth = calculateWordWidth(word, pixelSize);
        let startX = (width - lineWidth) / 2;

        word.split("").forEach((letter) => {
          if (letter === " ") {
            startX += WORD_SPACING * pixelSize;
            return;
          }

          const map = PIXEL_MAP[letter];
          if (!map) return;

          map.forEach((row, rowIndex) => {
            row.forEach((active, colIndex) => {
              if (!active) return;
              pixelsRef.current.push({
                x: startX + colIndex * pixelSize,
                y: startY + rowIndex * pixelSize,
                size: pixelSize * 0.92,
                hit: false,
              });
            });
          });

          startX += (map[0].length + LETTER_SPACING) * pixelSize;
        });

        startY += wordIndex === 0 ? 5 * largePixel + 2.1 * largePixel : 0;
      });

      const speed = Math.max(2.1, Math.min(4.4, width / 250));
      const radius = Math.max(4.5, largePixel * 0.56);
      ballRef.current = {
        x: width * 0.88,
        y: height * 0.16,
        dx: -speed,
        dy: speed * 0.82,
        radius,
      };

      const paddleWidth = Math.max(5, largePixel * 0.7);
      const paddleLength = Math.max(42, largePixel * 7.8);
      paddlesRef.current = [
        {
          x: 0,
          y: height / 2 - paddleLength / 2,
          width: paddleWidth,
          height: paddleLength,
          target: height / 2,
          isVertical: true,
        },
        {
          x: width - paddleWidth,
          y: height / 2 - paddleLength / 2,
          width: paddleWidth,
          height: paddleLength,
          target: height / 2,
          isVertical: true,
        },
        {
          x: width / 2 - paddleLength / 2,
          y: 0,
          width: paddleLength,
          height: paddleWidth,
          target: width / 2,
          isVertical: false,
        },
        {
          x: width / 2 - paddleLength / 2,
          y: height - paddleWidth,
          width: paddleLength,
          height: paddleWidth,
          target: width / 2,
          isVertical: false,
        },
      ];
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      width = Math.max(320, rect.width);
      height = Math.max(160, rect.height);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildPixels();
    };

    const update = () => {
      const ball = ballRef.current;
      ball.x += ball.dx;
      ball.y += ball.dy;

      if (ball.y - ball.radius < 0 || ball.y + ball.radius > height) {
        ball.dy = -ball.dy;
      }
      if (ball.x - ball.radius < 0 || ball.x + ball.radius > width) {
        ball.dx = -ball.dx;
      }

      paddlesRef.current.forEach((paddle) => {
        if (paddle.isVertical) {
          paddle.target = Math.max(
            paddle.height / 2,
            Math.min(height - paddle.height / 2, ball.y)
          );
          paddle.y += (paddle.target - paddle.height / 2 - paddle.y) * 0.09;

          if (
            ball.x - ball.radius < paddle.x + paddle.width &&
            ball.x + ball.radius > paddle.x &&
            ball.y > paddle.y &&
            ball.y < paddle.y + paddle.height
          ) {
            ball.dx = -ball.dx;
          }
        } else {
          paddle.target = Math.max(
            paddle.width / 2,
            Math.min(width - paddle.width / 2, ball.x)
          );
          paddle.x += (paddle.target - paddle.width / 2 - paddle.x) * 0.09;

          if (
            ball.y - ball.radius < paddle.y + paddle.height &&
            ball.y + ball.radius > paddle.y &&
            ball.x > paddle.x &&
            ball.x < paddle.x + paddle.width
          ) {
            ball.dy = -ball.dy;
          }
        }
      });

      pixelsRef.current.forEach((pixel) => {
        if (
          !pixel.hit &&
          ball.x + ball.radius > pixel.x &&
          ball.x - ball.radius < pixel.x + pixel.size &&
          ball.y + ball.radius > pixel.y &&
          ball.y - ball.radius < pixel.y + pixel.size
        ) {
          pixel.hit = true;
          const centerX = pixel.x + pixel.size / 2;
          const centerY = pixel.y + pixel.size / 2;
          if (Math.abs(ball.x - centerX) > Math.abs(ball.y - centerY)) {
            ball.dx = -ball.dx;
          } else {
            ball.dy = -ball.dy;
          }
        }
      });
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);

      context.fillStyle = "rgba(246, 251, 255, 0.72)";
      context.fillRect(0, 0, width, height);

      pixelsRef.current.forEach((pixel) => {
        context.fillStyle = pixel.hit ? HIT_COLOR : COLOR;
        context.fillRect(pixel.x, pixel.y, pixel.size, pixel.size);
      });

      context.fillStyle = BALL_COLOR;
      context.beginPath();
      context.arc(
        ballRef.current.x,
        ballRef.current.y,
        ballRef.current.radius,
        0,
        Math.PI * 2
      );
      context.fill();

      context.fillStyle = PADDLE_COLOR;
      paddlesRef.current.forEach((paddle) => {
        context.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
      });
    };

    const loop = () => {
      if (!reducedMotion) update();
      draw();
      if (!reducedMotion) animationId = window.requestAnimationFrame(loop);
    };

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    resize();
    loop();

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`game-pong-title ${className}`}
      aria-label="Games always attractive: Pong game animation with pixel text"
    />
  );
}
