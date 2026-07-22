import { createFileRoute } from "@tanstack/react-router";

import NotFound from "@/components/not-found";

/**
 * Catch-all wild card route ("/$").
 * Maps any invalid or unrecognized URI path to the reusable `NotFound` component block.
 */
export const Route = createFileRoute("/$")({
  component: NotFound,
});
