/* eslint-disable jsx-a11y/prefer-tag-over-role */
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

const formatTime = (time: number) => {
  if (isNaN(time)) return "0:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

export function SpotifyCard({ data, className }: SpotifyCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const uniqueId = useId().replace(/:/g, "");

  useEffect(() => {
    if (data.audio) {
      const audio = new Audio(data.audio);
      audio.volume = 0.3;

      const handleEnded = () => setIsPlaying(false);
      const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
      const handleLoadedMetadata = () => setDuration(audio.duration);

      audio.addEventListener("ended", handleEnded);
      audio.addEventListener("timeupdate", handleTimeUpdate);
      audio.addEventListener("loadedmetadata", handleLoadedMetadata);

      audioRef.current = audio;

      if (audio.readyState >= 1) {
        setDuration(audio.duration);
      }

      return () => {
        audio.pause();
        audio.removeEventListener("ended", handleEnded);
        audio.removeEventListener("timeupdate", handleTimeUpdate);
        audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
        audioRef.current = null;
      };
    }
  }, [data.audio]);

  const handlePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      void audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current || !progressBarRef.current || !duration) return;

    const rect = progressBarRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const clickPercentage = Math.min(Math.max(clickX / width, 0), 1);
    const newTime = clickPercentage * duration;

    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!audioRef.current || !duration) return;

    if (e.key === "ArrowLeft") {
      e.preventDefault();
      const newTime = Math.max(audioRef.current.currentTime - 5, 0);
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      const newTime = Math.min(audioRef.current.currentTime + 5, duration);
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  return (
    <div
      className={cn(
        "relative flex h-full max-h-25 w-full items-stretch justify-center overflow-hidden rounded-2xl border border-border p-3",
        className,
      )}
    >
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
      <button
        onClick={data.audio ? handlePlayPause : undefined}
        disabled={!data.audio}
        type="button"
        aria-label={isPlaying ? "Pause music" : "Play music"}
        className={cn(
          "group relative z-1 w-full max-w-18.75 self-center rounded-lg transition-shadow focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none",
          data.audio && "cursor-pointer",
        )}
      >
        <img
          src={data.image}
          alt={data.title}
          loading="lazy"
          decoding="async"
          className={cn(
            "pointer-events-none relative z-1 min-h-18.75 w-full min-w-18.75 rounded-lg object-cover shadow-md transition-transform duration-300 ease-out select-none",
            data.audio && "group-hover:-translate-x-0.5 group-focus-visible:-translate-x-0.5",
            isPlaying && "-translate-x-0.5",
          )}
        />
        {data.audio && (
          <div
            className={cn(
              "absolute top-1/2 left-1/2 -z-1 size-[80%] -translate-y-1/2 transition-all duration-300",
              isPlaying
                ? "translate-x-[-10%]"
                : "translate-x-[-50%] group-hover:translate-x-[-10%] group-focus-visible:translate-x-[-10%]",
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
                <g filter={`url(#filter-blur-1_${uniqueId})`}>
                  <circle cx="55" cy="55" r="51.5" stroke="#00000" strokeOpacity="0.21" />
                  <circle cx="55" cy="55" r="47.5" stroke="#00000" strokeOpacity="0.21" />
                  <circle cx="55" cy="55" r="45.5" stroke="#00000" strokeOpacity="0.21" />
                  <circle cx="55" cy="55" r="43.5" stroke="#00000" strokeOpacity="0.21" />
                  <circle cx="55" cy="55" r="37.5" stroke="#00000" strokeOpacity="0.21" />
                  <circle cx="55" cy="55" r="34.5" stroke="#00000" strokeOpacity="0.21" />
                </g>
                <g filter={`url(#filter-blur-8_${uniqueId})`} opacity="0.4">
                  <path fill="#fff" d="M-14 38l68 19.579L-14 74V38z" />
                  <path fill="#fff" d="M123 38L55 57.579 123 74V38z" />
                  <path fill="#fff" d="M36.5 124.5l19.579-68 16.421 68h-36z" />
                  <path fill="#fff" d="M36.5-12.5l19.579 68 16.421-68h-36z" />
                </g>
              </g>
              <defs>
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
      <div className="z-10 flex w-full flex-col justify-between">
        <div className="flex items-center justify-between pl-6">
          {duration > 0 ? (
            <span className="font-mono text-[10px] text-white/50 select-none">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          ) : (
            <div />
          )}
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
          <h3 className="text-sm font-semibold tracking-[-.006em] whitespace-nowrap text-white">
            {data.title}
          </h3>
          <p className="text-sm font-medium tracking-[-.006em] whitespace-nowrap text-white/70">
            {data.artist}
          </p>
        </div>
      </div>

      {duration > 0 && (
        <div
          ref={progressBarRef}
          onClick={handleProgressClick}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          className="absolute right-0 bottom-0 left-0 h-1.5 w-full cursor-pointer bg-white/10 transition-all hover:h-2 focus-visible:h-2 focus-visible:bg-white/20 focus-visible:outline-none"
          role="slider"
          aria-valuemin={0}
          aria-valuemax={duration}
          aria-valuenow={currentTime}
          aria-label="Music progress"
        >
          <div
            className="h-full bg-[#1DB954] transition-all duration-100 ease-out"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          />
        </div>
      )}
    </div>
  );
}
