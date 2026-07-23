import GridContainer from "@/components/ui/grid-container";

// Hero block representing the introductory landing section
export default function Hero() {
  return (
    <div className="pt-16 sm:pt-24">
      {/* Hero title block for desktop views */}
      <div className="hidden sm:block">
        {/* Hello greeting block */}
        <div className="relative px-2">
          <h1 className="text-5xl tracking-tighter text-balance text-foreground max-lg:font-medium lg:text-6xl xl:text-8xl">
            <span className="relative inline-block">
              Hello
              <span
                aria-hidden="true"
                className="absolute top-[30%] -right-4 -left-4 h-[2.5px] bg-foreground/45"
              />
              <span
                aria-hidden="true"
                className="absolute -right-4 bottom-[10%] -left-4 h-[2.5px] bg-foreground/45"
              />
            </span>
          </h1>
        </div>

        {/* Introduction line containing name selection overlay */}
        <div className="relative mt-2 px-2 sm:mt-4">
          <p className="text-5xl tracking-tighter text-balance text-muted-foreground max-lg:font-medium lg:text-6xl xl:text-8xl">
            my name is{" "}
            <span className="group relative inline-block pr-1.5 text-foreground transition-colors duration-300 ease-out selection:bg-foreground selection:text-background hover:text-background active:text-background">
              <span className="relative z-10">Long Nhat</span>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 border border-foreground/15 bg-[repeating-linear-gradient(119deg,color-mix(in_srgb,var(--foreground)_12%,transparent)_0px,color-mix(in_srgb,var(--foreground)_12%,transparent)_1px,transparent_1px,transparent_6px)] transition-opacity duration-150"
              >
                <span className="pointer-events-none absolute inset-0 z-1 bg-foreground transition-[clip-path] duration-400 ease-[cubic-bezier(0.25,0,0,1)] [clip-path:polygon(-1%_0%,-1%_0%,-100%_100%,-1%_100%)] group-hover:[clip-path:polygon(0%_0%,200%_0%,100%_100%,0%_100%)] group-active:[clip-path:polygon(0%_0%,200%_0%,100%_100%,0%_100%)]" />
                <span className="pointer-events-none absolute -top-[1px] -left-[1px] z-20 h-2 w-2 border-0 border-t-[1.5px] border-l-[1.5px] border-foreground transition-[top,left,right,bottom,border-color] duration-250 ease-[cubic-bezier(0.25,0,0,1)] group-hover:-top-[4px] group-hover:-left-[4px] group-active:top-[3px] group-active:left-[3px] active:duration-120" />
                <span className="pointer-events-none absolute -top-[1px] -right-[1px] z-20 h-2 w-2 border-0 border-t-[1.5px] border-r-[1.5px] border-foreground transition-[top,left,right,bottom,border-color] duration-250 ease-[cubic-bezier(0.25,0,0,1)] group-hover:-top-[4px] group-hover:-right-[4px] group-active:top-[3px] group-active:right-[3px] active:duration-120" />
                <span className="pointer-events-none absolute -bottom-[1px] -left-[1px] z-20 h-2 w-2 border-0 border-b-[1.5px] border-l-[1.5px] border-foreground transition-[top,left,right,bottom,border-color] duration-250 ease-[cubic-bezier(0.25,0,0,1)] group-hover:-bottom-[4px] group-hover:-left-[4px] group-active:bottom-[3px] group-active:left-[3px] active:duration-120" />
                <span className="pointer-events-none absolute -right-[1px] -bottom-[1px] z-20 h-2 w-2 border-0 border-r-[1.5px] border-b-[1.5px] border-foreground transition-[top,left,right,bottom,border-color] duration-250 ease-[cubic-bezier(0.25,0,0,1)] group-hover:-right-[4px] group-hover:-bottom-[4px] group-active:right-[3px] group-active:bottom-[3px] active:duration-120" />
              </span>
            </span>
          </p>
        </div>

        {/* Surname line block */}
        <div className="relative mt-2 px-2 sm:mt-4">
          <p className="text-5xl tracking-tighter text-balance text-foreground italic max-lg:font-medium lg:text-6xl xl:text-8xl">
            Nguyen
          </p>
        </div>
      </div>

      {/* Hero title block for mobile views */}
      <div className="block sm:hidden">
        {/* Hello greeting block (mobile) */}
        <div className="relative px-2 max-sm:px-4">
          <h1 className="text-4xl tracking-tighter text-balance text-foreground max-lg:font-medium">
            <span className="relative inline-block">
              Hello
              <span
                aria-hidden="true"
                className="absolute top-[30%] -right-4 -left-4 h-[2px] bg-foreground/45"
              />
              <span
                aria-hidden="true"
                className="absolute -right-4 bottom-[10%] -left-4 h-[2px] bg-foreground/45"
              />
            </span>
          </h1>
        </div>

        {/* Name intro line (mobile) */}
        <div className="relative mt-1 px-2 max-sm:px-4">
          <p className="text-4xl tracking-tighter text-balance text-muted-foreground max-lg:font-medium">
            my name is
          </p>
        </div>

        {/* Name select layout (mobile) */}
        <div className="relative mt-1 px-2 max-sm:px-4">
          <p className="text-4xl tracking-tighter text-balance text-muted-foreground max-lg:font-medium">
            <span className="group relative inline-block pr-1.5 whitespace-nowrap text-foreground transition-colors duration-300 ease-out selection:bg-foreground selection:text-background hover:text-background active:text-background">
              <span className="relative z-10">
                Long Nhat <span className="italic">Nguyen</span>
              </span>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 border border-foreground/15 bg-[repeating-linear-gradient(119deg,color-mix(in_srgb,var(--foreground)_12%,transparent)_0px,color-mix(in_srgb,var(--foreground)_12%,transparent)_1px,transparent_1px,transparent_6px)] transition-opacity duration-150"
              >
                <span className="pointer-events-none absolute inset-0 z-1 bg-foreground transition-[clip-path] duration-400 ease-[cubic-bezier(0.25,0,0,1)] [clip-path:polygon(-1%_0%,-1%_0%,-100%_100%,-1%_100%)] group-hover:[clip-path:polygon(0%_0%,200%_0%,100%_100%,0%_100%)] group-active:[clip-path:polygon(0%_0%,200%_0%,100%_100%,0%_100%)]" />
                <span className="pointer-events-none absolute -top-[1px] -left-[1px] z-20 h-2 w-2 border-0 border-t-[1.5px] border-l-[1.5px] border-foreground transition-[top,left,right,bottom,border-color] duration-250 ease-[cubic-bezier(0.25,0,0,1)] group-hover:-top-[4px] group-hover:-left-[4px] group-active:top-[3px] group-active:left-[3px] active:duration-120" />
                <span className="pointer-events-none absolute -top-[1px] -right-[1px] z-20 h-2 w-2 border-0 border-t-[1.5px] border-r-[1.5px] border-foreground transition-[top,left,right,bottom,border-color] duration-250 ease-[cubic-bezier(0.25,0,0,1)] group-hover:-top-[4px] group-hover:-right-[4px] group-active:top-[3px] group-active:right-[3px] active:duration-120" />
                <span className="pointer-events-none absolute -bottom-[1px] -left-[1px] z-20 h-2 w-2 border-0 border-b-[1.5px] border-l-[1.5px] border-foreground transition-[top,left,right,bottom,border-color] duration-250 ease-[cubic-bezier(0.25,0,0,1)] group-hover:-bottom-[4px] group-hover:-left-[4px] group-active:bottom-[3px] group-active:left-[3px] active:duration-120" />
                <span className="pointer-events-none absolute -right-[1px] -bottom-[1px] z-20 h-2 w-2 border-0 border-r-[1.5px] border-b-[1.5px] border-foreground transition-[top,left,right,bottom,border-color] duration-250 ease-[cubic-bezier(0.25,0,0,1)] group-hover:-right-[4px] group-hover:-bottom-[4px] group-active:right-[3px] group-active:bottom-[3px] active:duration-120" />
              </span>
            </span>
          </p>
        </div>
      </div>

      <div className="h-6 sm:h-10" />

      {/* Hero short bio tagline block */}
      <GridContainer>
        <p className="max-w-(--breakpoint-md) px-2 text-lg/7 text-muted-foreground max-sm:px-4">
          Creator. Explorer. Optimist. Bringing together music, photography, tech, and nature to
          share a little extra positivity with the world.
        </p>
      </GridContainer>
    </div>
  );
}
