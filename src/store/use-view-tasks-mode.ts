// store/useViewModeStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ViewModeState {
  isTableView: boolean;
  setIsTableView: (value: boolean) => void;
}

export const useViewTasksModeStore = create<ViewModeState>()(
  persist(
    (set) => ({
      isTableView: true,
      setIsTableView: (value) => set({ isTableView: value }),
    }),
    {
      name: "view-mode-storage", // chave no localStorage
    }
  )
);