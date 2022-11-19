import React from "react";
import useNotesStore from "../state/notes";

const NoteInput = () => {
  const addNote = useNotesStore((state) => state.addNote);
  const handleAddNote = (e) => {
    if (e.key === "Enter") {
      addNote({
        id: Math.random(),
        note: e.target.value,
      });
      e.target.value = "";
    }
  };
  return (
    <input
      type="text"
      name="note"
      id="noteInput"
      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      placeholder="Add a note"
      aria-describedby="noteInput"
      onKeyDown={handleAddNote}
    />
  );
};

export default NoteInput;
