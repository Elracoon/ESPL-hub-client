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
  firstLetterUsername: string;
  haveNotifs: boolean;
  bearerToken: string;
  setIsDeleting: (value: boolean) => void;
  setIsUpdating: (value: boolean) => void;
  setIsLoading: (value: boolean) => void;
  setIsCreating: (value: boolean) => void;
  setUsername: (value: string) => void;
  setFirstLetterUsername: (value: string) => void;
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
  firstLetterUsername: username ? username[0].toUpperCase() : "",
  bearerToken: `Bearer ${savedToken}` ?? "",
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
  setFirstLetterUsername: (value: string) =>
    set({ firstLetterUsername: value }),
}));

export default useStore;
