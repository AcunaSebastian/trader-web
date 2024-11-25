import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import authStore from "../store/authStore";

const AuthObserver = () => {
  const { setIsLoggedIn, setUser, isLoggedIn } = authStore((state) => state);

  const { isAuthenticated, user: authUser } = useAuth0();

  useEffect(() => {
    console.log("en use effect de auth observer", isAuthenticated, isLoggedIn);
    setIsLoggedIn(isAuthenticated);
    if (isAuthenticated) {
      setUser({
        email: authUser?.email ?? "",
        name: authUser?.name ?? "",
        picture: authUser?.picture ?? "",
      });
    }
  }, [isAuthenticated, authUser, setUser, setIsLoggedIn, isLoggedIn]);

  return <></>;
};

export default AuthObserver;
