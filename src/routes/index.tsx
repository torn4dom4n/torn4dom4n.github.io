import { createFileRoute } from "@tanstack/react-router";

import GetInTouch from "@/components/get-in-touch";
import Hero from "@/components/hero";
import NowPlaying from "@/components/now-playing";

/**
 * Route definition for the Home/Landing Route (path: "/").
 * Renders the main entry point page.
 */
export const Route = createFileRoute("/")({
  component: Home,
});

/**
 * Home Page Component
 *
 * Arranges the primary block sections of the website vertically:
 * 1. Hero Block: Personal intro, name badge highlights, and minimal biography tagline.
 * 2. NowPlaying Block: Selected music tracks and an interactive audio-playable SpotifyCard.
 * 3. GetInTouch Block: Curated socials list presented in an interactive grid.
 *
 * Spacing between blocks is managed responsively via standard logical gaps (`gap-24 sm:gap-40`).
 */
function Home() {
  return (
    <div className="grid gap-24 pb-24 sm:gap-40 md:pb-40">
      <Hero />
      <NowPlaying />
      <GetInTouch />
    </div>
  );
}
