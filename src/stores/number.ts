import { create } from "zustand";

interface NumberState {
  maxNumber: number;
  setMaxNumber: (maxNumber: number) => void;
}

const useNumberStore = create<NumberState>()((set) => ({
  maxNumber: 0,
  setMaxNumber: (maxNumber: number) => set({ maxNumber }),
}));

export { useNumberStore };
