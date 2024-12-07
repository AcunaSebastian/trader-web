import { useAuth0 } from "@auth0/auth0-react";
import { useCallback, useState } from "react";
import { MyUser } from "../domain/user";
import { loginService } from "../services/auth/login-service";
import authStore from "../store/authStore";

export interface UseAuth {
  isLoggedIn: boolean;
  user: MyUser;
  errorMessage: string;
}

function useAuth() {
  const {
    isLoading: authLoading,
    user: authUser,
    logout,

    getAccessTokenSilently,
  } = useAuth0();
  const { setUser, setIsLoggedIn, isLoggedIn, user, setToken, token } =
    authStore();
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogout = useCallback(() => {
    setToken("");
    setIsLoggedIn(false);
    logout({ logoutParams: { returnTo: window.location.origin } });
  }, [logout, setToken, setIsLoggedIn]);

  const handleLogin = useCallback(async () => {
    try {
      // setIsLoading(true);
      if (authLoading) {
        return;
      }
      const payload = {
        name: authUser?.name ?? "",
        email: authUser?.email ?? "",
        picture: authUser?.picture ?? "",
      };

      const { ok, message, data } = await loginService(payload);

      if (!ok) {
        setErrorMessage(message);
        setIsLoggedIn(ok);
        setToken("");
        setIsLoading(false);
        return;
      }

      setToken(await getAccessTokenSilently());
      setIsLoggedIn(ok);
      setUser(data!.user);
      setIsLoading(false);
    } catch (error) {
      let errorMsg = "Error inesperado";
      if (error instanceof Error) {
        errorMsg = error.message;
      }

      setIsLoggedIn(false);
      setErrorMessage(errorMsg);
      setIsLoading(false);
    }
  }, [
    setUser,
    setIsLoggedIn,
    authLoading,
    authUser,
    setToken,
    getAccessTokenSilently,
  ]);

  return {
    isLoggedIn,
    user,
    isLoading,
    errorMessage,
    token,

    handleLogin,
    handleLogout,
  };
}

export default useAuth;
