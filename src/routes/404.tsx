import { createFileRoute } from "@tanstack/react-router";

import NotFound from "@/components/not-found";

/**
 * Route definition for "/404".
 * Explicitly maps to the reusable, single source of truth `NotFound` component block.
 */
export const Route = createFileRoute("/404")({
  component: NotFound,
});
