import { NextUIProvider } from "@nextui-org/react";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import AuthObserver from "./app/components/auth-observer";
import useAuth from "./app/hooks/useAuth";
import { routeTree } from "./routeTree.gen";
import { useAuth0 } from "@auth0/auth0-react";

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const router = createRouter({
  routeTree,
  context: { user: undefined!, isLoggedIn: false },
});

function App() {
  const { isLoading } = useAuth0();
  const { isLoggedIn, user } = useAuth();
  return (
    <NextUIProvider>
      {isLoading ? (
        <div>loading</div>
      ) : (
        <>
          <AuthObserver />
          <RouterProvider router={router} context={{ isLoggedIn, user }} />
        </>
      )}
    </NextUIProvider>
  );
}

export default App;
