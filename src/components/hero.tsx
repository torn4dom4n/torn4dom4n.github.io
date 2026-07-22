import GridContainer from "@/components/ui/grid-container";

/**
 * Hero Block Component
 *
 * This block represents the introduction section of the website.
 * It features a highly polished, responsive layout with the following highlights:
 * - A 3-line headline that dynamically scales for different viewports (hidden/visible on small vs medium screens).
 * - A stylized, interfaces.dev-inspired "Hello" section featuring bold neutral horizontal guidelines
 *   precisely framing the lowercase letter 'o' in Geist font x-height.
 * - An absolute-positioned selection overlay span for "Long Nhat" (and "Long Nhat Nguyen" on mobile)
 *   with responsive, dot-like boundary selection corner handles, snug right buffer padding, and pointer-events-none enabled.
 * - An italicized surname "Nguyen" rendered in the primary text-foreground color.
 * - A top-level layout wrapper and a GridContainer enclosing a minimal bio text, using neutral/monochrome styling.
 */
export default function Hero() {
  return (
    <div className="pt-16 sm:pt-24">
      {/*
        Desktop/Tablet Hero Headline Layout:
        Constructed in exactly 3 lines, styled with Geist Sans 'tracking-tighter' font and precise vertical positioning.
      */}
      <div className="hidden sm:block">
        {/* Line 1: Stylized "Hello" with custom horizontal lines */}
        <div className="relative px-2">
          <h1 className="text-5xl tracking-tighter text-balance text-foreground max-lg:font-medium lg:text-6xl xl:text-8xl">
            <span className="relative inline-block">
              Hello
              {/* Guidelines framing the lowercase 'o' */}
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

        {/* Line 2: "my name is Long Nhat" with interactive selection card/box overlays */}
        <div className="relative mt-2 px-2 sm:mt-4">
          <p className="text-5xl tracking-tighter text-balance text-muted-foreground max-lg:font-medium lg:text-6xl xl:text-8xl">
            my name is{" "}
            <span className="group relative inline-block pr-1.5 text-foreground">
              Long Nhat
              {/* Interactive selection box overlay with corner anchors */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute top-[2px] right-0 -bottom-[4px] left-0 border border-foreground bg-foreground/5 transition-colors duration-200 ease-out group-hover:bg-foreground/10"
              >
                {/* Top-Left Selection Anchor Handle */}
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 size-1.5 -translate-x-1/2 -translate-y-1/2 border border-foreground bg-background"
                />
                {/* Top-Right Selection Anchor Handle */}
                <span
                  aria-hidden="true"
                  className="absolute top-0 right-0 size-1.5 translate-x-1/2 -translate-y-1/2 border border-foreground bg-background"
                />
                {/* Bottom-Left Selection Anchor Handle */}
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 size-1.5 -translate-x-1/2 translate-y-1/2 border border-foreground bg-background"
                />
                {/* Bottom-Right Selection Anchor Handle */}
                <span
                  aria-hidden="true"
                  className="absolute right-0 bottom-0 size-1.5 translate-x-1/2 translate-y-1/2 border border-foreground bg-background"
                />
              </span>
            </span>
          </p>
        </div>

        {/* Line 3: "Nguyen" in italic and styled with the same text-foreground color */}
        <div className="relative mt-2 px-2 sm:mt-4">
          <p className="text-5xl tracking-tighter text-balance text-foreground italic max-lg:font-medium lg:text-6xl xl:text-8xl">
            Nguyen
          </p>
        </div>
      </div>

      {/*
        Mobile Hero Headline Layout:
        Optimized for touch viewports and narrower screen width, with smaller font size and adjusted spacing.
      */}
      <div className="block sm:hidden">
        {/* Line 1: Mobile "Hello" with framing guidelines */}
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

        {/* Line 2: Mobile "my name is" */}
        <div className="relative mt-1 px-2 max-sm:px-4">
          <p className="text-4xl tracking-tighter text-balance text-muted-foreground max-lg:font-medium">
            my name is
          </p>
        </div>

        {/* Line 3: Mobile "Long Nhat Nguyen" containing selection overlays */}
        <div className="relative mt-1 px-2 max-sm:px-4">
          <p className="text-4xl tracking-tighter text-balance text-muted-foreground max-lg:font-medium">
            <span className="group relative inline-block pr-1.5 whitespace-nowrap text-foreground">
              Long Nhat <span className="italic">Nguyen</span>
              {/* Interactive selection box overlay with mobile sizing corner anchors */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute top-[1px] right-0 -bottom-[3px] left-0 border border-foreground bg-foreground/5 transition-colors duration-200 ease-out group-hover:bg-foreground/10"
              >
                {/* Top-Left Selection Anchor Handle */}
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 size-1 -translate-x-1/2 -translate-y-1/2 border border-foreground bg-background"
                />
                {/* Top-Right Selection Anchor Handle */}
                <span
                  aria-hidden="true"
                  className="absolute top-0 right-0 size-1 translate-x-1/2 -translate-y-1/2 border border-foreground bg-background"
                />
                {/* Bottom-Left Selection Anchor Handle */}
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 size-1 -translate-x-1/2 translate-y-1/2 border border-foreground bg-background"
                />
                {/* Bottom-Right Selection Anchor Handle */}
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

      {/*
        Hero Bio Section:
        Wraps a clean, neutral monochrome tagline within a GridContainer layout to align with the core site structure.
      */}
      <GridContainer>
        <p className="max-w-(--breakpoint-md) px-2 text-lg/7 text-muted-foreground max-sm:px-4">
          Creator. Explorer. Optimist. Bringing together music, photography, tech, and nature to
          share a little extra positivity with the world.
        </p>
      </GridContainer>
    </div>
  );
}
