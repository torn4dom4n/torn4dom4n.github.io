import tailwindcss from "@tailwindcss/vite";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import Icons from "unplugin-icons/vite";
import vinext from "vinext";
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
      const outPath = join("out", "robots.txt");
      mkdirSync(dirname(outPath), { recursive: true });
      writeFileSync(outPath, robots);
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
    vinext({
      appDir: "./src",
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
