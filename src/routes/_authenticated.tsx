import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { MyNavbar } from "../app/components/shared/menu/MyNavbar";
import toast from "react-hot-toast";

export const Route = createFileRoute("/_authenticated")({
  beforeLoad: ({ context }) => {
    if (!context.isLoggedIn) {
      if (context.errorMessage) {
        toast.error(context.errorMessage || "Error");
      }
      throw redirect({
        to: "/login",
      });
    }
  },
  component: () => (
    <>
      <MyNavbar />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
