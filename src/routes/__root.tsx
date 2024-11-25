import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { UseAuth } from "../app/hooks/useAuth";

export const Route = createRootRouteWithContext<UseAuth>()({
  component: () => <Outlet />,
});
