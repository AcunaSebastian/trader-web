import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import toast from "react-hot-toast";
import { MyNavbar } from "../shared/components/menu/MyNavbar";

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
  validateSearch: (search) => {
    return {
      page: search?.page ?? 1,
      limit: search?.limit ?? 10,
    };
  },
});
