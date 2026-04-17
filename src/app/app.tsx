import GetInTouch from "@/components/get-in-touch";
import Hero from "@/components/hero";
import NowPlaying from "@/components/now-playing";
import { Footer } from "@/components/site-footer";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-black focus:ring-2 focus:ring-amber-500 dark:focus:bg-gray-800 dark:focus:text-white"
      >
        Skip to content
      </a>
      <main id="main-content" className="isolate">
        <div className="max-w-screen overflow-x-hidden">
          <div className="grid min-h-dvh grid-cols-1 grid-rows-[1fr_auto] justify-center [--gutter-width:2.5rem] md:-mx-4 md:grid-cols-[var(--gutter-width)_minmax(0,var(--breakpoint-2xl))_var(--gutter-width)] lg:mx-0">
            <div className="relative z-10 col-start-1 row-span-full row-start-1 hidden border-x border-x-(--pattern-fg) bg-grid bg-fixed [--pattern-fg:var(--color-black)]/5 md:block dark:[--pattern-fg:var(--color-white)]/10" />

            <div className="grid gap-24 pb-24 text-gray-950 sm:gap-40 md:pb-40 dark:text-white">
              <Hero />
              <NowPlaying />
              <GetInTouch />
            </div>

            <div className="relative z-10 row-span-full row-start-1 hidden border-x border-x-(--pattern-fg) bg-grid bg-fixed [--pattern-fg:var(--color-black)]/5 md:col-start-3 md:block dark:[--pattern-fg:var(--color-white)]/10" />

            <div className="md:col-start-2">
              <Footer className="px-4 md:px-6 lg:px-8" />
            </div>
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;
