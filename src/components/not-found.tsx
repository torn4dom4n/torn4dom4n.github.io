import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import GridContainer from "@/components/ui/grid-container";
import SectionHeader from "@/components/ui/section-header";

export default function NotFound() {
  return (
    <div className="pt-16 sm:pt-24">
      <GridContainer className="2xl:before:hidden 2xl:after:hidden">
        <SectionHeader className="text-foreground/80">404</SectionHeader>
      </GridContainer>

      <GridContainer>
        <h1 className="px-2 text-4xl tracking-tighter text-balance max-lg:font-medium max-sm:px-4 sm:text-5xl lg:text-6xl xl:text-8xl">
          Page not found
        </h1>
      </GridContainer>

      <div className="h-6 sm:h-10" />

      <GridContainer>
        <div className="px-2 max-sm:px-4">
          <p className="max-w-(--breakpoint-md) text-lg/7 text-muted-foreground">
            The page you are looking for doesn't exist or has been moved.
          </p>
        </div>
      </GridContainer>

      <div className="h-6 sm:h-10" />

      <GridContainer className="before:hidden">
        <div className="px-2 max-sm:px-4">
          <Button asChild className="group font-semibold">
            <Link to="/">
              <svg
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
                className="mr-2 -ml-1 size-5 transition-transform group-hover:-translate-x-0.5"
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
