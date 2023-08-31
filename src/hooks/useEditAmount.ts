import { create } from "zustand";

interface EditAmountStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useEditAmount = create<EditAmountStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useEditAmount;
