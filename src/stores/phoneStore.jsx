import { create } from "zustand";

const phoneStore = create((set) => ({
  phoneBook: [],
  addContact: (name, phoneNumber) =>
    set((state) => ({
      phoneBook: [
        ...state.phoneBook,
        { id: Date.now(), name, phoneNumber, editMode: false },
      ],
    })),
  deleteContact: (id) =>
    set((state) => ({
      phoneBook: state.phoneBook.filter((item) => item.id !== id),
    })),
  changeContact: (id, name, phoneNumber) =>
    set((state) => ({
      phoneBook: state.phoneBook.map((item) =>
        item.id === id
          ? { ...item, id, name, phoneNumber, editMode: !item.editMode }
          : item
      ),
    })),
}));
export default phoneStore;
