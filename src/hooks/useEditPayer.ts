import { create } from "zustand";

interface EditPayerStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useEditPayer = create<EditPayerStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useEditPayer;
