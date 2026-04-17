import { useId } from "react";
import SpotifyIcon from "~icons/simple-icons/spotify";

import { cn } from "@/lib/utils";

export type SpotifyTrack = {
  title: string;
  artist: string;
  image: string;
  audio?: string;
  link: string;
};

interface SpotifyCardProps {
  data: SpotifyTrack;
  isPlaying: boolean;
  onPlayToggle: () => void;
}

export function SpotifyCard({ data, isPlaying, onPlayToggle }: SpotifyCardProps) {
  const uniqueId = useId().replace(/:/g, "");

  return (
    <div className="group relative flex w-full gap-4 overflow-visible rounded-lg bg-background p-4 shadow-card transition-all duration-300 hover:scale-[1.02]">
      <button
        onClick={onPlayToggle}
        className="relative size-24 shrink-0 overflow-visible focus:outline-hidden"
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        <div className="relative z-10 size-full overflow-hidden rounded-md shadow-border">
          <img src={data.image} alt={data.title} className="size-full object-cover" />
          <div
            className={cn(
              "absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-300",
              isPlaying ? "opacity-100" : "opacity-0 group-hover:opacity-100",
            )}
          >
            {isPlaying ? (
              <svg viewBox="0 0 24 24" fill="currentColor" className="size-8 text-white">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="currentColor" className="size-8 text-white">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </div>
        </div>

        {/* Decorative vinyl effect */}
        {isPlaying && (
          <div
            className={cn(
              "absolute top-1/2 left-1/2 -z-10 size-[80%] -translate-x-[10%] -translate-y-1/2 transition-all duration-300",
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 110 110"
              className="size-full animate-spin"
              style={{
                animationDuration: "3s",
                animationPlayState: isPlaying ? "running" : "paused",
              }}
            >
              <circle cx="55" cy="55" r="55" fill="var(--foreground)" />
              <mask
                id={`mask0_${uniqueId}`}
                width="110"
                height="110"
                x="0"
                y="0"
                maskUnits="userSpaceOnUse"
                style={{ maskType: "alpha" }}
              >
                <circle cx="55" cy="55" r="55" fill="black" />
              </mask>
              <g mask={`url(#mask0_${uniqueId})`}>
                <g filter={`url(#filter0_${uniqueId})`}>
                  <circle
                    cx="55"
                    cy="55"
                    r="51.5"
                    stroke="var(--background)"
                    strokeOpacity="0.21"
                  />
                </g>
                <g filter={`url(#filter1_${uniqueId})`}>
                  <circle
                    cx="55"
                    cy="55"
                    r="47.5"
                    stroke="var(--background)"
                    strokeOpacity="0.21"
                  />
                </g>
                <g filter={`url(#filter2_${uniqueId})`}>
                  <circle
                    cx="55"
                    cy="55"
                    r="45.5"
                    stroke="var(--background)"
                    strokeOpacity="0.21"
                  />
                </g>
                <g filter={`url(#filter3_${uniqueId})`}>
                  <circle
                    cx="55"
                    cy="55"
                    r="43.5"
                    stroke="var(--background)"
                    strokeOpacity="0.21"
                  />
                </g>
                <g filter={`url(#filter4_${uniqueId})`}>
                  <circle
                    cx="55"
                    cy="55"
                    r="37.5"
                    stroke="var(--background)"
                    strokeOpacity="0.21"
                  />
                </g>
                <g filter={`url(#filter5_${uniqueId})`}>
                  <circle
                    cx="55"
                    cy="55"
                    r="34.5"
                    stroke="var(--background)"
                    strokeOpacity="0.21"
                  />
                </g>
                <g filter={`url(#filter6_${uniqueId})`} opacity="0.4">
                  <path fill="var(--background)" d="M-14 38l68 19.579L-14 74V38z" />
                </g>
                <g filter={`url(#filter7_${uniqueId})`} opacity="0.4">
                  <path fill="var(--background)" d="M123 38L55 57.579 123 74V38z" />
                </g>
                <g filter={`url(#filter8_${uniqueId})`} opacity="0.4">
                  <path fill="var(--background)" d="M36.5 124.5l19.579-68 16.421 68h-36z" />
                </g>
                <g filter={`url(#filter9_${uniqueId})`} opacity="0.4">
                  <path fill="var(--background)" d="M36.5-12.5l19.579 68 16.421-68h-36z" />
                </g>
              </g>
              <defs>
                <filter
                  id={`filter0_${uniqueId}`}
                  width="108"
                  height="108"
                  x="1"
                  y="1"
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="1" />
                </filter>
                <filter
                  id={`filter1_${uniqueId}`}
                  width="100"
                  height="100"
                  x="5"
                  y="5"
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="1" />
                </filter>
                <filter
                  id={`filter2_${uniqueId}`}
                  width="96"
                  height="96"
                  x="7"
                  y="7"
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="1" />
                </filter>
                <filter
                  id={`filter3_${uniqueId}`}
                  width="92"
                  height="92"
                  x="9"
                  y="9"
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="1" />
                </filter>
                <filter
                  id={`filter4_${uniqueId}`}
                  width="80"
                  height="80"
                  x="15"
                  y="15"
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="1" />
                </filter>
                <filter
                  id={`filter5_${uniqueId}`}
                  width="74"
                  height="74"
                  x="18"
                  y="18"
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="1" />
                </filter>
                <filter
                  id={`filter6_${uniqueId}`}
                  width="100"
                  height="68"
                  x="-30"
                  y="22"
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="8" />
                </filter>
                <filter
                  id={`filter7_${uniqueId}`}
                  width="100"
                  height="68"
                  x="39"
                  y="22"
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="8" />
                </filter>
                <filter
                  id={`filter8_${uniqueId}`}
                  width="68"
                  height="100"
                  x="20.5"
                  y="40.5"
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="8" />
                </filter>
                <filter
                  id={`filter9_${uniqueId}`}
                  width="68"
                  height="100"
                  x="20.5"
                  y="-28.5"
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
      <div className="z-10 flex min-w-0 flex-col justify-between">
        <div className="flex self-end">
          <a
            href={data.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View track on Spotify"
            className="text-muted-foreground transition-colors hover:text-accent"
          >
            <SpotifyIcon width={18} height={18} />
          </a>
        </div>
        <div className="pl-4 text-end">
          <h3 className="truncate text-sm font-semibold tracking-tight-alt text-foreground">
            {data.title}
          </h3>
          <p className="truncate text-sm font-medium tracking-tight-alt text-muted-foreground">
            {data.artist}
          </p>
        </div>
      </div>
    </div>
  );
}
