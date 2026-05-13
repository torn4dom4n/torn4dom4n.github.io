import GridContainer from "@/components/ui/grid-container";
import SectionHeader from "@/components/ui/section-header";
import { SpotifyCard, type SpotifyData } from "@/components/ui/spotify-card";

const FAVORITE_TRACK: SpotifyData = {
  title: "Catharina",
  artist: "Martin Garrix",
  image: "https://i.scdn.co/image/ab67616d00001e02f09c204fd16ebbdd69eef5ef",
  audio: "https://p.scdn.co/mp3-preview/8d8da7521ecac1f1dd66111257122bda7114e70d",
  link: "https://open.spotify.com/track/0axM6rXe76kVZ5H3vbb8pi",
};

export default function NowPlaying() {
  return (
    <div className="relative max-inline-full">
      <GridContainer className="2xl:before:hidden 2xl:after:hidden">
        <SectionHeader className="text-foreground/80">Music</SectionHeader>
      </GridContainer>

      <GridContainer>
        <h2 className="ps-2 pe-2 text-[2.5rem]/10 font-medium tracking-tightest text-balance max-inline-lg max-sm:ps-4 max-sm:pe-4 2xl:mbs-0">
          Now playing
        </h2>
      </GridContainer>

      <div className="block-6 sm:block-10" />

      <GridContainer>
        <p className="ps-2 pe-2 text-base/7 text-muted-foreground max-inline-(--breakpoint-md) max-sm:ps-4 max-sm:pe-4">
          If we'll ever be remembered, I know it'll be for the way that we love.
        </p>
      </GridContainer>

      <GridContainer className="mbs-16">
        <div className="ps-2 pe-2 pbs-12 pbe-12 max-inline-md max-sm:ps-4 max-sm:pe-4">
          <SpotifyCard data={FAVORITE_TRACK} />
        </div>
      </GridContainer>
    </div>
  );
}
