"use client";

import { useState, useEffect, useRef, useId } from "react";
import SpotifyIcon from "~icons/simple-icons/spotify";

import { cn } from "@/lib/utils";

export interface SpotifyData {
  title: string;
  artist: string;
  image: string;
  link: string;
  audio?: string;
}

interface SpotifyCardProps {
  data: SpotifyData;
  className?: string | undefined;
}

export function SpotifyCard({ data, className }: SpotifyCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const uniqueId = useId().replace(/:/g, "");

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const handlePlayPause = () => {
    if (!data.audio) return;

    if (!audioRef.current) {
      audioRef.current = new Audio(data.audio);
      audioRef.current.volume = 0.3;
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
        "relative flex h-full max-h-[100px] w-full items-stretch justify-center overflow-hidden rounded-2xl border border-border p-3",
        className,
      )}
    >
      <div className="pointer-events-none absolute top-1/2 left-1/2 z-0 block aspect-square w-[120%] -translate-x-1/2 -translate-y-1/2">
        <div className="pointer-events-none flex h-full opacity-100 select-none">
          <img
            src={data.image}
            alt=""
            className="absolute top-0 left-0 block h-full w-full blur-[50px] brightness-150"
          />
          <div className="absolute top-0 left-0 h-full w-full bg-[linear-gradient(180deg,_rgba(0,_0,_0,_0)_0,_rgba(0,_0,_0,_.8))]" />
        </div>
      </div>
      <button
        onClick={data.audio ? handlePlayPause : undefined}
        aria-label={isPlaying ? "Pause preview" : "Play preview"}
        className={cn(
          "group relative z-[1] w-full max-w-[75px] self-center",
          data.audio && "cursor-pointer",
        )}
      >
        <img
          src={data.image}
          alt={data.title}
          className={cn(
            "pointer-events-none relative z-[1] min-h-[75px] w-full min-w-[75px] rounded-lg object-cover shadow-md transition-transform duration-300 ease-out select-none",
            data.audio && "group-hover:-translate-x-0.5",
            isPlaying && "-translate-x-0.5",
          )}
        />
        {data.audio && (
          <div
            className={cn(
              "absolute top-1/2 left-1/2 -z-[1] size-[80%] -translate-y-1/2 transition-all duration-300",
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
                <circle cx="55" cy="55" r="55" fill="var(--foreground)" />
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
                  <path fill="#fff" d="M-14 38l68 19.579L-14 74V38z" />
                </g>
                <g filter={`url(#filter7_${uniqueId})`} opacity="0.4">
                  <path fill="#fff" d="M123 38L55 57.579 123 74V38z" />
                </g>
                <g filter={`url(#filter8_${uniqueId})`} opacity="0.4">
                  <path fill="#fff" d="M36.5 124.5l19.579-68 16.421 68h-36z" />
                </g>
                <g filter={`url(#filter9_${uniqueId})`} opacity="0.4">
                  <path fill="#fff" d="M36.5-12.5l19.579 68 16.421-68h-36z" />
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
      <div className="z-10 flex w-full flex-col justify-between">
        <div className="flex self-end">
          <a
            href={data.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View track on Spotify"
            className="cursor-pointer"
          >
            <SpotifyIcon width={18} height={18} className="text-muted-foreground" />
          </a>
        </div>
        <div className="pl-6 text-end">
          <h3 className="text-sm font-semibold tracking-[-.006em] whitespace-nowrap text-foreground">
            {data.title}
          </h3>
          <p className="text-sm font-medium tracking-[-.006em] whitespace-nowrap text-muted-foreground">
            {data.artist}
          </p>
        </div>
      </div>
    </div>
  );
}
