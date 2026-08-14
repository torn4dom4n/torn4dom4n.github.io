import { Link } from "@tanstack/react-router";
import { Draw } from "drawesome";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import GridContainer from "@/components/ui/grid-container";
import SectionHeader from "@/components/ui/section-header";

// Fallback error block for non-existent pages (404)
export default function NotFound() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="pt-16 pb-12 sm:pt-24">
      {/* 404 Section Tag */}
      <GridContainer className="2xl:before:hidden 2xl:after:hidden">
        <SectionHeader className="text-foreground/80">404</SectionHeader>
      </GridContainer>

      {/* Main Error title */}
      <GridContainer>
        <h1 className="px-2 text-4xl tracking-tighter text-balance max-lg:font-medium max-sm:px-4 sm:text-5xl lg:text-6xl xl:text-8xl">
          Page not found
        </h1>
      </GridContainer>

      <div className="h-6 sm:h-10" />

      {/* Error explanation paragraph & back home button */}
      <GridContainer>
        <div className="flex flex-col gap-4 px-2 max-sm:px-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-(--breakpoint-md) text-lg/7 text-muted-foreground">
            The page you are looking for doesn't exist or has been moved. Feel free to doodle below
            while you're here.
          </p>
          <div>
            <Button asChild className="group font-semibold">
              <Link to="/">
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
        </div>
      </GridContainer>

      <div className="h-6 sm:h-10" />

      {/* Drawesome interactive canvas area */}
      <GridContainer>
        <div className="px-2 max-sm:px-4">
          <div className="relative h-[480px] w-full overflow-hidden rounded-xl border border-border bg-muted/20">
            {isMounted && <Draw background="transparent" theme="auto" />}
          </div>
        </div>
      </GridContainer>
    </div>
  );
}
