import { create } from "zustand";

interface EditPayeeStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useEditPayee = create<EditPayeeStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useEditPayee;
