import { RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import { hydrateRoot, createRoot } from "react-dom/client";

import { createRouter } from "./router";

const router = createRouter();

const rootElement = document.getElementById("root")!;
if (rootElement.innerHTML) {
  hydrateRoot(
    rootElement,
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  );
} else {
  createRoot(rootElement).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  );
}
