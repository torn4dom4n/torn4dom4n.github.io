import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import Icons from "unplugin-icons/vite";
import { defineConfig } from "vite-plus";

const base = process.env.BASE || "/";

const ignorePatterns = [
  "*.min.*",
  "*.map",
  "**/public",
  "**/build",
  "**/dist",
  "**/out",
  "**/.github",
  "**/.next",
  "**/.astro",
  "**/.netlify",
  "**/*.gen.*",
];

function robotsPlugin() {
  return {
    name: "robots-txt-plugin",
    closeBundle: () => {
      const siteUrl = process.env.VITE_SITE_URL || "http://localhost:5173";
      const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml`;
      writeFileSync(join("dist", "client", "robots.txt"), robots);
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  staged: {
    "*": "vp check --fix",
  },
  fmt: {
    ignorePatterns,
    sortImports: {
      groups: [
        "type-import",
        ["value-builtin", "value-external"],
        "type-internal",
        "value-internal",
        ["type-parent", "type-sibling", "type-index"],
        ["value-parent", "value-sibling", "value-index"],
        "unknown",
      ],
    },
    sortTailwindcss: {
      stylesheet: "./src/styles/globals.css",
      attributes: ["class", "className"],
      functions: ["clsx", "cn", "cva", "tv"],
    },
  },
  lint: {
    plugins: [
      "typescript",
      "unicorn",
      "react",
      "react-perf",
      "import",
      "jsx-a11y",
      "node",
      "promise",
      "vitest",
      "vue",
    ],
    ignorePatterns,
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
  base,
  plugins: [
    tanstackStart({
      prerender: {
        enabled: true,
        autoSubfolderIndex: false,
      },
      sitemap: {
        host: process.env.VITE_SITE_URL || "http://localhost:5173",
      },
    }),
    tailwindcss(),
    Icons({
      compiler: "jsx",
      jsx: "react",
    }),
    robotsPlugin(),
  ],
  resolve: {
    tsconfigPaths: true,
  },
});
