import { create } from "zustand";

type DialogState = {
  isLoginDialogOpen: boolean;
  openLoginDialog: () => void;
  closeLoginDialog: () => void;
};

type Store = DialogState;

export const useDialogStore = create<Store>((set) => ({
  isLoginDialogOpen: false,
  openLoginDialog: () => set({ isLoginDialogOpen: true }),
  closeLoginDialog: () => set({ isLoginDialogOpen: false }),
}));
