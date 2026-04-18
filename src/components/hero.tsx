import GridContainer from "@/components/ui/grid-container";

export default function Hero() {
  return (
    <div className="pt-16 sm:pt-24">
      <GridContainer>
        <h1 className="px-2 text-4xl tracking-tighter text-balance max-lg:font-medium max-sm:px-4 sm:text-5xl lg:text-6xl xl:text-8xl">
          Long Nhat Nguyen
        </h1>
      </GridContainer>

      <div className="h-6 sm:h-10" />

      <section>
        <p className="max-w-(--breakpoint-md) px-2 text-lg/7 text-muted-foreground max-sm:px-4">
          What's up everybody. I'm only a human. I explore music, photography, technology, and
          nature. Let's make and share things that bring a little positivity into the world.
        </p>
      </section>
    </div>
  );
}
