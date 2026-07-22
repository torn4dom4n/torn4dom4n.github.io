"use client";

import { useState, useEffect, useRef, useId } from "react";
import SpotifyIcon from "~icons/simple-icons/spotify";

import { cn } from "@/lib/utils";

/**
 * Interface representing Spotify Track Metadata structure.
 */
export interface SpotifyData {
  title: string;
  artist: string;
  image: string;
  link: string;
  audio?: string;
}

/**
 * SpotifyCard Component Properties.
 */
interface SpotifyCardProps {
  data: SpotifyData;
  className?: string | undefined;
}

/**
 * SpotifyCard Block Component
 *
 * An interactive, visually stunning Spotify player block:
 * - Displays a blurred, amplified canvas-like image backdrop of the album art.
 * - Displays high-resolution album cover artwork using loading="lazy" and decoding="async" optimization tags.
 * - Integrates dynamic HTML5 Audio element playback capabilities allowing users to play/pause short 30s track previews.
 * - Renders a spinning custom vinyl record overlay SVG, using unique IDs for filters and mask layouts to support multiple cards.
 * - Links to the official Spotify track URL via the brand's standard SVG icon.
 */
export function SpotifyCard({ data, className }: SpotifyCardProps) {
  // State tracking audio playback
  const [isPlaying, setIsPlaying] = useState(false);
  // Audio reference instance
  const audioRef = useRef<HTMLAudioElement | null>(null);
  // Unique ID generator to dynamically qualify SVG filter/mask scopes
  const uniqueId = useId().replace(/:/g, "");

  // Cleanup effect to pause audio on component unmount
  useEffect(() => {
    const audio = audioRef.current;
    return () => {
      if (audio) {
        audio.pause();
      }
    };
  }, []);

  // Play/Pause interaction handler
  const handlePlayPause = () => {
    if (!data.audio) return;

    if (!audioRef.current) {
      // Lazy initialize Audio node
      audioRef.current = new Audio(data.audio);
      audioRef.current.volume = 0.3;
      // Register event listener to reset play state upon completion
      audioRef.current.addEventListener("ended", () => setIsPlaying(false));
    }

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      void audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div
      className={cn(
        "relative flex h-full max-h-25 w-full items-stretch justify-center overflow-hidden rounded-2xl border border-border p-3",
        className,
      )}
    >
      {/* Blurred album artwork background glow layout */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 z-0 block aspect-square w-[120%] -translate-x-1/2 -translate-y-1/2">
        <div className="pointer-events-none flex h-full opacity-100 select-none">
          <img
            src={data.image}
            alt=""
            loading="lazy"
            decoding="async"
            className="absolute top-0 left-0 block h-full w-full blur-[50px] brightness-150"
          />
          <div className="absolute top-0 left-0 h-full w-full bg-[linear-gradient(180deg,rgba(0,0,0,0)_0,rgba(0,0,0,.8))]" />
        </div>
      </div>

      {/* Playback Interactive Controller Box */}
      <button
        onClick={data.audio ? handlePlayPause : undefined}
        type="button"
        aria-label={isPlaying ? "Pause preview" : "Play preview"}
        className={cn(
          "group relative z-1 w-full max-w-18.75 self-center",
          data.audio && "cursor-pointer",
        )}
      >
        {/* Album Cover Art Display */}
        <img
          src={data.image}
          alt={data.title}
          loading="lazy"
          decoding="async"
          className={cn(
            "pointer-events-none relative z-1 min-h-18.75 w-full min-w-18.75 rounded-lg object-cover shadow-md transition-transform duration-300 ease-out select-none",
            data.audio && "group-hover:-translate-x-0.5",
            isPlaying && "-translate-x-0.5",
          )}
        />

        {/* Animated Vinyl Record Graphic showing only if audio preview link is present */}
        {data.audio && (
          <div
            className={cn(
              "absolute top-1/2 left-1/2 -z-1 size-[80%] -translate-y-1/2 transition-all duration-300",
              isPlaying
                ? "translate-x-[-10%]"
                : "translate-x-[-50%] group-hover:translate-x-[-10%]",
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 110 110"
              className="size-full animate-spin"
              style={{
                animationDuration: "1s",
                animationPlayState: isPlaying ? "running" : "paused",
              }}
            >
              <circle cx="55" cy="55" r="55" fill="#FFFFF" />
              <mask
                id={`mask0_${uniqueId}`}
                width="110"
                height="110"
                x="0"
                y="0"
                maskUnits="userSpaceOnUse"
                style={{ maskType: "alpha" }}
              >
                <circle cx="55" cy="55" r="55" fill="#FFFFF" />
              </mask>
              <g mask={`url(#mask0_${uniqueId})`}>
                {/* SVG Concentric Groove Circles */}
                <g filter={`url(#filter-blur-1_${uniqueId})`}>
                  <circle cx="55" cy="55" r="51.5" stroke="#00000" strokeOpacity="0.21" />
                  <circle cx="55" cy="55" r="47.5" stroke="#00000" strokeOpacity="0.21" />
                  <circle cx="55" cy="55" r="45.5" stroke="#00000" strokeOpacity="0.21" />
                  <circle cx="55" cy="55" r="43.5" stroke="#00000" strokeOpacity="0.21" />
                  <circle cx="55" cy="55" r="37.5" stroke="#00000" strokeOpacity="0.21" />
                  <circle cx="55" cy="55" r="34.5" stroke="#00000" strokeOpacity="0.21" />
                </g>
                {/* Vinyl Reflection Glare Highlights */}
                <g filter={`url(#filter-blur-8_${uniqueId})`} opacity="0.4">
                  <path fill="#fff" d="M-14 38l68 19.579L-14 74V38z" />
                  <path fill="#fff" d="M123 38L55 57.579 123 74V38z" />
                  <path fill="#fff" d="M36.5 124.5l19.579-68 16.421 68h-36z" />
                  <path fill="#fff" d="M36.5-12.5l19.579 68 16.421-68h-36z" />
                </g>
              </g>
              <defs>
                {/* Micro blur filter */}
                <filter
                  id={`filter-blur-1_${uniqueId}`}
                  x="-20%"
                  y="-20%"
                  width="140%"
                  height="140%"
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="1" />
                </filter>
                {/* Macro blur filter */}
                <filter
                  id={`filter-blur-8_${uniqueId}`}
                  x="-50%"
                  y="-50%"
                  width="200%"
                  height="200%"
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="8" />
                </filter>
              </defs>
            </svg>
          </div>
        )}
      </button>

      {/* Track Metadata description section */}
      <div className="z-10 flex w-full flex-col justify-between">
        <div className="flex self-end">
          {/* External Spotify redirection link */}
          <a
            href={data.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View track on Spotify"
            className="cursor-pointer"
          >
            <SpotifyIcon
              width={18}
              height={18}
              className="text-white/70 transition-colors hover:text-white"
            />
          </a>
        </div>
        <div className="pl-6 text-end">
          {/* Track title */}
          <h3 className="text-sm font-semibold tracking-[-.006em] whitespace-nowrap text-white">
            {data.title}
          </h3>
          {/* Track artist(s) list */}
          <p className="text-sm font-medium tracking-[-.006em] whitespace-nowrap text-white/70">
            {data.artist}
          </p>
        </div>
      </div>
    </div>
  );
}
