import { createFileRoute } from "@tanstack/react-router";

import NotFound from "@/components/not-found";

// Wildcard fallback route mapping all unresolved URLs to NotFound component
export const Route = createFileRoute("/$")({
  component: NotFound,
});
