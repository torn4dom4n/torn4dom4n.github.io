import { Draw, type DrawHandle } from "drawesome";
import { Download } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import GridContainer from "@/components/ui/grid-container";
import SectionHeader from "@/components/ui/section-header";

// Fallback error block for non-existent pages (404)
export default function NotFound() {
  const [isMounted, setIsMounted] = useState(false);
  const [isNarrow, setIsNarrow] = useState(false);
  const drawRef = useRef<DrawHandle>(null);

  useEffect(() => {
    setIsMounted(true);

    const mql = window.matchMedia("(max-width: 679px)");
    const onChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsNarrow(e.matches);
    };

    onChange(mql);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  const handleExportPng = () => {
    void drawRef.current?.download("doodle", "png", 2);
  };

  const handleExportSvg = () => {
    void drawRef.current?.download("doodle", "svg");
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

      {/* Error explanation paragraph & export action buttons */}
      <GridContainer>
        <div className="flex flex-col gap-4 px-2 max-sm:px-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-(--breakpoint-md) text-lg/7 text-muted-foreground">
            The page you are looking for doesn't exist or has been moved. Feel free to doodle below
            while you're here.
          </p>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleExportPng}
              className="cursor-pointer font-medium"
            >
              <Download />
              Export PNG
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleExportSvg}
              className="cursor-pointer font-medium"
            >
              <Download />
              Export SVG
            </Button>
          </div>
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
                  tools={["pencil", "pen", "marker", "highlighter", "brush"]}
                  controls={{ undo: false, clear: false, opacity: false, custom: false }}
                />
              ) : (
                <Draw ref={drawRef} background="transparent" theme="auto" placement="bottom" />
              ))}
          </div>
        </div>
      </GridContainer>
    </div>
  );
}
