import GridContainer from "@/components/ui/grid-container";

export default function Hero() {
  return (
    <div>
      <div
        aria-hidden="true"
        className="flex h-16 items-end px-2 font-mono text-xs/6 whitespace-pre text-black/20 max-sm:px-4 sm:h-24 dark:text-white/25"
      >
        <span className="inline">[Running...]</span>
      </div>

      <GridContainer>
        <h1 className="px-2 text-4xl tracking-tighter text-balance max-lg:font-medium max-sm:px-4 sm:text-5xl lg:text-6xl xl:text-8xl">
          What's up, world?
        </h1>
      </GridContainer>

      <div
        aria-hidden="true"
        className="h-6 bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 sm:h-10 dark:[--pattern-fg:var(--color-white)]/10"
      />

      <GridContainer>
        <p className="max-w-(--breakpoint-md) px-2 text-lg/7 font-medium text-gray-600 max-sm:px-4 dark:text-gray-400">
          My name is{" "}
          <span className="text-[1.0625rem] text-amber-500 dark:text-amber-400">
            Long Nhat Nguyen
          </span>
          . I explore{" "}
          <span className="font-mono text-[1.0625rem] text-violet-500 dark:text-violet-400">
            music
          </span>
          ,{" "}
          <span className="font-mono text-[1.0625rem] text-teal-500 dark:text-teal-400">
            photography
          </span>
          ,{" "}
          <span className="font-mono text-[1.0625rem] text-sky-500 dark:text-sky-400">
            technology
          </span>
          , and{" "}
          <span className="font-mono text-[1.0625rem] text-green-500 dark:text-green-400">
            nature
          </span>
          . Let's make and share things that bring a little positivity into the world.
        </p>
      </GridContainer>
    </div>
  );
}
