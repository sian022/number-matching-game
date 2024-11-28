import { create } from "zustand";

const useNumberStore = create((set) => ({
  maxNumber: 0,
  setMaxNumber: (maxNumber: number) => set({ maxNumber }),
}));

export { useNumberStore };
