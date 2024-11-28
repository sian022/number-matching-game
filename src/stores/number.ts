import { create } from "zustand";

const useNumberStore = create((set) => ({
  maxNumber: 5,
  setMaxNumber: (maxNumber: number) => set({ maxNumber }),
  turns: 0,
  incrementTurns: () => set((state) => ({ turns: state.turns + 1 })),
}));

export default useNumberStore;
