import { Draw, type DrawHandle } from "drawesome";
import { Download } from "lucide-react";
import { useRef, useSyncExternalStore } from "react";

import { Button } from "@/components/ui/button";
import GridContainer from "@/components/ui/grid-container";
import SectionHeader from "@/components/ui/section-header";

const emptySubscribe = () => () => {};

// Fallback error block for non-existent pages (404)
export default function NotFound() {
  const drawRef = useRef<DrawHandle>(null);

  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  const isNarrow = useSyncExternalStore(
    (callback) => {
      const mql = window.matchMedia("(max-width: 679px)");
      mql.addEventListener("change", callback);
      return () => mql.removeEventListener("change", callback);
    },
    () => window.matchMedia("(max-width: 679px)").matches,
    () => false,
  );

  const handleExportPng = () => {
    void drawRef.current?.download("doodle", "png", 2);
  };

  return (
    <div className="pt-16 pb-16 sm:pt-24 sm:pb-20">
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

      <div className="h-8 sm:h-12" />

      {/* Centered Drawesome interactive canvas area */}
      <GridContainer>
        <div className="px-2 py-4 max-sm:px-4 sm:py-6">
          <div className="relative mx-auto h-[500px] w-full max-w-5xl overflow-hidden rounded-2xl border border-border bg-muted/20 p-2 shadow-sm sm:p-4">
            {isMounted &&
              (isNarrow ? (
                <Draw
                  ref={drawRef}
                  background="transparent"
                  theme="auto"
                  placement="left"
                  drawWhenMinimized
                  tools={["pencil", "pen", "marker", "highlighter", "brush"]}
                  controls={{ undo: false, clear: false, opacity: false, custom: false }}
                />
              ) : (
                <Draw
                  ref={drawRef}
                  background="transparent"
                  theme="auto"
                  placement="bottom"
                  drawWhenMinimized
                />
              ))}
          </div>

          {/* Export PNG action button below canvas */}
          <div className="mt-4 flex justify-end">
            <Button
              variant="outline"
              size="sm"
              onClick={handleExportPng}
              className="cursor-pointer font-medium"
            >
              <Download />
              Export PNG
            </Button>
          </div>
        </div>
      </GridContainer>
    </div>
  );
}
