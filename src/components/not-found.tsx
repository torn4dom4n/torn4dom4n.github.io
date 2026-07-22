import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import GridContainer from "@/components/ui/grid-container";
import SectionHeader from "@/components/ui/section-header";

/**
 * NotFound Block Component
 *
 * This is the fallback block/page displayed when a user navigates to an invalid or non-existent route (404 error).
 * It features:
 * - A clean, vertically spaced layout using standard block spacers and section boundaries.
 * - A section header rendering "404" with hidden top/bottom borders on extra large (2xl) viewports.
 * - A primary title displaying "Page not found".
 * - A descriptive message guiding the user.
 * - A customized, styled link button directing the user back to the home route ("/") with a transition animation.
 */
export default function NotFound() {
  return (
    <div className="pt-16 sm:pt-24">
      {/* 404 Section Category Header */}
      <GridContainer className="2xl:before:hidden 2xl:after:hidden">
        <SectionHeader className="text-foreground/80">404</SectionHeader>
      </GridContainer>

      {/* Main Error Heading */}
      <GridContainer>
        <h1 className="px-2 text-4xl tracking-tighter text-balance max-lg:font-medium max-sm:px-4 sm:text-5xl lg:text-6xl xl:text-8xl">
          Page not found
        </h1>
      </GridContainer>

      <div className="h-6 sm:h-10" />

      {/* Helper info text */}
      <GridContainer>
        <div className="px-2 max-sm:px-4">
          <p className="max-w-(--breakpoint-md) text-lg/7 text-muted-foreground">
            The page you are looking for doesn't exist or has been moved.
          </p>
        </div>
      </GridContainer>

      <div className="h-6 sm:h-10" />

      {/* Navigation button directing back home */}
      <GridContainer>
        <div className="px-2 max-sm:px-4">
          <Button asChild className="group font-semibold">
            <Link to="/">
              {/* Arrow SVG Icon with transition-transform hover feedback */}
              <svg
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
                className="transition-transform group-hover:-translate-x-0.5"
              >
                <path
                  d="M13.125 15.625L7.5 10L13.125 4.375"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back to home
            </Link>
          </Button>
        </div>
      </GridContainer>
    </div>
  );
}
