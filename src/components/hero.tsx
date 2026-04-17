import GridContainer from "@/components/ui/grid-container";

export default function Hero() {
  return (
    <div className="pt-24 sm:pt-48">
      <GridContainer className="py-24 sm:py-32" withBorder={false}>
        <h1 className="max-w-4xl px-2 text-[3rem]/[1.1] font-semibold tracking-display text-balance max-sm:px-4 sm:text-[4rem] lg:text-[5rem] xl:text-[6rem]">
          What's up everybody.
        </h1>
      </GridContainer>

      <div
        aria-hidden="true"
        className="h-20 border-y border-border bg-[radial-gradient(var(--border)_1px,transparent_1px)] bg-[size:20px_20px]"
      />

      <GridContainer className="py-24 sm:py-32" withBorder={false}>
        <p className="max-w-(--breakpoint-md) px-2 text-[1.25rem]/relaxed font-normal text-muted-foreground max-sm:px-4 sm:text-[1.5rem]">
          My name is Long Nhat Nguyen. I explore music, photography, technology, and nature. Let's
          make and share things that bring a little positivity into the world.
        </p>
      </GridContainer>
    </div>
  );
}
