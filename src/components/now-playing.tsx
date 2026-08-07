import { memo } from "react";

import { CassettePlayer } from "@/components/ui/cassette-player";
import GridContainer from "@/components/ui/grid-container";
import SectionHeader from "@/components/ui/section-header";

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
          If the world ends tonight, you'll be in my arms. We'll be frozen in time underneath the
          stars.
        </p>
      </GridContainer>

      {/* Cassette Player rendering container */}
      <GridContainer className="mt-16">
        <div className="flex w-full justify-start px-2 py-12 max-sm:px-4">
          <CassettePlayer
            archiveLabel="Archive 11"
            audioSrc="/music/repeat-it.mp3"
            trackTitle="Repeat It"
            trackArtist="Martin Garrix & Ed Sheeran"
            catalogueNumber="200769"
            sideLabel="Side A"
          />
        </div>
      </GridContainer>

      {/* Detailed song metadata and background */}
      <GridContainer className="mbs-12">
        <div className="grid grid-cols-1 gap-8 px-2 py-12 max-sm:px-4 md:grid-cols-2">
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold tracking-widest text-muted-foreground uppercase">
                Artist & Track
              </span>
              <p className="mbs-1 text-base font-medium text-foreground">
                Martin Garrix & Ed Sheeran — "Repeat It"
              </p>
            </div>
            <div>
              <span className="text-xs font-bold tracking-widest text-muted-foreground uppercase">
                Album
              </span>
              <p className="mbs-1 text-base font-medium text-foreground">
                Upcoming Second Studio Album
              </p>
            </div>
            <div>
              <span className="text-xs font-bold tracking-widest text-muted-foreground uppercase">
                Side Project & Label
              </span>
              <p className="mbs-1 text-base font-medium text-foreground">
                Co-produced with Mesto & Osrin — Released on STMPD RCRDS
              </p>
            </div>
          </div>
          <div>
            <span className="text-xs font-bold tracking-widest text-muted-foreground uppercase">
              Background
            </span>
            <p className="mbs-2 text-sm/6 text-muted-foreground">
              Initially recorded in 2014 during a studio session in Nashville, the track premiered
              in 2015 at Ultra Music Festival. For over a decade, it remained one of EDM's most
              legendary unreleased anthems due to conflicts between Atlantic and Spinnin' Records. A
              reworked, more acoustic version was officially released on May 15, 2026, to celebrate
              Martin Garrix's 30th birthday.
            </p>
          </div>
        </div>
      </GridContainer>
    </div>
  );
});

export default NowPlaying;
