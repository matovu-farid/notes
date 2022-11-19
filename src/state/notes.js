import create from "zustand";
import { immer } from "zustand/middleware/immer";

const useNotesStore = create(
  immer((set, get) => ({
    notes: {},
    addNotes: (note) =>
      set(({ notes }) => {
        notes[note.id] = note;
      }),
    selectNote: (id) => {
      set(({ notes }) => {
        notes[id].selected = !notes[id].selected;
      });
    },

    updateNote: (note) => {
      set(({ notes }) => {
        notes[note.id] = note;
      });
    },
    removeNotes: () => {
      return set(({ notes }) => {
        notes = Object.keys(notes).map((id) => {
          delete notes[id];
        });
      });
    },
  }))
);
Object.keys();

export default useNotesStore;
