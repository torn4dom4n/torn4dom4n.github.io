import { createFileRoute } from "@tanstack/react-router";

import GetInTouch from "@/components/get-in-touch";
import Hero from "@/components/hero";
import NowPlaying from "@/components/now-playing";

// Home/Landing page route definition
export const Route = createFileRoute("/")({
  component: Home,
});

// Home Page main content layout
function Home() {
  return (
    <div className="grid gap-24 pb-24 sm:gap-40 md:pb-40">
      <Hero />
      <NowPlaying />
      <GetInTouch />
    </div>
  );
}
