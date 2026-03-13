import { FooterMeta } from "@/components/footer";
import Hero from "@/components/hero";
import LetsConnect from "@/components/lets-connect";
import { SiteHead } from "@/components/site-head";
import { ThemeProvider } from "@/components/theme-provider";

function Home() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SiteHead />
      <main className="isolate">
        <div className="max-w-screen overflow-x-hidden">
          <div className="grid min-h-dvh grid-cols-1 grid-rows-[1fr_1px_auto_1px_auto] justify-center [--gutter-width:2.5rem] md:-mx-4 md:grid-cols-[var(--gutter-width)_minmax(0,var(--breakpoint-2xl))_var(--gutter-width)] lg:mx-0">
            <div className="col-start-1 row-span-full row-start-1 hidden border-x border-x-(--pattern-fg) bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 md:block dark:[--pattern-fg:var(--color-white)]/10" />

            <div className="grid gap-24 pb-24 text-gray-950 sm:gap-40 md:pb-40 dark:text-white">
              <Hero />
              <LetsConnect />
            </div>

            <div className="row-span-full row-start-1 hidden border-x border-x-(--pattern-fg) bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 md:col-start-3 md:block dark:[--pattern-fg:var(--color-white)]/10" />

            <div className="col-start-1 row-start-5 grid md:col-start-2">
              <FooterMeta className="px-4 md:px-6 lg:px-8" />
            </div>
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
}

export default Home;
