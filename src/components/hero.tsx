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
          What's up everybody.
        </h1>
      </GridContainer>

      <div
        aria-hidden="true"
        className="relative left-1/2 h-6 w-[200vw] -translate-x-1/2 bg-gray-950/5 sm:h-10 dark:bg-white/5"
      />

      <GridContainer>
        <p className="max-w-(--breakpoint-md) px-2 text-lg/7 font-medium text-gray-600 max-sm:px-4 dark:text-gray-400">
          My name is Long Nhat Nguyen. I explore music, photography, technology, and nature. Let's
          make and share things that bring a little positivity into the world.
        </p>
      </GridContainer>
    </div>
  );
}
