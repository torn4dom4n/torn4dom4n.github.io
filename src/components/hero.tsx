import GridContainer from "@/components/ui/grid-container";

export default function Hero() {
  return (
    <GridContainer className="pt-16 sm:pt-24">
      <div className="hidden sm:block">
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

        <div className="relative mt-2 px-2 sm:mt-4">
          <p className="text-5xl tracking-tighter text-balance text-muted-foreground max-lg:font-medium lg:text-6xl xl:text-8xl">
            my name is{" "}
            <span className="group relative inline-block pr-1.5 text-foreground">
              Long Nhat
              <span
                aria-hidden="true"
                className="pointer-events-none absolute top-[2px] right-0 -bottom-[4px] left-0 border border-foreground bg-foreground/5 transition-colors duration-200 ease-out group-hover:bg-foreground/10"
              >
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 size-1.5 -translate-x-1/2 -translate-y-1/2 border border-foreground bg-background"
                />
                <span
                  aria-hidden="true"
                  className="absolute top-0 right-0 size-1.5 translate-x-1/2 -translate-y-1/2 border border-foreground bg-background"
                />
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 size-1.5 -translate-x-1/2 translate-y-1/2 border border-foreground bg-background"
                />
                <span
                  aria-hidden="true"
                  className="absolute right-0 bottom-0 size-1.5 translate-x-1/2 translate-y-1/2 border border-foreground bg-background"
                />
              </span>
            </span>
          </p>
        </div>

        <div className="relative mt-2 px-2 sm:mt-4">
          <p className="text-5xl tracking-tighter text-balance text-foreground italic max-lg:font-medium lg:text-6xl xl:text-8xl">
            Nguyen
          </p>
        </div>
      </div>

      <div className="block sm:hidden">
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

        <div className="relative mt-1 px-2 max-sm:px-4">
          <p className="text-4xl tracking-tighter text-balance text-muted-foreground max-lg:font-medium">
            my name is
          </p>
        </div>

        <div className="relative mt-1 px-2 max-sm:px-4">
          <p className="text-4xl tracking-tighter text-balance text-muted-foreground max-lg:font-medium">
            <span className="group relative inline-block pr-1.5 whitespace-nowrap text-foreground">
              Long Nhat <span className="italic">Nguyen</span>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute top-[1px] right-0 -bottom-[3px] left-0 border border-foreground bg-foreground/5 transition-colors duration-200 ease-out group-hover:bg-foreground/10"
              >
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 size-1 -translate-x-1/2 -translate-y-1/2 border border-foreground bg-background"
                />
                <span
                  aria-hidden="true"
                  className="absolute top-0 right-0 size-1 translate-x-1/2 -translate-y-1/2 border border-foreground bg-background"
                />
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 size-1 -translate-x-1/2 translate-y-1/2 border border-foreground bg-background"
                />
                <span
                  aria-hidden="true"
                  className="absolute right-0 bottom-0 size-1 translate-x-1/2 translate-y-1/2 border border-foreground bg-background"
                />
              </span>
            </span>
          </p>
        </div>
      </div>

      <div className="h-6 sm:h-10" />

      <div>
        <p className="max-w-(--breakpoint-md) px-2 text-lg/7 text-muted-foreground max-sm:px-4">
          Creator. Explorer. Optimist. Bringing together music, photography, tech, and nature to
          share a little extra positivity with the world.
        </p>
      </div>
    </GridContainer>
  );
}
