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
            <span className="group relative inline-block pr-1.5 text-foreground transition-colors duration-300 ease-out hover:text-background">
              <span className="relative z-10">Long Nhat</span>
              <span
                aria-hidden="true"
                className="selection-stripes pointer-events-none absolute inset-0 border border-foreground/15"
              >
                <span className="selection-fill" />
                <span className="selection-cap selection-cap-tl" />
                <span className="selection-cap selection-cap-tr" />
                <span className="selection-cap selection-cap-bl" />
                <span className="selection-cap selection-cap-br" />
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
            <span className="group relative inline-block pr-1.5 whitespace-nowrap text-foreground transition-colors duration-300 ease-out hover:text-background">
              <span className="relative z-10">
                Long Nhat <span className="italic">Nguyen</span>
              </span>
              <span
                aria-hidden="true"
                className="selection-stripes pointer-events-none absolute inset-0 border border-foreground/15"
              >
                <span className="selection-fill" />
                <span className="selection-cap selection-cap-tl" />
                <span className="selection-cap selection-cap-tr" />
                <span className="selection-cap selection-cap-bl" />
                <span className="selection-cap selection-cap-br" />
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
