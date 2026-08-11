"use client";

import { Slider } from "@base-ui/react/slider";
import { Pause, Play } from "lucide-react";
import { type ComponentPropsWithRef, useCallback, useEffect, useRef, useState, memo } from "react";

import { cn } from "@/lib/utils";

const DEFAULT_AUDIO_SOURCE = "/music/repeat-it.mp3";
const DEFAULT_CAPTION_TRACKS = [] as const;
const DEFAULT_TRACK_TITLE = "Repeat It";
const DEFAULT_TRACK_ARTIST = "Martin Garrix & Ed Sheeran";
const DEFAULT_VOLUME = 0.78;
const REEL_SPOKES = [0, 60, 120, 180, 240, 300] as const;
const TAPE_WINDOW_DIVIDERS = [0, 1, 2, 3, 4] as const;
const CASSETTE_TEXTURE =
  "url(\"data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.92' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='0.0745 0 0 0 0 0 0.2392 0 0 0 0 0 0.3020 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";
const BUTTON_CLASSES =
  "grid aspect-square cursor-pointer place-items-center rounded-full border text-[oklch(0.99_0_0)] transition-[background-color,opacity,transform] duration-150 ease-out active:scale-[0.96] focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-white disabled:cursor-not-allowed disabled:opacity-45 disabled:active:scale-100 motion-reduce:duration-[0.01ms]";

export type CassetteCaptionTrack = {
  default?: boolean;
  label: string;
  src: string;
  srcLang: string;
};

export type CassettePlayerProps = Omit<ComponentPropsWithRef<"section">, "children"> & {
  archiveLabel?: string;
  audioSrc?: string;
  captionTracks?: readonly CassetteCaptionTrack[];
  catalogueNumber?: string;
  initialVolume?: number;
  loop?: boolean;
  onPlaybackChange?: (isPlaying: boolean) => void;
  onPlaybackError?: (error: unknown) => void;
  preload?: "auto" | "metadata" | "none";
  sideLabel?: string;
  trackTitle?: string;
  trackArtist?: string;
};

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds)) {
    return "0:00";
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

function formatDuration(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) {
    return "PT0S";
  }

  return `PT${Math.floor(seconds)}S`;
}

function normalizeVolume(volume: number) {
  return Number.isFinite(volume) ? Math.min(Math.max(volume, 0), 1) : DEFAULT_VOLUME;
}

type ReelProps = {
  className: string;
};

function Reel({ className }: ReelProps) {
  return (
    <div
      className={cn(
        "absolute top-1/2 z-3 aspect-square h-[78%] -translate-x-1/2 -translate-y-1/2",
        className,
      )}
    >
      <svg
        aria-hidden="true"
        style={{ transform: "rotate(var(--reel-rotation, 0deg))" }}
        className="absolute inset-0 origin-center rounded-full will-change-transform motion-reduce:!rotate-0"
        viewBox="0 0 100 100"
      >
        <circle className="fill-white" cx="50" cy="50" r="48" />
        {REEL_SPOKES.map((spokeRotation) => (
          <path
            className="fill-[var(--reel-teeth)] stroke-[var(--reel-tooth-stroke)] [stroke-width:1.25] [filter:drop-shadow(0_1px_1px_rgba(0,0,0,0.32))] [stroke-linejoin:round]"
            d="M46 3h8v9a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2z"
            key={spokeRotation}
            transform={`rotate(${spokeRotation} 50 50)`}
          />
        ))}
        <circle
          className="fill-none stroke-[var(--reel-window-color)] [stroke-width:3]"
          cx="50"
          cy="50"
          r="48"
        />
      </svg>
    </div>
  );
}

type ScrewProps = {
  className: string;
};

function Screw({ className }: ScrewProps) {
  const slotClasses =
    "absolute top-1/2 right-[18%] left-[18%] h-[14%] -translate-y-1/2 rounded-full bg-[oklch(0.19_0_0)] shadow-[inset_0_1px_1px_oklch(0_0_0_/_0.82),0_1px_oklch(1_0_0_/_0.1)]";

  return (
    <div
      aria-hidden="true"
      className={cn(
        "absolute z-3 aspect-square w-[3.3%] rounded-full border border-[oklch(0.05_0_0)] bg-[radial-gradient(circle_at_36%_30%,oklch(0.44_0_0),oklch(0.26_0_0)_48%,oklch(0.16_0_0)_78%)] shadow-[inset_0_1px_1px_oklch(1_0_0_/_0.26),0_1px_1px_oklch(0_0_0_/_0.38)]",
        className,
      )}
    >
      <span className={cn(slotClasses, "rotate-45")} />
      <span className={cn(slotClasses, "-rotate-45")} />
    </div>
  );
}

export const CassettePlayer = memo(function CassettePlayer({
  archiveLabel = "STMPD RCRDS",
  audioSrc = DEFAULT_AUDIO_SOURCE,
  captionTracks,
  catalogueNumber = "2026",
  className,
  initialVolume = DEFAULT_VOLUME,
  loop = false,
  onPlaybackChange,
  onPlaybackError,
  preload = "metadata",
  ref,
  sideLabel = "Side A",
  trackTitle,
  trackArtist,
  ...sectionProps
}: CassettePlayerProps) {
  const resolvedCaptionTracks =
    captionTracks ?? (audioSrc === DEFAULT_AUDIO_SOURCE ? DEFAULT_CAPTION_TRACKS : []);
  const resolvedTrackTitle =
    trackTitle ?? (audioSrc === DEFAULT_AUDIO_SOURCE ? DEFAULT_TRACK_TITLE : "Untitled track");
  const resolvedTrackArtist =
    trackArtist ?? (audioSrc === DEFAULT_AUDIO_SOURCE ? DEFAULT_TRACK_ARTIST : "");
  const audioRef = useRef<HTMLAudioElement>(null);
  const cassetteRef = useRef<HTMLDivElement>(null);
  const durationRef = useRef(0);
  const isPlayingRef = useRef(false);
  const previousSourceRef = useRef(audioSrc);
  const rewindAnimationRef = useRef<number | null>(null);
  const resumeAfterRewindRef = useRef(false);
  const resumeAfterScrubRef = useRef(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackError, setPlaybackError] = useState<string | null>(null);
  const [volume] = useState(() => normalizeVolume(initialVolume));

  const updatePlaybackVisuals = useCallback((time: number) => {
    const cassette = cassetteRef.current;

    if (!cassette) {
      return;
    }

    const mediaDuration = durationRef.current;
    const progress = mediaDuration > 0 ? Math.min(Math.max(time / mediaDuration, 0), 1) : 0;

    cassette.style.setProperty("--reel-rotation", `${(time * 300) % 360}deg`);
    cassette.style.setProperty("--left-tape-scale", `${1 - progress * 0.4}`);
    cassette.style.setProperty("--right-tape-scale", `${0.6 + progress * 0.4}`);
  }, []);

  const reportPlaybackError = useCallback(
    (error: unknown, message: string) => {
      setPlaybackError(message);
      onPlaybackError?.(error);
    },
    [onPlaybackError],
  );

  const updatePlaybackState = useCallback(
    (nextIsPlaying: boolean) => {
      if (isPlayingRef.current === nextIsPlaying) {
        return;
      }

      isPlayingRef.current = nextIsPlaying;
      setIsPlaying(nextIsPlaying);
      onPlaybackChange?.(nextIsPlaying);
    },
    [onPlaybackChange],
  );

  const updateMediaDuration = useCallback(
    (audio: HTMLAudioElement) => {
      const nextDuration = Number.isFinite(audio.duration) ? audio.duration : 0;
      durationRef.current = nextDuration;
      setDuration(nextDuration);
      updatePlaybackVisuals(audio.currentTime);
    },
    [updatePlaybackVisuals],
  );

  useEffect(() => {
    const audio = audioRef.current;

    if (audio) {
      audio.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    const audio = audioRef.current;

    if (audio && audio.readyState >= 1) {
      updateMediaDuration(audio);
    }
  }, [updateMediaDuration]);

  useEffect(() => {
    if (previousSourceRef.current === audioSrc) {
      return;
    }

    previousSourceRef.current = audioSrc;

    if (rewindAnimationRef.current !== null) {
      window.cancelAnimationFrame(rewindAnimationRef.current);
      rewindAnimationRef.current = null;
    }

    const audio = audioRef.current;
    audio?.pause();
    audio?.load();
    durationRef.current = 0;
    resumeAfterRewindRef.current = false;
    resumeAfterScrubRef.current = false;
    setCurrentTime(0);
    setDuration(0);
    updatePlaybackState(false);
    setPlaybackError(null);
    updatePlaybackVisuals(0);
  }, [audioSrc, updatePlaybackState, updatePlaybackVisuals]);

  useEffect(() => {
    if (!isPlaying) {
      return;
    }

    let animationFrameId = 0;

    function syncPlaybackFrame() {
      const audio = audioRef.current;

      if (!audio || audio.paused) {
        return;
      }

      updatePlaybackVisuals(audio.currentTime);
      setCurrentTime(audio.currentTime);

      animationFrameId = window.requestAnimationFrame(syncPlaybackFrame);
    }

    animationFrameId = window.requestAnimationFrame(syncPlaybackFrame);

    return () => window.cancelAnimationFrame(animationFrameId);
  }, [isPlaying, updatePlaybackVisuals]);

  useEffect(
    () => () => {
      if (rewindAnimationRef.current !== null) {
        window.cancelAnimationFrame(rewindAnimationRef.current);
      }
    },
    [],
  );

  function cancelRewind() {
    if (rewindAnimationRef.current === null) {
      return;
    }

    window.cancelAnimationFrame(rewindAnimationRef.current);
    rewindAnimationRef.current = null;
    resumeAfterRewindRef.current = false;

    const audio = audioRef.current;

    if (audio) {
      audio.currentTime = currentTime;
      updatePlaybackVisuals(currentTime);
    }
  }

  async function togglePlayback() {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    cancelRewind();

    if (audio.paused) {
      try {
        await audio.play();
      } catch (error) {
        updatePlaybackState(false);
        reportPlaybackError(
          error,
          "Playback could not start. Check the audio source and try again.",
        );
      }
    } else {
      audio.pause();
    }
  }

  function seek(nextTime: number) {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    cancelRewind();
    const maximumTime = durationRef.current;
    const clampedTime = Math.min(Math.max(nextTime, 0), maximumTime);
    audio.currentTime = clampedTime;
    setCurrentTime(clampedTime);
    updatePlaybackVisuals(clampedTime);
  }

  function startScrubbing() {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    cancelRewind();
    resumeAfterScrubRef.current = !audio.paused;
  }

  async function finishScrubbing() {
    const audio = audioRef.current;
    const shouldResume = resumeAfterScrubRef.current;
    resumeAfterScrubRef.current = false;

    if (!audio) {
      return;
    }

    if (shouldResume && audio.paused) {
      try {
        await audio.play();
      } catch (error) {
        updatePlaybackState(false);
        reportPlaybackError(error, "Playback could not start after seeking the track.");
      }
    }
  }

  return (
    <section
      aria-label={`${resolvedTrackTitle} audio player`}
      {...sectionProps}
      className={cn(
        "[container-type:inline-size] grid min-h-[500px] w-full place-items-center overflow-hidden rounded-[13px] bg-background px-8 py-16 text-foreground [--button-bg:oklch(0.62_0_0)] [--button-border:oklch(0.79_0_0_/_0.5)] [--button-hover-bg:oklch(0.58_0_0)] [--button-text:oklch(0.99_0_0)] [--casing-bg:linear-gradient(165deg,oklch(0.22_0_0)_0%,oklch(0.14_0_0)_52%,oklch(0.08_0_0)_100%)] [--casing-border:oklch(1_0_0_/_0.05)] [--casing-shadow:0_28px_48px_oklch(0_0_0_/_0.3),0_8px_16px_oklch(0_0_0_/_0.2),inset_0_2px_2px_oklch(1_0_0_/_0.12),inset_0_-3px_6px_oklch(0_0_0_/_0.85)] [--inner-casing-border:oklch(1_0_0_/_0.05)] [--inner-casing-shadow:inset_0_0_0_1px_oklch(0_0_0_/_0.5)] [--label-bg:oklch(0.98_0_0)] [--label-border:oklch(0_0_0_/_0.08)] [--label-catalogue:oklch(0.145_0_0_/_0.7)] [--label-ink:oklch(0.145_0_0)] [--label-kicker:oklch(0.145_0_0_/_0.85)] [--label-stripe-one:oklch(0.88_0_0)] [--label-stripe-three:oklch(0.64_0_0)] [--label-stripe-two:oklch(0.76_0_0)] [--progress-indicator-bg:oklch(1_0_0)] [--progress-text-color:oklch(0.99_0_0_/_0.8)] [--progress-thumb-border:oklch(1_0_0)] [--progress-track-bg:oklch(1_0_0_/_0.2)] [--reel-teeth-stroke:oklch(0.14_0_0)] [--reel-teeth:oklch(0.18_0_0)] [--reel-window-color:oklch(0.18_0_0)] [--tape-window-casing-bg:oklch(0.31_0_0)] [--tape-window-casing-border:oklch(0.14_0_0)] [--tape-window-casing-gradient:linear-gradient(to_bottom,oklch(1_0_0_/_0.1),transparent_42%)] [--tape-window-casing-shadow:inset_0_3px_6px_oklch(0_0_0_/_0.72),0_0_0_2px_oklch(1_0_0_/_0.08)] [--trapezoid-panel-bg:color-mix(in_oklch,oklch(0.48_0_0)_20%,transparent)] max-[560px]:min-h-[480px] max-[560px]:px-3.5 max-[560px]:py-12 dark:[--label-bg:oklch(0.145_0_0)] dark:[--label-border:oklch(1_0_0_/_0.15)] dark:[--label-catalogue:oklch(0.985_0_0_/_0.7)] dark:[--label-ink:oklch(0.985_0_0)] dark:[--label-kicker:oklch(0.985_0_0_/_0.85)] dark:[--label-stripe-one:oklch(0.22_0_0)] dark:[--label-stripe-three:oklch(0.38_0_0)] dark:[--label-stripe-two:oklch(0.30_0_0)] dark:[--reel-teeth-stroke:oklch(0.35_0_0)] dark:[--reel-teeth:oklch(0.24_0_0)]",
        className,
      )}
      ref={ref}
    >
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio
        loop={loop}
        onDurationChange={(event) => updateMediaDuration(event.currentTarget)}
        onEnded={() => {
          updatePlaybackState(false);
        }}
        onError={(event) => {
          reportPlaybackError(event.currentTarget.error, "This audio track could not be loaded.");
        }}
        onLoadedMetadata={(event) => {
          updateMediaDuration(event.currentTarget);
          setPlaybackError(null);
        }}
        onPause={() => {
          updatePlaybackState(false);
        }}
        onPlay={() => {
          updatePlaybackState(true);
          setPlaybackError(null);
        }}
        onTimeUpdate={(event) => {
          setCurrentTime(event.currentTarget.currentTime);
          updatePlaybackVisuals(event.currentTarget.currentTime);
        }}
        preload={preload}
        ref={audioRef}
        src={audioSrc}
      >
        {resolvedCaptionTracks.map((captionTrack) => (
          <track
            default={captionTrack.default}
            key={`${captionTrack.srcLang}-${captionTrack.src}`}
            kind="captions"
            label={captionTrack.label}
            src={captionTrack.src}
            srcLang={captionTrack.srcLang}
          />
        ))}
      </audio>

      <div className="w-full max-w-[530px]">
        <div
          className="relative aspect-[1.58] w-full overflow-hidden rounded-[18px] border border-[var(--casing-border)] shadow-[var(--casing-shadow)] [--left-tape-scale:1] [--reel-rotation:0deg] [--right-tape-scale:0.6] max-[560px]:rounded-xl"
          style={{ backgroundImage: "var(--casing-bg)" }}
          ref={cassetteRef}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-1.5 rounded-[13px] border border-[var(--inner-casing-border)] shadow-[var(--inner-casing-shadow)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-100 mix-blend-screen"
            style={{ backgroundImage: CASSETTE_TEXTURE }}
          />
          <Screw className="top-[4%] left-[2.53%]" />
          <Screw className="top-[4%] right-[2.53%]" />
          <Screw className="bottom-[4%] left-[2.53%]" />
          <Screw className="right-[2.53%] bottom-[4%]" />

          <div className="[container-type:inline-size] absolute top-[9.5%] right-[8.5%] bottom-[34%] left-[8.5%] z-1 overflow-clip rounded-[9px] border-4 border-transparent bg-[var(--label-bg)] text-[var(--label-ink)] shadow-[inset_0_0_12px_oklch(0.38_0_0_/_0.12)] [overflow-clip-margin:border-box] max-[560px]:rounded-md">
            <div className="relative z-2 mx-4 mt-3 flex items-stretch justify-between">
              <div className="grid min-w-0 content-between gap-y-1">
                <span className="relative z-2 flex items-baseline justify-between font-mono text-[clamp(8px,2.5cqw,11px)] leading-none font-bold tracking-[0.12em] text-[var(--label-kicker)] uppercase">
                  {archiveLabel}
                </span>
                <span className="relative z-2 block truncate font-sans text-[clamp(12px,4.6cqw,20px)] leading-none font-semibold tracking-[-0.04em]">
                  {resolvedTrackTitle}
                </span>
                {resolvedTrackArtist ? (
                  <span className="relative z-2 block truncate font-mono text-[clamp(8px,2.3cqw,10px)] leading-none font-bold tracking-[0.04em] text-[var(--label-kicker)]">
                    {resolvedTrackArtist}
                  </span>
                ) : null}
              </div>

              <div className="ml-2 grid shrink-0 content-between justify-items-end gap-y-2 font-mono leading-none font-bold uppercase">
                <span className="rounded-full border border-[var(--label-ink)] bg-[var(--label-ink)] px-[7px] py-1 text-[clamp(8px,2.5cqw,11px)] tracking-[0.08em] text-[var(--label-bg)]">
                  {sideLabel}
                </span>
                <span className="font-mono text-[clamp(7px,2.2cqw,10px)] tracking-[0.08em] text-[var(--label-catalogue)]">
                  {catalogueNumber}
                </span>
              </div>
            </div>

            <div className="relative mt-4 h-[34%] max-[560px]:h-[31%]">
              <div
                aria-hidden="true"
                className="absolute -inset-x-1 top-1/2 grid h-[58%] -translate-y-1/2 grid-rows-3 gap-y-1"
              >
                <span className="bg-[var(--label-stripe-one)]" />
                <span className="bg-[var(--label-stripe-two)]" />
                <span className="bg-[var(--label-stripe-three)]" />
              </div>

              <div className="[container-type:size] absolute inset-x-[17.5%] inset-y-0 z-3 overflow-hidden rounded-full bg-[var(--reel-window-color)] bg-[linear-gradient(oklch(1_0_0_/_0.13),transparent_45%)] shadow-[0_0_0_4px_var(--label-border),inset_0_3px_8px_oklch(0_0_0_/_0.58)]">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-25 mix-blend-multiply"
                  style={{ backgroundImage: CASSETTE_TEXTURE }}
                />
                <div
                  aria-hidden="true"
                  className="absolute top-[12%] right-[28%] bottom-[12%] left-[28%] z-2 flex items-center justify-evenly overflow-hidden rounded-[3px] border-2 border-[var(--tape-window-casing-border)] bg-[var(--tape-window-casing-bg)] bg-[var(--tape-window-casing-gradient)] shadow-[var(--tape-window-casing-shadow)]"
                >
                  <span className="absolute top-1/2 left-[calc(13.26%-28%)] aspect-square h-[360%] -translate-x-1/2 -translate-y-1/2 scale-[var(--left-tape-scale)] rounded-full border border-[oklch(0.09_0_0)] bg-[repeating-radial-gradient(circle,oklch(0.05_0_0)_0_2px,oklch(0.16_0_0)_2px_4px)] shadow-[inset_0_0_5px_oklch(0_0_0_/_0.7),0_1px_2px_oklch(0_0_0_/_0.5)] will-change-transform" />
                  <span className="absolute top-1/2 left-[calc(72%-13.26%)] aspect-square h-[360%] -translate-x-1/2 -translate-y-1/2 scale-[var(--right-tape-scale)] rounded-full border border-[oklch(0.09_0_0)] bg-[repeating-radial-gradient(circle,oklch(0.05_0_0)_0_2px,oklch(0.16_0_0)_2px_4px)] shadow-[inset_0_0_5px_oklch(0_0_0_/_0.7),0_1px_2px_oklch(0_0_0_/_0.5)] will-change-transform" />
                  {TAPE_WINDOW_DIVIDERS.map((divider) => (
                    <span
                      className="relative z-1 h-[42%] w-0.5 bg-[oklch(0.88_0_0_/_0.28)]"
                      key={divider}
                    />
                  ))}
                </div>
                <Reel className="left-[13.26%]" />
                <Reel className="left-[calc(100%-13.26%)]" />
              </div>
            </div>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-1 z-10 rounded-[inherit] border-4 border-[var(--label-border)]"
            />
          </div>

          <div className="absolute right-[8.5%] bottom-[19%] left-[8.5%] z-5 flex items-center gap-x-3 font-sans text-xs leading-4 font-normal text-[var(--progress-text-color)] tabular-nums">
            <span>
              <span className="sr-only">Elapsed time </span>
              <time dateTime={formatDuration(currentTime)}>{formatTime(currentTime)}</time>
            </span>

            <Slider.Root
              disabled={duration <= 0}
              largeStep={Math.min(Math.max(duration / 10, 1), 10)}
              max={Math.max(duration, 0.01)}
              min={0}
              onValueCommitted={finishScrubbing}
              onValueChange={seek}
              className="flex-1"
              step={0.01}
              thumbAlignment="edge"
              value={Math.min(currentTime, Math.max(duration, 0.01))}
            >
              <Slider.Control
                className="flex h-6 w-full cursor-pointer touch-none items-center data-disabled:cursor-default"
                onPointerCancel={finishScrubbing}
                onPointerDown={startScrubbing}
              >
                <Slider.Track className="relative h-[3px] w-full translate-y-0.5 rounded-full bg-[var(--progress-track-bg)]">
                  <Slider.Indicator className="h-full rounded-full bg-[var(--progress-indicator-bg)]" />
                  <Slider.Thumb
                    getAriaLabel={() => `Seek through ${resolvedTrackTitle}`}
                    getAriaValueText={(_formattedValue, value) =>
                      `${formatTime(value)} of ${formatTime(duration)}`
                    }
                    className="size-[13px] rounded-full border-2 border-[oklch(0.64_0_0)] bg-[var(--progress-indicator-bg)] shadow-[0_1px_4px_oklch(0.24_0_0_/_0.38)] outline-none has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-[3px] has-[:focus-visible]:outline-[oklch(0.145_0_0)] dark:has-[:focus-visible]:outline-[oklch(0.985_0_0)]"
                  />
                </Slider.Track>
              </Slider.Control>
            </Slider.Root>

            <span>
              <span className="sr-only">Total time </span>
              <time dateTime={formatDuration(duration)}>{formatTime(duration)}</time>
            </span>
          </div>

          <div className="absolute right-[27%] bottom-[3.5%] left-[27%] z-4 flex h-[16%] items-center justify-center bg-[var(--trapezoid-panel-bg)] px-[12%] shadow-[inset_0_3px_8px_oklch(0_0_0_/_0.5)] [clip-path:polygon(13%_0,87%_0,100%_100%,0_100%)]">
            <button
              aria-label={isPlaying ? `Pause ${resolvedTrackTitle}` : `Play ${resolvedTrackTitle}`}
              className={cn(
                BUTTON_CLASSES,
                "w-[clamp(30px,8.2cqw,43px)] border-[var(--button-border)] bg-[var(--button-bg)] text-[var(--button-text)] shadow-[0_3px_8px_oklch(0_0_0_/_0.32),inset_0_1px_0_oklch(1_0_0_/_0.25)] hover:bg-[var(--button-hover-bg)]",
              )}
              onClick={togglePlayback}
              type="button"
            >
              {isPlaying ? (
                <Pause aria-hidden size={18} fill="currentColor" stroke="none" />
              ) : (
                <Play aria-hidden size={18} fill="currentColor" stroke="none" />
              )}
            </button>
          </div>
        </div>

        {playbackError ? (
          <p className="mt-3 text-center text-sm text-red-700 dark:text-red-400" role="alert">
            {playbackError}
          </p>
        ) : null}
      </div>
    </section>
  );
});
