import { create } from "zustand";

type DialogSigninState = {
  isSigninDialogOpen: boolean;
  openSigninDialog: () => void;
  closeSigninDialog: () => void;
};

type DialogSignupState = {
  isSignupDialogOpen: boolean;
  openSignupDialog: () => void;
  closeSignupDialog: () => void;
};

type Store = DialogSigninState & DialogSignupState;

export const useStore = create<Store>((set) => ({
  isSigninDialogOpen: false,
  openSigninDialog: () => set({ isSigninDialogOpen: true }),
  closeSigninDialog: () => set({ isSigninDialogOpen: false }),
  isSignupDialogOpen: true,
  openSignupDialog: () => set({ isSignupDialogOpen: true }),
  closeSignupDialog: () => set({ isSignupDialogOpen: false }),
}));
