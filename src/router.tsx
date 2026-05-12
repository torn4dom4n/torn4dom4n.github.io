import { createRouter as createTanStackRouter } from "@tanstack/react-router";

import NotFound from "@/components/not-found";
import { routeTree } from "@/routeTree.gen";

export function createRouter() {
  const router = createTanStackRouter({
    routeTree,
    defaultNotFoundComponent: () => <NotFound />,
    scrollRestoration: true,
  });

  return router;
}

export const getRouter = createRouter;

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof createRouter>;
  }
}
