import GridContainer from "@/components/ui/grid-container";

export default function Hero() {
  return (
    <div className="pt-24 sm:pt-32">
      <GridContainer>
        <h1 className="px-2 py-8 text-4xl font-semibold tracking-display text-balance max-sm:px-4 sm:text-5xl lg:text-6xl xl:text-8xl">
          What's up everybody.
        </h1>
      </GridContainer>

      <div
        aria-hidden="true"
        className="h-6 bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed [--pattern-fg:var(--color-geist-border)] sm:h-10"
      />

      <GridContainer>
        <p className="max-w-(--breakpoint-md) px-2 py-10 text-lg/relaxed font-normal text-geist-secondary max-sm:px-4 sm:text-xl">
          My name is Long Nhat Nguyen. I explore music, photography, technology, and nature. Let's
          make and share things that bring a little positivity into the world.
        </p>
      </GridContainer>
    </div>
  );
}
