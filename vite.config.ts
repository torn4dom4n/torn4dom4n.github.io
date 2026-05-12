import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { copyFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
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
        crawlLinks: true,
      },
    }),
    tailwindcss(),
    Icons({
      compiler: "jsx",
      jsx: "react",
    }),
    {
      name: "gh-pages-404",
      apply: "build",
      closeBundle() {
        if (this.meta.watchMode) return;

        const outDir = resolve("dist/client");
        const indexHtml = resolve(outDir, "index.html");
        const fourOhFourHtml = resolve(outDir, "404.html");

        const maxRetries = 10;
        let retries = 0;

        const checkAndCopy = () => {
          if (existsSync(indexHtml)) {
            try {
              copyFileSync(indexHtml, fourOhFourHtml);
              console.log("[gh-pages-404] Copied index.html to 404.html");
            } catch (error) {
              console.error("[gh-pages-404] Failed to copy index.html to 404.html:", error);
            }
          } else if (retries < maxRetries) {
            retries++;
            setTimeout(checkAndCopy, 1000);
          }
        };

        checkAndCopy();
      },
    },
  ],
  resolve: {
    tsconfigPaths: true,
  },
});
