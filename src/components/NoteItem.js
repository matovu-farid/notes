import React from "react";
import useNotesStore from "../state/notes";

const NoteItem = ({ note }) => {
  const selectNote = useNotesStore((state) => state.selectNote);
  return (
    <li>
      <input
        id={`${note.id}-note`}
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
        onChange={() => selectNote(note.id)}
      />
      <label htmlFor={`${note.id}-note`} className="ml-3 text-sm text-gray-600">
        {note}
      </label>
    </li>
  );
};

export default NoteItem;
