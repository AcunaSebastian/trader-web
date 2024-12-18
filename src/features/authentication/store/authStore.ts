import { create } from "zustand";
import { MyUser } from "../model/user";

interface AuthStore {
  isLoggedIn: boolean;
  user: MyUser;
  token: string;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  setUser: (user: MyUser) => void;
  setToken: (token: string) => void;
}

const authStore = create<AuthStore>()((set) => ({
  isLoggedIn: false,
  user: {
    id: 0,
    name: "",
    email: "",
    picture: "",
    isActive: false,
  },
  token: "",
  setToken: (token: string) => set({ token }),
  setIsLoggedIn: (isLoggedIn: boolean) => set({ isLoggedIn }),
  setUser: (user: MyUser) => set({ user }),
}));

export default authStore;
