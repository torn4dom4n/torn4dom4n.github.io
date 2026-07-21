import GridContainer from "@/components/ui/grid-container";

export default function Hero() {
  return (
    <div className="pt-16 sm:pt-24">
      {/* Large Screen Layout */}
      <div className="hidden sm:block">
        {/* Line 1: Hello */}
        <div className="relative px-2">
          <h1 className="text-5xl tracking-tighter text-balance text-foreground max-lg:font-medium lg:text-6xl xl:text-8xl">
            <span className="relative inline-block">
              Hello
              {/* Horizontal guidelines framing the top of 'o' and baseline of 'Hello' */}
              <span
                aria-hidden="true"
                className="absolute top-[38%] -right-4 -left-4 h-[2.5px] bg-foreground/45"
              />
              <span
                aria-hidden="true"
                className="absolute -right-4 bottom-[15%] -left-4 h-[2.5px] bg-foreground/45"
              />
            </span>
          </h1>
        </div>

        {/* Line 2: my name is Long Nhat */}
        <div className="relative mt-2 px-2 sm:mt-4">
          <p className="text-5xl tracking-tighter text-balance text-muted-foreground max-lg:font-medium lg:text-6xl xl:text-8xl">
            my name is{" "}
            <span className="group relative inline-block px-3 text-foreground">
              Long Nhat
              {/* Target Border Box Overlay - Snug Neutral Fit */}
              <span
                aria-hidden="true"
                className="absolute top-[2px] right-0 -bottom-[4px] left-0 border border-foreground bg-foreground/5 transition-colors duration-200 ease-out group-hover:bg-foreground/10"
              />
              {/* Control Handles (Corner Squares) - Snug Neutral Fit */}
              <span
                aria-hidden="true"
                className="absolute top-[-1px] left-[-3px] size-1.5 border border-foreground bg-background"
              />
              <span
                aria-hidden="true"
                className="absolute top-[-1px] right-[-3px] size-1.5 border border-foreground bg-background"
              />
              <span
                aria-hidden="true"
                className="absolute bottom-[-7px] left-[-3px] size-1.5 border border-foreground bg-background"
              />
              <span
                aria-hidden="true"
                className="absolute right-[-3px] bottom-[-7px] size-1.5 border border-foreground bg-background"
              />
            </span>
          </p>
        </div>

        {/* Line 3: Nguyen */}
        <div className="relative mt-2 px-2 sm:mt-4">
          <p className="text-5xl tracking-tighter text-balance text-muted-foreground italic max-lg:font-medium lg:text-6xl xl:text-8xl">
            Nguyen
          </p>
        </div>
      </div>

      {/* Small Screen Layout */}
      <div className="block sm:hidden">
        {/* Line 1: Hello */}
        <div className="relative px-2 max-sm:px-4">
          <h1 className="text-4xl tracking-tighter text-balance text-foreground max-lg:font-medium">
            <span className="relative inline-block">
              Hello
              {/* Horizontal guidelines framing the top of 'o' and baseline of 'Hello' */}
              <span
                aria-hidden="true"
                className="absolute top-[38%] -right-4 -left-4 h-[2px] bg-foreground/45"
              />
              <span
                aria-hidden="true"
                className="absolute -right-4 bottom-[15%] -left-4 h-[2px] bg-foreground/45"
              />
            </span>
          </h1>
        </div>

        {/* Line 2: my name is */}
        <div className="relative mt-1 px-2 max-sm:px-4">
          <p className="text-4xl tracking-tighter text-balance text-muted-foreground max-lg:font-medium">
            my name is
          </p>
        </div>

        {/* Line 3: Long Nhat Nguyen with Snug Fitting Selection Box */}
        <div className="relative mt-1 px-2 max-sm:px-4">
          <p className="text-4xl tracking-tighter text-balance text-muted-foreground max-lg:font-medium">
            <span className="group relative inline-block px-2.5 whitespace-nowrap text-foreground">
              Long Nhat <span className="italic">Nguyen</span>
              {/* Target Border Box Overlay - Snug Neutral Fit */}
              <span
                aria-hidden="true"
                className="absolute top-[1px] right-0 -bottom-[3px] left-0 border border-foreground bg-foreground/5 transition-colors duration-200 ease-out group-hover:bg-foreground/10"
              />
              {/* Control Handles (Corner Squares) - Snug Neutral Fit */}
              <span
                aria-hidden="true"
                className="absolute top-[-1px] left-[-2px] size-1 border border-foreground bg-background"
              />
              <span
                aria-hidden="true"
                className="absolute top-[-1px] right-[-2px] size-1 border border-foreground bg-background"
              />
              <span
                aria-hidden="true"
                className="absolute bottom-[-5px] left-[-2px] size-1 border border-foreground bg-background"
              />
              <span
                aria-hidden="true"
                className="absolute right-[-2px] bottom-[-5px] size-1 border border-foreground bg-background"
              />
            </span>
          </p>
        </div>
      </div>

      <div className="h-6 sm:h-10" />

      {/* Bio section keeps its GridContainer */}
      <GridContainer>
        <p className="max-w-(--breakpoint-md) px-2 text-lg/7 text-muted-foreground max-sm:px-4">
          Creator. Explorer. Optimist. Bringing together music, photography, tech, and nature to
          share a little extra positivity with the world.
        </p>
      </GridContainer>
    </div>
  );
}
