import { Link } from "@tanstack/react-router";

import { DotGrid } from "@/components/ui/dot-grid";

export default function NotFound() {
  return (
    <main className="relative flex min-h-dvh w-full flex-col items-center justify-center overflow-hidden bg-background md:col-start-2">
      <DotGrid />

      <div className="relative z-10 flex flex-col items-center gap-6 text-center select-none">
        <p className="font-mono text-[clamp(6rem,20vw,14rem)] leading-none font-bold tracking-tighter text-foreground/5 md:text-foreground/[0.03]">
          404
        </p>

        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-foreground/30" />
          <span className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
            Page not found
          </span>
        </div>

        <p className="max-w-[280px] font-sans text-sm leading-relaxed text-muted-foreground/80 sm:max-w-xs">
          This route does not exist. You may have mistyped the address or the page has moved.
        </p>

        <Link
          to="/"
          className="mt-4 font-mono text-xs text-foreground/60 underline decoration-foreground/20 underline-offset-4 transition-colors duration-200 hover:text-foreground hover:decoration-foreground"
        >
          Return home
        </Link>
      </div>
    </main>
  );
}
