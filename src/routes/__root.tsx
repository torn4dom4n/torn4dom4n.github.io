import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@tanstack/react-router";

import { Footer } from "@/components/footer";
import NotFound from "@/components/not-found";
import { ThemeProvider } from "@/components/theme-provider";
import { AUTHOR_NAME, SITE_NAME, SITE_URL, TWITTER_HANDLE } from "@/lib/constants";
import "@/styles/globals.css";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: SITE_NAME },
      { name: "description", content: `Welcome to ${SITE_NAME}'s website.` },
      { name: "keywords", content: `${SITE_NAME}, Portfolio` },
      { name: "author", content: AUTHOR_NAME },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: SITE_NAME },
      { property: "og:description", content: `Welcome to ${SITE_NAME}'s website.` },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:image", content: `${SITE_URL}/og-image.jpg` },
      { property: "og:image:alt", content: `Hello humans, my name is ${SITE_NAME}` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: TWITTER_HANDLE },
      { name: "twitter:title", content: SITE_NAME },
      { name: "twitter:description", content: `Welcome to ${SITE_NAME}'s website.` },
      { name: "twitter:image", content: `${SITE_URL}/og-image.jpg` },
      { name: "twitter:image:alt", content: `Hello humans, my name is ${SITE_NAME}` },
      { name: "theme-color", content: "#ffffff" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "mask-icon", href: "/favicon.svg", color: "#FFFFFF" },
      { rel: "icon", type: "image/png", href: "/favicon-96x96.png", sizes: "96x96" },
      { rel: "shortcut icon", href: "/favicon.ico" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "canonical", href: SITE_URL },
      { rel: "sitemap", href: "/sitemap.xml" },
      { rel: "alternate", type: "application/rss+xml", href: "/rss.xml", title: "RSS Feed" },
    ],
  }),
  component: RootComponent,
  notFoundComponent: () => <NotFound />,
});

function RootComponent() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: AUTHOR_NAME,
    url: SITE_URL,
    sameAs: [
      `https://twitter.com/${TWITTER_HANDLE.replace("@", "")}`,
      "https://github.com/torn4dom4n",
    ],
    jobTitle: "Software Engineer",
  };

  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem("vite-ui-theme") || "system";
                  var root = document.documentElement;
                  root.classList.remove("light", "dark");

                  if (theme === "system") {
                    var systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
                      ? "dark"
                      : "light";
                    root.classList.add(systemTheme);
                  } else {
                    root.classList.add(theme);
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="scrollbar-gutter-stable">
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:inset-s-4 focus:inset-bs-4 focus:z-50 focus:rounded-sm focus:bg-background focus:ps-4 focus:pe-4 focus:pbs-2 focus:pbe-2 focus:text-foreground focus:ring-2 focus:ring-accent"
          >
            Skip to content
          </a>
          <main id="main-content" className="isolate">
            <div className="max-w-screen overflow-x-hidden">
              <div className="grid min-h-dvh grid-cols-1 grid-rows-[1fr_auto] justify-center [--gutter-width:2.5rem] md:-ms-4 md:-me-4 md:grid-cols-[var(--gutter-width)_minmax(0,var(--breakpoint-2xl))_var(--gutter-width)] lg:ms-0 lg:me-0">
                <div className="relative col-start-1 row-span-full row-start-1 hidden border-x border-border md:block" />

                <Outlet />

                <div className="relative row-span-full row-start-1 hidden border-x border-border md:col-start-3 md:block" />

                <div className="md:col-start-2">
                  <Footer className="ps-4 pe-4 md:ps-6 md:pe-6 lg:ps-8 lg:pe-8" />
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
