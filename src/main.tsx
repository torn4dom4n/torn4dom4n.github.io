import { createHead, UnheadProvider } from "@unhead/react/client";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@/styles/globals.css";
import Home from "@/pages/home";

const head = createHead();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UnheadProvider head={head}>
      <Home />
    </UnheadProvider>
  </StrictMode>,
);
