import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { copyFileSync } from "node:fs";
import { resolve } from "node:path";
import Icons from "unplugin-icons/vite";
import { defineConfig } from "vite-plus";

const base = process.env.BASE || "/";

// https://vite.dev/config/
export default defineConfig({
  staged: {
    "*": "vp check --fix",
  },
  fmt: {
    ignorePatterns: [
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
    ],
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
    ignorePatterns: [
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
    ],
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
  base,
  plugins: [
    react(),
    tailwindcss(),
    Icons({
      compiler: "jsx",
      jsx: "react",
    }),
    {
      name: "copy-404",
      apply: "build",
      closeBundle() {
        const distDir = resolve("dist");
        copyFileSync(resolve(distDir, "index.html"), resolve(distDir, "404.html"));
      },
    },
  ],
  resolve: {
    tsconfigPaths: true,
  },
});
