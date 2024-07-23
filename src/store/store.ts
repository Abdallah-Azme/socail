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
  // sign in dialog states
  isSigninDialogOpen: false,
  openSigninDialog: () => set({ isSigninDialogOpen: true }),
  closeSigninDialog: () => set({ isSigninDialogOpen: false }),

  // sign up dialog states
  isSignupDialogOpen: false,
  openSignupDialog: () => set({ isSignupDialogOpen: true }),
  closeSignupDialog: () => set({ isSignupDialogOpen: false }),
}));
