import { useAuth0, User } from "@auth0/auth0-react";
import { useCallback, useEffect } from "react";
import authStore from "../store/authStore";

export interface UseAuth {
  isLoggedIn: boolean;
  user: User;
}

function useAuth() {
  const { isAuthenticated, isLoading, user: authUser, logout } = useAuth0();
  const isLoggedIn = authStore((state) => state.isLoggedIn);
  const user = authStore((state) => state.user);
  const { setUser, setIsLoggedIn } = authStore();

  const handleLogin = useCallback(
    (user: User) => {
      setUser({
        email: user.email ?? "",
        name: user.name ?? "",
        picture: user.picture ?? "",
      });
      setIsLoggedIn(true);
    },
    [setUser, setIsLoggedIn]
  );

  const handleLogout = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
  };

  useEffect(() => {
    if (isAuthenticated) {
      handleLogin(authUser!);
    }
  }, [isAuthenticated, authUser, handleLogin]);

  return {
    isLoggedIn,
    user,
    isLoading,

    handleLogin,
    handleLogout,
  };
}

export default useAuth;
