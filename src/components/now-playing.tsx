import { useEffect, useRef, useState } from "react";

import { SpotifyCard, type SpotifyTrack } from "@/components/spotify-card";
import GridContainer from "@/components/ui/grid-container";

const FAVORITE_TRACK: SpotifyTrack = {
  title: "Catharina",
  artist: "Martin Garrix",
  image: "https://i.scdn.co/image/ab67616d00001e02f09c204fd16ebbdd69eef5ef",
  audio: "https://p.scdn.co/mp3-preview/8d8da7521ecac1f1dd66111257122bda7114e70d",
  link: "https://open.spotify.com/track/0axM6rXe76kVZ5H3vbb8pi",
};

export default function NowPlaying() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!FAVORITE_TRACK.audio) return;

    if (!audioRef.current) {
      audioRef.current = new Audio(FAVORITE_TRACK.audio);
      audioRef.current.onended = () => setIsPlaying(false);
    }

    if (isPlaying) {
      audioRef.current.play().catch(() => setIsPlaying(false));
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <section className="relative">
      <GridContainer>
        <h2 className="max-w-lg px-2 py-8 text-[2.5rem]/10 font-semibold tracking-heading text-balance max-sm:px-4">
          Now playing.
        </h2>
      </GridContainer>

      <div
        aria-hidden="true"
        className="h-6 bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed [--pattern-fg:var(--color-ds-border)] sm:h-10"
      />

      <GridContainer>
        <p className="max-w-(--breakpoint-md) px-2 py-10 text-base/relaxed text-ds-secondary max-sm:px-4">
          If we'll ever be remembered, I know it'll be for the way that we love.
        </p>
      </GridContainer>

      <div
        aria-hidden="true"
        className="h-6 bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed [--pattern-fg:var(--color-ds-border)] sm:h-10"
      />

      <GridContainer>
        <div className="max-w-md px-2 py-16 max-sm:px-4">
          <SpotifyCard
            data={FAVORITE_TRACK}
            isPlaying={isPlaying}
            onPlayToggle={() => setIsPlaying(!isPlaying)}
          />
        </div>
      </GridContainer>
    </section>
  );
}
