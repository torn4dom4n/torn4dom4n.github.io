import GridContainer from "@/components/ui/grid-container";

export default function Hero() {
  return (
    <div className="pt-16 sm:pt-24">
      {/* hello */}
      <div className="relative px-2 max-sm:px-4">
        <h1 className="text-4xl tracking-tighter text-balance text-foreground max-lg:font-medium sm:text-5xl lg:text-6xl xl:text-8xl">
          <span className="relative inline-block">
            hello
            {/* Horizontal guidelines running across the text (like 'Interfaces' in horizontal) */}
            <span
              aria-hidden="true"
              className="absolute top-[43%] -right-4 -left-4 h-[1.5px] bg-cyan-400/40 dark:bg-cyan-500/30"
            />
            <span
              aria-hidden="true"
              className="absolute -right-4 bottom-[17.5%] -left-4 h-[1.5px] bg-cyan-400/40 dark:bg-cyan-500/30"
            />
          </span>
        </h1>
      </div>

      {/* Main heading: my name is Long Nhat Nguyen */}
      <div className="relative mt-2 px-2 max-sm:px-4 sm:mt-4">
        <p className="text-4xl tracking-tighter text-balance text-muted-foreground max-lg:font-medium sm:text-5xl lg:text-6xl xl:text-8xl">
          my name is Long{" "}
          <span className="group relative mx-1 inline-block text-foreground sm:mx-2">
            Nhat
            {/* Target Border Box Overlay */}
            <span
              aria-hidden="true"
              className="absolute -inset-x-1.5 inset-y-0 top-[2px] -bottom-2 border border-blue-500 bg-blue-500/5 transition-colors duration-200 ease-out group-hover:bg-blue-500/10 sm:-top-1 sm:-bottom-3"
            />
            {/* Control Handles (Corner Squares) */}
            <span
              aria-hidden="true"
              className="absolute top-[2px] -left-2 size-1 border border-blue-500 bg-background sm:-top-1 sm:-left-2 sm:size-1.5"
            />
            <span
              aria-hidden="true"
              className="absolute top-[2px] -right-2 size-1 border border-blue-500 bg-background sm:-top-1 sm:-right-2 sm:size-1.5"
            />
            <span
              aria-hidden="true"
              className="absolute -bottom-2 -left-2 size-1 border border-blue-500 bg-background sm:-bottom-3 sm:-left-2 sm:size-1.5"
            />
            <span
              aria-hidden="true"
              className="absolute -right-2 -bottom-2 size-1 border border-blue-500 bg-background sm:-right-2 sm:-bottom-3 sm:size-1.5"
            />
          </span>{" "}
          Nguyen
        </p>
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
