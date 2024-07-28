import { create } from "zustand";
export type User = {
  characterName: string;
  contactInfo: string;
  email: string;
  server: string;
  username: string;
  id: string;
};

type UserState = {
  user: null | User;
  setUser: (user: User) => void;
  clearUser: () => void;
};

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

type DialogCardState = {
  openCardId: null | string;
  openCardDialog: (id: string) => void;
  closeCardDialog: () => void;
};

type Store = DialogSigninState &
  DialogSignupState &
  DialogCardState &
  UserState;

export const useStore = create<Store>((set) => ({
  //user state
  user: null,
  setUser: (user) => set({ user: user }),
  clearUser: () => set({ user: null }),

  // sign in dialog states
  isSigninDialogOpen: false,
  openSigninDialog: () => set({ isSigninDialogOpen: true }),
  closeSigninDialog: () => set({ isSigninDialogOpen: false }),

  // sign up dialog states
  isSignupDialogOpen: false,
  openSignupDialog: () => set({ isSignupDialogOpen: true }),
  closeSignupDialog: () => set({ isSignupDialogOpen: false }),

  // card dialog
  openCardId: null,
  openCardDialog: (id) => set({ openCardId: id }),
  closeCardDialog: () => set({ openCardId: null }),
}));
