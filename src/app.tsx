import { NextUIProvider } from "@nextui-org/react";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import useAuth from "./features/authentication/hooks/useAuth";
import { routeTree } from "./routeTree.gen";
import { useEffect } from "react";
import { MyCircularProgress } from "./shared/components/MyCircularProgress";

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const router = createRouter({
  routeTree,
  context: { user: undefined!, isLoggedIn: false, errorMessage: "" },
});

function App() {
  const { isLoggedIn, user, isLoading, handleLogin, errorMessage } = useAuth();

  useEffect(() => {
    if (!isLoggedIn) {
      handleLogin();
    }
  }, [isLoggedIn, handleLogin]);
  return (
    <NextUIProvider>
      {isLoading ? (
        <div className="w-full h-screen flex flex-col items-center justify-center gap-2">
          <MyCircularProgress
            classNames={{ svg: "w-24 h-24" }}
            color="secondary"
          />
          <span>Loading...</span>
        </div>
      ) : (
        <>
          <RouterProvider
            router={router}
            context={{ isLoggedIn, user, errorMessage }}
          />
        </>
      )}
    </NextUIProvider>
  );
}

export default App;
