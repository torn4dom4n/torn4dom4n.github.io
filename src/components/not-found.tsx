import GridContainer from "@/components/ui/grid-container";
import SectionHeader from "@/components/ui/section-header";
import { SpotlightButton } from "@/components/ui/spotlight-button";

export default function NotFound() {
  return (
    <div className="pt-16 sm:pt-24">
      <GridContainer className="2xl:before:hidden 2xl:after:hidden">
        <SectionHeader className="text-foreground/80">404</SectionHeader>
      </GridContainer>

      <GridContainer>
        <h1 className="px-2 text-4xl tracking-tighter text-balance max-lg:font-medium max-sm:px-4 sm:text-5xl lg:text-6xl xl:text-8xl">
          Page not found.
        </h1>
      </GridContainer>

      <div className="h-6 sm:h-10" />

      <GridContainer>
        <div className="px-2 max-sm:px-4">
          <p className="max-w-(--breakpoint-md) text-lg/7 text-muted-foreground">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <div className="mt-8">
            <SpotlightButton to="/" className="mt-0">
              Back to home
            </SpotlightButton>
          </div>
        </div>
      </GridContainer>
    </div>
  );
}
