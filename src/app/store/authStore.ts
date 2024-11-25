import { create } from "zustand";
import { User } from "../domain/user";

interface AuthStore {
  isLoggedIn: boolean;
  user: User;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  setUser: (user: User) => void;
}

const authStore = create<AuthStore>()((set) => ({
  isLoggedIn: false,
  user: {
    name: "",
    email: "",
    picture: "",
  },
  setIsLoggedIn: (isLoggedIn: boolean) => set({ isLoggedIn }),
  setUser: (user: User) => set({ user }),
}));

export default authStore;
