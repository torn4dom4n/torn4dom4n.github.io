import GridContainer from "@/components/ui/grid-container";
import SectionHeader from "@/components/ui/section-header";
import { SpotifyCard, type SpotifyData } from "@/components/ui/spotify-card";

const FAVORITE_TRACK: SpotifyData = {
  title: "Repeat It",
  artist: "Martin Garrix, Ed Sheeran",
  image: "https://i.scdn.co/image/ab67616d0000b273296d05fd4b9e99e88f28eac1",
  audio: "https://p.scdn.co/mp3-preview/783c4ddb6c42383e9b81d03dc48deede523be130",
  link: "https://open.spotify.com/track/5mX5bEYxObqukGlynRIVCj",
};

export default function NowPlaying() {
  return (
    <div className="relative max-w-full">
      <GridContainer className="2xl:before:hidden 2xl:after:hidden">
        <SectionHeader className="text-foreground/80">Music</SectionHeader>
      </GridContainer>

      <GridContainer>
        <h2 className="max-w-lg px-2 text-[2.5rem]/10 font-medium tracking-tighter text-balance max-sm:px-4 2xl:mt-0">
          Now playing
        </h2>
      </GridContainer>

      <div className="h-6 sm:h-10" />

      <GridContainer>
        <p className="max-w-(--breakpoint-md) px-2 text-base/7 text-muted-foreground max-sm:px-4">
          If we'll ever be remembered, I know it'll be for the way that we love.
        </p>
      </GridContainer>

      <GridContainer className="mt-16">
        <div className="max-w-md px-2 py-12 max-sm:px-4">
          <SpotifyCard data={FAVORITE_TRACK} />
        </div>
      </GridContainer>
    </div>
  );
}
