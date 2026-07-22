import { createFileRoute } from "@tanstack/react-router";

import NotFound from "@/components/not-found";

// Dedicated 404 route displaying page not found layout
export const Route = createFileRoute("/404")({
  component: NotFound,
});
