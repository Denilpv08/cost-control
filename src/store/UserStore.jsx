import { create } from "zustand";
import { DisplayUser, EditThemeCurrency } from "../index";

export const useUsersStore = create((set, get) => ({
  datausers: [],
  displayUsers: async () => {
    const response = await DisplayUser();
    set({ datausers: response });

    return response;
  },
  editthemecurrencyuser: async (p) => {
    await EditThemeCurrency(p);
    const { displayUsers } = get();
    set(displayUsers);
  },
}));
