import { useHead, useSeoMeta } from "@unhead/react";

export function SiteHead() {
  const siteUrl =
    import.meta.env.VITE_SITE_URL ||
    (import.meta.env.VERCEL_URL ? `https://${import.meta.env.VERCEL_URL}` : "") ||
    import.meta.env.URL || // Netlify
    "https://torn4dom4n.github.io";

  const title = "Long Nhat Nguyen | Website";
  const description = "Welcome to Long Nhat Nguyen's website.";

  useHead({
    htmlAttrs: {
      lang: "en",
    },
    link: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "mask-icon", href: "/favicon.svg", color: "#FFFFFF" },
      { rel: "icon", type: "image/png", href: "/favicon-96x96.png", sizes: "96x96" },
      { rel: "shortcut icon", href: "/favicon.ico" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "canonical", href: siteUrl },
      { rel: "sitemap", href: "/sitemap-index.xml" },
      { rel: "alternate", type: "application/rss+xml", href: "/rss.xml", title: "RSS Feed" },
    ],
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#ffffff" },
    ],
  });

  useSeoMeta({
    title,
    description,
    keywords: "Long Nhat Nguyen, Portfolio",
    author: "Long Nhat Nguyen",
    robots: "index, follow, max-image-preview:large",
    ogTitle: title,
    ogDescription: description,
    ogType: "website",
    ogUrl: siteUrl,
    ogSiteName: title,
    ogImage: `${siteUrl}/og-image.jpg`,
    ogImageAlt: "Hello humans, my name is Long Nhat Nguyen",
    twitterCard: "summary_large_image",
    twitterSite: "@torn4dom4n",
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: `${siteUrl}/og-image.jpg`,
    twitterImageAlt: "Hello humans, my name is Long Nhat Nguyen",
  });

  return null;
}
