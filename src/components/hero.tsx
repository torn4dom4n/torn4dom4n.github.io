import GridContainer from "@/components/ui/grid-container";

export default function Hero() {
  return (
    <div>
      <div
        aria-hidden="true"
        className="flex h-16 items-end px-2 font-mono text-[10px] font-medium tracking-wider whitespace-pre text-geist-tertiary uppercase max-sm:px-4 sm:h-24"
      >
        <span className="inline">[ Running ]</span>
      </div>

      <GridContainer>
        <h1 className="px-2 py-8 text-4xl font-semibold tracking-display text-balance max-sm:px-4 sm:text-5xl lg:text-6xl xl:text-8xl">
          What's up everybody.
        </h1>
      </GridContainer>

      <GridContainer>
        <p className="max-w-(--breakpoint-md) px-2 py-10 text-lg/relaxed font-normal text-geist-secondary max-sm:px-4 sm:text-xl">
          My name is Long Nhat Nguyen. I explore music, photography, technology, and nature. Let's
          make and share things that bring a little positivity into the world.
        </p>
      </GridContainer>
    </div>
  );
}
