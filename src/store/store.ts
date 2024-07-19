import { create } from "zustand";

type DialogSignInState = {
  isLoginDialogOpen: boolean;
  openLoginDialog: () => void;
  closeLoginDialog: () => void;
};
type DialogUploadState = {
  isUploadDialogOpen: boolean;
  openUploadDialog: () => void;
  closeUploadDialog: () => void;
};

type Store = DialogSignInState & DialogUploadState;

export const useStore = create<Store>((set) => ({
  isLoginDialogOpen: false,
  openLoginDialog: () => set({ isLoginDialogOpen: true }),
  closeLoginDialog: () => set({ isLoginDialogOpen: false }),
  isUploadDialogOpen: false,
  openUploadDialog: () => set({ isUploadDialogOpen: true }),
  closeUploadDialog: () => set({ isUploadDialogOpen: false }),
}));
