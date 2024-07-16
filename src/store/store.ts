import { create } from "zustand";

interface DialogState {
  isLoginDialogOpen: boolean;
  openLoginDialog: () => void;
  closeLoginDialog: () => void;
}

export const useDialogStore = create<DialogState>((set) => ({
  isLoginDialogOpen: false,
  openLoginDialog: () => set({ isLoginDialogOpen: true }),
  closeLoginDialog: () => set({ isLoginDialogOpen: false }),
}));
