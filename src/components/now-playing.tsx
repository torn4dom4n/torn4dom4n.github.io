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
      <GridContainer className="py-24 sm:py-32" withBorder={false}>
        <h2 className="max-w-lg px-2 text-[2.5rem]/[1.2] font-semibold tracking-heading text-balance max-sm:px-4 sm:text-[3rem]">
          Now playing.
        </h2>
      </GridContainer>

      <div
        aria-hidden="true"
        className="h-20 border-y border-border bg-[radial-gradient(var(--border)_1px,transparent_1px)] bg-[size:20px_20px]"
      />

      <GridContainer className="py-24 sm:py-32" withBorder={false}>
        <p className="max-w-(--breakpoint-md) px-2 text-[1.125rem]/relaxed text-muted-foreground max-sm:px-4 sm:text-[1.25rem]">
          If we'll ever be remembered, I know it'll be for the way that we love.
        </p>
      </GridContainer>

      <div
        aria-hidden="true"
        className="h-20 border-y border-border bg-[radial-gradient(var(--border)_1px,transparent_1px)] bg-[size:20px_20px]"
      />

      <GridContainer className="py-24 sm:py-48" withBorder={false}>
        <div className="max-w-md px-2 max-sm:px-4">
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
