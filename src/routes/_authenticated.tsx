import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { MyNavbar } from "../app/shared/menu/MyNavbar";

export const Route = createFileRoute("/_authenticated")({
  beforeLoad: ({ context }) => {
    console.log(context, "asdasd");
    if (!context.isLoggedIn) {
      console.log("entra a redireccion", context.isLoggedIn);

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
