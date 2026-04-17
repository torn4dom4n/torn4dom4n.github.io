import { SpotifyCard, type SpotifyData } from "@/components/spotify-card";
import GridContainer from "@/components/ui/grid-container";

const FAVORITE_TRACK: SpotifyData = {
  title: "Catharina",
  artist: "Martin Garrix",
  image: "https://i.scdn.co/image/ab67616d00001e02f09c204fd16ebbdd69eef5ef",
  audio: "https://p.scdn.co/mp3-preview/8d8da7521ecac1f1dd66111257122bda7114e70d",
  link: "https://open.spotify.com/track/0axM6rXe76kVZ5H3vbb8pi",
};

export default function NowPlaying() {
  return (
    <section className="relative">
      <GridContainer>
        <h2 className="max-w-lg px-2 text-[2.5rem]/10 font-medium tracking-tighter text-balance max-sm:px-4 2xl:mt-0">
          Now playing.
        </h2>
      </GridContainer>

      <div className="h-6 sm:h-10" />

      <GridContainer>
        <p className="max-w-(--breakpoint-md) px-2 text-base/7 text-muted-foreground max-sm:px-4">
          If we'll ever be remembered, I know it'll be for the way that we love.
        </p>
      </GridContainer>

      <GridContainer>
        <div className="max-w-md px-2 py-12 max-sm:px-4">
          <SpotifyCard data={FAVORITE_TRACK} />
        </div>
      </GridContainer>
    </section>
  );
}
