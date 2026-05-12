"use client";

import { Link } from "@tanstack/react-router";
import { useRef, useCallback } from "react";

import { cn } from "@/lib/utils";

interface SpotlightButtonProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export function SpotlightButton({ to, children, className }: SpotlightButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = buttonRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--x", `${x}%`);
    el.style.setProperty("--y", `${y}%`);
  }, []);

  const handleMouseLeave = useCallback(() => {
    const el = buttonRef.current;
    if (!el) return;
    el.style.setProperty("--x", "50%");
    el.style.setProperty("--y", "50%");
  }, []);

  return (
    <Link
      ref={buttonRef}
      to={to}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative mt-4 inline-flex items-center justify-center overflow-hidden rounded-md border border-border bg-foreground/[0.03] px-6 py-2 font-mono text-xs font-medium text-foreground/60 transition-colors duration-200 hover:text-foreground",
        className,
      )}
      style={
        {
          "--x": "50%",
          "--y": "50%",
        } as React.CSSProperties
      }
    >
      {/* Spotlight layer */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(100px circle at var(--x) var(--y), color-mix(in oklch, var(--foreground), transparent 90%), transparent 80%)",
        }}
      />

      {/* Border glow layer */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(60px circle at var(--x) var(--y), color-mix(in oklch, var(--foreground), transparent 70%), transparent 80%)",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          padding: "1px",
        }}
      />

      <span className="relative z-10">{children}</span>
    </Link>
  );
}
