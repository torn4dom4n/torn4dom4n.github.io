import GridContainer from "@/components/ui/grid-container";
import SectionHeader from "@/components/ui/section-header";

export default function Hero() {
  return (
    <div className="pt-16 sm:pt-24">
      <GridContainer className="2xl:before:hidden 2xl:after:hidden">
        <SectionHeader className="text-foreground/80">Hi, my name is</SectionHeader>
      </GridContainer>

      <GridContainer>
        <h1 className="px-2 pt-14 pb-12 text-4xl tracking-tighter text-balance max-lg:font-medium max-sm:px-4 sm:pt-16 sm:pb-14 sm:text-5xl lg:text-6xl xl:text-8xl">
          <span className="relative inline-block">
            Long Nhat Nguyen
            {/* Guidelines */}
            <span
              aria-hidden="true"
              className="absolute top-[43%] -right-4 -left-4 h-[1.5px] bg-cyan-400/40 dark:bg-cyan-500/30"
            />
            <span
              aria-hidden="true"
              className="absolute -right-4 bottom-[17.5%] -left-4 h-[1.5px] bg-cyan-400/40 dark:bg-cyan-500/30"
            />
            {/* Color Badge (Top Left) */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-12 left-0 hidden sm:block"
            >
              <span className="flex items-center gap-1.5 rounded-md border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] font-medium tracking-tight shadow-xs">
                <span className="size-2.5 rounded-xs border border-border bg-foreground" />
                <span className="text-muted-foreground dark:hidden">oklch(0.145 0 0)</span>
                <span className="hidden text-muted-foreground dark:inline">oklch(0.985 0 0)</span>
              </span>
            </span>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute top-[-26px] bottom-[57%] left-4 hidden flex-col items-center sm:flex"
            >
              <span className="w-px flex-1 border-l border-dashed border-border" />
              <span className="block shrink-0 rounded-full bg-border p-0.5">
                <span className="block size-1.5 shrink-0 rounded-full border border-border bg-background" />
              </span>
            </span>
            {/* x-height Badge (Top Right) */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-12 right-0 hidden md:block"
            >
              <span className="block rounded-md border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] font-medium tracking-tight text-muted-foreground shadow-xs">
                x-height
              </span>
            </span>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute top-[-26px] right-4 bottom-[57%] hidden flex-col items-center md:flex"
            >
              <span className="w-px flex-1 border-l border-dashed border-border" />
              <span className="block shrink-0 rounded-full bg-border p-0.5">
                <span className="block size-1.5 shrink-0 rounded-full border border-border bg-background" />
              </span>
            </span>
          </span>
        </h1>
      </GridContainer>

      <div className="h-6 sm:h-10" />

      <GridContainer>
        <p className="max-w-(--breakpoint-md) px-2 text-lg/7 text-muted-foreground max-sm:px-4">
          Creator. Explorer. Optimist. Bringing together music, photography, tech, and nature to
          share a little extra positivity with the world.
        </p>
      </GridContainer>
    </div>
  );
}
