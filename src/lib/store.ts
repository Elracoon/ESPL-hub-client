import { create } from "zustand";

const savedToken = sessionStorage.getItem("token");
const username = sessionStorage.getItem("username");

interface Store {
  token: boolean;
  isDeleting: boolean;
  isUpdating: boolean;
  isLoading: boolean;
  isCreating: boolean;
  username: string;
  firstLetterUsername: string;
  haveNotifs: boolean;
  signIn: () => void;
  signOut: () => void;
  setIsDeleting: (value: boolean) => void;
  setIsUpdating: (value: boolean) => void;
  setIsLoading: (value: boolean) => void;
  setIsCreating: (value: boolean) => void;
  setUsername: (value: string) => void;
  setFirstLetterUsername: (value: string) => void;
  setHaveNotifs: (value: boolean) => void;
}

const useStore = create<Store>((set) => ({
  token: savedToken ? JSON.parse(savedToken) : false,
  isDeleting: false,
  isUpdating: false,
  isLoading: false,
  isCreating: false,
  username: username ? JSON.parse(username) : "",
  haveNotifs: false,
  firstLetterUsername: username ? username[1].toUpperCase() : "",
  signIn: () => {
    set({ token: true });
    sessionStorage.setItem("token", JSON.stringify(true));
  },
  signOut: () => {
    set({ token: false });
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("firstName");
  },
  setIsDeleting: (value: boolean) => set({ isDeleting: value }),
  setIsUpdating: (value: boolean) => set({ isUpdating: value }),
  setIsLoading: (value: boolean) => set({ isLoading: value }),
  setIsCreating: (value: boolean) => set({ isCreating: value }),
  setUsername: (value: string) => {
    set({ username: value });
    sessionStorage.setItem("username", JSON.stringify(value));
  },
  setHaveNotifs: (value: boolean) => set({ haveNotifs: value }),
  setFirstLetterUsername: (value: string) =>
    set({ firstLetterUsername: value }),
}));

export default useStore;
