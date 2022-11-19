import React from "react";
import useNotesStore from "../state/notes";

const NoteInput = () => {
  const addNote = useNotesStore((state) => state.addNote);
  const notesLength = useNotesStore((state) => state.notesLength());
  const handleAddNote = (e) => {
    if (e.target.value === "") return;

    if (notesLength >= 6) return;
    if (e.key === "Enter") {
      addNote({
        id: Math.random(),
        text: e.target.value,
        selected: false,
      });
      e.target.value = "";
    }
  };
  return (
    <input
      type="text"
      name="note"
      id="noteInput"
      className=" p-2 block w-full bg-transparent text-gray-600   shadow-sm focus:border-white focus:ring-white sm:text-sm"
      placeholder="Add a note"
      aria-describedby="noteInput"
      onKeyDown={handleAddNote}
    />
  );
};

export default NoteInput;
