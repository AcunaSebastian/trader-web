import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { UseAuth } from "../features/authentication/hooks/useAuth";

export const Route = createRootRouteWithContext<UseAuth>()({
  component: () => <Outlet />,
});
