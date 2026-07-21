import GridContainer from "@/components/ui/grid-container";

export default function Hero() {
  return (
    <div className="pt-16 sm:pt-24">
      {/* Large Screen Layout */}
      <div className="hidden sm:block">
        {/* Line 1: hello */}
        <div className="relative px-2">
          <h1 className="text-5xl tracking-tighter text-balance text-foreground max-lg:font-medium lg:text-6xl xl:text-8xl">
            <span className="relative inline-block">
              hello
              {/* Horizontal guidelines framing the top of 'o' and baseline of 'hello' */}
              <span
                aria-hidden="true"
                className="absolute top-[39%] -right-4 -left-4 h-[1px] bg-cyan-400/40 dark:bg-cyan-500/30"
              />
              <span
                aria-hidden="true"
                className="absolute -right-4 bottom-[15%] -left-4 h-[1px] bg-cyan-400/40 dark:bg-cyan-500/30"
              />
            </span>
          </h1>
        </div>

        {/* Line 2: my name is Long Nhat */}
        <div className="relative mt-2 px-2 sm:mt-4">
          <p className="text-5xl tracking-tighter text-balance text-muted-foreground max-lg:font-medium lg:text-6xl xl:text-8xl">
            my name is{" "}
            <span className="group relative mx-1 inline-block text-foreground sm:mx-2">
              Long Nhat
              {/* Target Border Box Overlay - Snug Fit */}
              <span
                aria-hidden="true"
                className="absolute -inset-x-1 inset-y-0 top-1 -bottom-2 border border-blue-500 bg-blue-500/5 transition-colors duration-200 ease-out group-hover:bg-blue-500/10"
              />
              {/* Control Handles (Corner Squares) - Snug Fit */}
              <span
                aria-hidden="true"
                className="absolute top-1 -left-[5px] size-1.5 border border-blue-500 bg-background"
              />
              <span
                aria-hidden="true"
                className="absolute top-1 -right-[5px] size-1.5 border border-blue-500 bg-background"
              />
              <span
                aria-hidden="true"
                className="absolute -bottom-2 -left-[5px] size-1.5 border border-blue-500 bg-background"
              />
              <span
                aria-hidden="true"
                className="absolute -right-[5px] -bottom-2 size-1.5 border border-blue-500 bg-background"
              />
            </span>
          </p>
        </div>

        {/* Line 3: Nguyen */}
        <div className="relative mt-2 px-2 sm:mt-4">
          <p className="text-5xl tracking-tighter text-balance text-muted-foreground max-lg:font-medium lg:text-6xl xl:text-8xl">
            Nguyen
          </p>
        </div>
      </div>

      {/* Small Screen Layout */}
      <div className="block sm:hidden">
        {/* Line 1: hello */}
        <div className="relative px-2 max-sm:px-4">
          <h1 className="text-4xl tracking-tighter text-balance text-foreground max-lg:font-medium">
            <span className="relative inline-block">
              hello
              {/* Horizontal guidelines framing the top of 'o' and baseline of 'hello' */}
              <span
                aria-hidden="true"
                className="absolute top-[39%] -right-4 -left-4 h-[1px] bg-cyan-400/40 dark:bg-cyan-500/30"
              />
              <span
                aria-hidden="true"
                className="absolute -right-4 bottom-[15%] -left-4 h-[1px] bg-cyan-400/40 dark:bg-cyan-500/30"
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
            <span className="group relative inline-block whitespace-nowrap text-foreground">
              Long Nhat Nguyen
              {/* Target Border Box Overlay - Snug Fit */}
              <span
                aria-hidden="true"
                className="absolute -inset-x-1 inset-y-0 top-0.5 -bottom-1 border border-blue-500 bg-blue-500/5 transition-colors duration-200 ease-out group-hover:bg-blue-500/10"
              />
              {/* Control Handles (Corner Squares) - Snug Fit */}
              <span
                aria-hidden="true"
                className="absolute top-0.5 -left-[4px] size-1 border border-blue-500 bg-background"
              />
              <span
                aria-hidden="true"
                className="absolute top-0.5 -right-[4px] size-1 border border-blue-500 bg-background"
              />
              <span
                aria-hidden="true"
                className="absolute -bottom-1 -left-[4px] size-1 border border-blue-500 bg-background"
              />
              <span
                aria-hidden="true"
                className="absolute -right-[4px] -bottom-1 size-1 border border-blue-500 bg-background"
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
