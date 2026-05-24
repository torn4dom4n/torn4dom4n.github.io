import type { Metadata, Viewport } from "next";

import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { AUTHOR_NAME, SITE_NAME, SITE_URL, TWITTER_HANDLE } from "@/lib/constants";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: SITE_NAME,
  description: `Welcome to ${SITE_NAME}'s website.`,
  keywords: [SITE_NAME, "Portfolio"],
  authors: [{ name: AUTHOR_NAME }],
  robots: "index, follow, max-image-preview:large",
  openGraph: {
    title: SITE_NAME,
    description: `Welcome to ${SITE_NAME}'s website.`,
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        alt: `Hello humans, my name is ${SITE_NAME}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: TWITTER_HANDLE,
    title: SITE_NAME,
    description: `Welcome to ${SITE_NAME}'s website.`,
    images: [`${SITE_URL}/og-image.jpg`],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: SITE_URL,
    types: {
      "application/rss+xml": [{ url: "/rss.xml", title: "RSS Feed" }],
    },
  },
  other: {
    "theme-color": "#ffffff",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="mask-icon" href="/favicon.svg" color="#FFFFFF" />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="sitemap" href="/sitemap.xml" />
        <link rel="preconnect" href="https://i.scdn.co" />
        <link rel="preconnect" href="https://p.scdn.co" />
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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

                {children}

                <div className="relative row-span-full row-start-1 hidden border-x border-border md:col-start-3 md:block" />

                <div className="md:col-start-2">
                  <Footer className="px-4 md:px-6 lg:px-8" />
                </div>
              </div>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
