import { createFileRoute } from "@tanstack/react-router";

import NotFound from "@/components/not-found";

export const Route = createFileRoute("/$")({
  component: NotFoundRoute,
});

function NotFoundRoute() {
  return (
    <div className="md:col-start-2">
      <NotFound />
    </div>
  );
}
