"use client";

import { useEffect, useRef, useCallback } from "react";

interface Dot {
  x: number;
  y: number;
  baseOpacity: number;
  currentOpacity: number;
  currentScale: number;
}

const SPACING = 28;
const DOT_RADIUS = 1.2;
const INFLUENCE_RADIUS = 120;
const MAX_SCALE = 3.5;
const MAX_OPACITY_BOOST = 0.5;
const BASE_OPACITY = 0.15;
const LERP_SPEED = 0.12;

export function DotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const mouseRef = useRef<{ x: number; y: number } | null>(null);
  const rafRef = useRef<number>(0);
  const sizeRef = useRef({ width: 0, height: 0 });
  const themeColorRef = useRef<string>("rgba(0, 0, 0, 0.15)");

  const updateThemeColor = useCallback(() => {
    const isDark = document.documentElement.classList.contains("dark");
    themeColorRef.current = isDark ? "255, 255, 255" : "0, 0, 0";
  }, []);

  const buildGrid = useCallback((width: number, height: number) => {
    const dots: Dot[] = [];
    const cols = Math.ceil(width / SPACING) + 1;
    const rows = Math.ceil(height / SPACING) + 1;
    const offsetX = (width % SPACING) / 2;
    const offsetY = (height % SPACING) / 2;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        dots.push({
          x: offsetX + col * SPACING,
          y: offsetY + row * SPACING,
          baseOpacity: BASE_OPACITY,
          currentOpacity: BASE_OPACITY,
          currentScale: 1,
        });
      }
    }
    return dots;
  }, []);

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { width, height } = sizeRef.current;
    ctx.clearRect(0, 0, width, height);

    const mouse = mouseRef.current;
    const color = themeColorRef.current;

    for (const dot of dotsRef.current) {
      let targetOpacity = dot.baseOpacity;
      let targetScale = 1;

      if (mouse) {
        const dx = dot.x - mouse.x;
        const dy = dot.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < INFLUENCE_RADIUS) {
          const t = 1 - dist / INFLUENCE_RADIUS;
          const eased = t * t * (3 - 2 * t); // smoothstep
          targetOpacity = dot.baseOpacity + MAX_OPACITY_BOOST * eased;
          targetScale = 1 + (MAX_SCALE - 1) * eased;
        }
      }

      dot.currentOpacity = lerp(dot.currentOpacity, targetOpacity, LERP_SPEED);
      dot.currentScale = lerp(dot.currentScale, targetScale, LERP_SPEED);

      const r = DOT_RADIUS * dot.currentScale;
      ctx.beginPath();
      ctx.arc(dot.x, dot.y, r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${color}, ${dot.currentOpacity})`;
      ctx.fill();
    }

    rafRef.current = requestAnimationFrame(draw);
  }, []);

  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const { innerWidth: w, innerHeight: h } = window;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    const ctx = canvas.getContext("2d");
    if (ctx) ctx.scale(dpr, dpr);
    sizeRef.current = { width: w, height: h };
    dotsRef.current = buildGrid(w, h);
  }, [buildGrid]);

  useEffect(() => {
    handleResize();
    updateThemeColor();
    draw();

    const onResize = () => {
      cancelAnimationFrame(rafRef.current);
      handleResize();
      draw();
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseLeave = () => {
      mouseRef.current = null;
    };

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.attributeName === "class") {
          updateThemeColor();
        }
      }
    });

    observer.observe(document.documentElement, { attributes: true });

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      cancelAnimationFrame(rafRef.current);
      observer.disconnect();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [draw, handleResize, updateThemeColor]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full opacity-40 transition-opacity duration-1000"
      aria-hidden="true"
    />
  );
}
