import { create } from "zustand";

const savedToken = sessionStorage.getItem("token");
const username = sessionStorage.getItem("username");

interface Store {
  token: string;
  isDeleting: boolean;
  isUpdating: boolean;
  isLoading: boolean;
  isCreating: boolean;
  username: string;
  haveNotifs: boolean;
  setIsDeleting: (value: boolean) => void;
  setIsUpdating: (value: boolean) => void;
  setIsLoading: (value: boolean) => void;
  setIsCreating: (value: boolean) => void;
  setUsername: (value: string) => void;
  setHaveNotifs: (value: boolean) => void;
  setToken: (value: string) => void;
}

const useStore = create<Store>((set) => ({
  token: savedToken || "",
  isDeleting: false,
  isUpdating: false,
  isLoading: false,
  isCreating: false,
  username: username || "",
  haveNotifs: false,
  setToken: (value: string) => {
    set({ token: value });
    sessionStorage.setItem("token", value);
  },
  setIsDeleting: (value: boolean) => set({ isDeleting: value }),
  setIsUpdating: (value: boolean) => set({ isUpdating: value }),
  setIsLoading: (value: boolean) => set({ isLoading: value }),
  setIsCreating: (value: boolean) => set({ isCreating: value }),
  setUsername: (value: string) => {
    set({ username: value });
    sessionStorage.setItem("username", value);
  },
  setHaveNotifs: (value: boolean) => set({ haveNotifs: value }),
}));

export default useStore;
