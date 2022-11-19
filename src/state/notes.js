import create from "zustand";
import { immer } from "zustand/middleware/immer";

const useNotesStore = create(
  immer((set, get) => ({
    notes: JSON.parse(localStorage.getItem("notes")) || {},
    addNote: (note) => {
      set(({ notes }) => {
        notes[note.id] = note;
      });
      localStorage.setItem("notes", JSON.stringify(get().notes));
    },
    selectNote: (id) => {
      set(({ notes }) => {
        notes[id].selected = !notes[id].selected;
      });
    },

    updateNote: (note) => {
      set(({ notes }) => {
        notes[note.id] = note;
      });
      localStorage.setItem("notes", JSON.stringify(get().notes));
    },
    removeNotes: () => {
      return set(({ notes }) => {
        Object.keys(notes).forEach((id) => {
          if (notes[id].selected) delete notes[id];
        });
      });
    },
    notesArray: () => {
      return Object.values(get().notes);
    },
    selectedNotes: () => {
      return Object.values(get().notes).filter((note) => note.selected);
    },
    removeNote: (id) => {
      set(({ notes }) => {
        delete notes[id];
      });
    },
    notesLength: () => {
      return Object.keys(get().notes).length;
    },
  }))
);

export default useNotesStore;
