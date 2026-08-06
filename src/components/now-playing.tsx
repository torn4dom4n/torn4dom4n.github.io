import { memo } from "react";

import GridContainer from "@/components/ui/grid-container";
import SectionHeader from "@/components/ui/section-header";
import { CassettePlayer } from "@/components/ui/spotify-card";

// NowPlaying block displaying the active favorite music track inside a Cassette Player
const NowPlaying = memo(function NowPlaying() {
  return (
    <div className="relative max-w-full">
      {/* Music section label */}
      <GridContainer className="2xl:before:hidden 2xl:after:hidden">
        <SectionHeader className="text-foreground/80">Music</SectionHeader>
      </GridContainer>

      {/* Music section heading */}
      <GridContainer>
        <h2 className="max-w-lg px-2 text-[2.5rem]/10 font-medium tracking-tighter text-balance max-sm:px-4 2xl:mt-0">
          Now playing
        </h2>
      </GridContainer>

      <div className="h-6 sm:h-10" />

      {/* Music block quote tag */}
      <GridContainer>
        <p className="max-w-(--breakpoint-md) px-2 text-base/7 text-muted-foreground max-sm:px-4">
          If we'll ever be remembered, I know it'll be for the way that we love.
        </p>
      </GridContainer>

      {/* Cassette Player rendering container */}
      <GridContainer className="mt-16">
        <div className="flex w-full justify-start px-2 py-12 max-sm:px-4">
          <CassettePlayer
            archiveLabel="Archive 11"
            audioSrc="/music/repeat-it.mp3"
            trackTitle="Repeat It"
            catalogueNumber="200769"
            sideLabel="Side A"
          />
        </div>
      </GridContainer>
    </div>
  );
});

export default NowPlaying;
