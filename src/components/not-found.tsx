import { Draw } from "drawesome";
import { useEffect, useState } from "react";

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

      {/* Error explanation paragraph */}
      <GridContainer>
        <div className="px-2 max-sm:px-4">
          <p className="max-w-(--breakpoint-md) text-lg/7 text-muted-foreground">
            The page you are looking for doesn't exist or has been moved. Feel free to doodle below
            while you're here.
          </p>
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
