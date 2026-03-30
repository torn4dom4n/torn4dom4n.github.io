import { SpotifyCard, type SpotifyData } from "@/components/spotify-card";
import GridContainer from "@/components/ui/grid-container";

const FAVORITE_TRACK: SpotifyData = {
  title: "Catherine",
  artist: "Seth Hills & Martin Garrix",
  image: "https://i.scdn.co/image/ab67616d0000b273c5b525e9d91986927429671d",
  link: "https://open.spotify.com/track/1P6R6oK6uK1vR9N8hY3M5w",
};

export default function NowPlaying() {
  return (
    <section className="relative">
      <GridContainer>
        <h2 className="max-w-lg px-2 text-[2.5rem]/10 font-medium tracking-tighter text-balance max-sm:px-4 2xl:mt-0">
          Now playing.
        </h2>
      </GridContainer>

      <div
        aria-hidden="true"
        className="h-6 bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 sm:h-10 dark:[--pattern-fg:var(--color-white)]/10"
      />

      <GridContainer>
        <div className="max-w-md px-2 py-12 max-sm:px-4">
          <SpotifyCard data={FAVORITE_TRACK} />
        </div>
      </GridContainer>
    </section>
  );
}
