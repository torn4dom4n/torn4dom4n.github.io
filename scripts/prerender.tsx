import { RouterProvider, createMemoryHistory, createRouter } from "@tanstack/react-router";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import React from "react";
import { renderToString } from "react-dom/server";

// @ts-ignore
import { routeTree } from "../src/routeTree.gen";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_PATH = path.resolve(__dirname, "../dist");
const TEMPLATE_PATH = path.resolve(DIST_PATH, "index.html");

async function prerender() {
  if (!fs.existsSync(TEMPLATE_PATH)) {
    console.error("Template not found at", TEMPLATE_PATH);
    return;
  }
  const template = fs.readFileSync(TEMPLATE_PATH, "utf-8");

  const routes = ["/", "/404"];

  for (const url of routes) {
    const history = createMemoryHistory({
      initialEntries: [url],
    });

    const router = createRouter({
      routeTree,
      history,
    });

    await router.load();

    const appHtml = renderToString(React.createElement(RouterProvider, { router }));
    const html = template.replace("<!--app-html-->", appHtml);

    const fileName = url === "/" ? "index.html" : "404.html";
    fs.writeFileSync(path.resolve(DIST_PATH, fileName), html);
    console.log("Prerendered", url, "to", fileName);
  }
}

prerender().catch(console.error);
