import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@tanstack/react-router";

import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/globals.css";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Long Nhat Nguyen" },
      { name: "description", content: "Welcome to Long Nhat Nguyen's website." },
      { name: "keywords", content: "Long Nhat Nguyen, Portfolio" },
      { name: "author", content: "Long Nhat Nguyen" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: "Long Nhat Nguyen" },
      { property: "og:description", content: "Welcome to Long Nhat Nguyen's website." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://torn4dom4n.github.io" },
      { property: "og:site_name", content: "Long Nhat Nguyen" },
      { property: "og:image", content: "https://torn4dom4n.github.io/og-image.jpg" },
      { property: "og:image:alt", content: "Hello humans, my name is Long Nhat Nguyen" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@torn4dom4n" },
      { name: "twitter:title", content: "Long Nhat Nguyen" },
      { name: "twitter:description", content: "Welcome to Long Nhat Nguyen's website." },
      { name: "twitter:image", content: "https://torn4dom4n.github.io/og-image.jpg" },
      { name: "twitter:image:alt", content: "Hello humans, my name is Long Nhat Nguyen" },
      { name: "theme-color", content: "#ffffff" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "mask-icon", href: "/favicon.svg", color: "#FFFFFF" },
      { rel: "icon", type: "image/png", href: "/favicon-96x96.png", sizes: "96x96" },
      { rel: "shortcut icon", href: "/favicon.ico" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "canonical", href: "https://torn4dom4n.github.io" },
      { rel: "sitemap", href: "/sitemap-index.xml" },
      { rel: "alternate", type: "application/rss+xml", href: "/rss.xml", title: "RSS Feed" },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:text-foreground focus:ring-2 focus:ring-accent"
          >
            Skip to content
          </a>
          <main id="main-content" className="isolate">
            <div className="max-w-screen overflow-x-hidden">
              <div className="grid min-h-dvh grid-cols-1 grid-rows-[1fr_auto] justify-center [--gutter-width:2.5rem] md:-mx-4 md:grid-cols-[var(--gutter-width)_minmax(0,var(--breakpoint-2xl))_var(--gutter-width)] lg:mx-0">
                <div className="relative col-start-1 row-span-full row-start-1 hidden border-x border-border md:block" />

                <Outlet />

                <div className="relative row-span-full row-start-1 hidden border-x border-border md:col-start-3 md:block" />

                <div className="md:col-start-2">
                  <Footer className="px-4 md:px-6 lg:px-8" />
                </div>
              </div>
            </div>
          </main>
          <ScrollRestoration />
        </ThemeProvider>
        <Scripts />
      </body>
    </html>
  );
}
