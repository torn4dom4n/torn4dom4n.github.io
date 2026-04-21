import { Footer } from "@/components/footer";
import GetInTouch from "@/components/get-in-touch";
import Hero from "@/components/hero";
import NowPlaying from "@/components/now-playing";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:text-foreground focus:ring-2 focus:ring-accent"
      >
        Skip to content
      </a>
      <main id="main-content" className="isolate">
        <div className="max-w-screen overflow-x-hidden">
          <div className="grid min-h-dvh grid-cols-1 grid-rows-[1fr_auto] justify-center [--gutter-width:2.5rem] md:-mx-4 md:grid-cols-[var(--gutter-width)_minmax(0,var(--breakpoint-2xl))_var(--gutter-width)] lg:mx-0">
            <div className="relative col-start-1 row-span-full row-start-1 hidden border-x border-border [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] md:block" />

            <div className="grid gap-24 pb-24 sm:gap-40 md:pb-40">
              <Hero />
              <NowPlaying />
              <GetInTouch />
            </div>

            <div className="relative z-10 row-span-full row-start-1 hidden border-x border-border [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] md:col-start-3 md:block" />

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
