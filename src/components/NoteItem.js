import React from "react";
import useNotesStore from "../state/notes";
import useTimeIntervalStore from "../state/time";
import Watch from "./Buttons/Watch";
import { TfiTrash } from "react-icons/tfi";

const NoteItem = ({ note }) => {
  const selectNote = useNotesStore((state) => state.selectNote);
  const updateNote = useNotesStore((state) => state.updateNote);
  const removeNote = useNotesStore((state) => state.removeNote);
  const handleEdit = (text) => {
    updateNote({
      ...note,
      text,
    });
  };
  const noteId = useTimeIntervalStore((state) => state.noteId);
  const noteColor = noteId == note.id ? "bg-blue-300 " : "";
  return (
    <li className={" p-2 flex items-center w-full " + noteColor}>
      <input
        id={`${note.id}-note`}
        type="checkbox"
        className="h-4 w-4 rounded cursor-pointer border-gray-300 text-indigo-600 focus:ring-indigo-500 "
        onChange={() => selectNote(note.id)}
      />
      <textarea
        rows={1}
        maxLength={40}
        defaultValue={note.text}
        className={
          "p-2 resize-none bg-transparent w-full ml-3 text-sm text-gray-600 " +
          (note.selected ? "line-through" : "")
        }
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleEdit(e.target.value);
          }
        }}
        onBlur={(e) => handleEdit(e.target.value)}
      ></textarea>
      <Watch noteId={note.id} />

      <button
        onClick={() => removeNote(note.id)}
        className={
          "text-gray-800 shadow-lg hover:scale-110 transition-transform gap-2 m-2 inline-flex items-center rounded-md   px-3 py-2  font-medium leading-4  "
        }
      >
        <TfiTrash />
      </button>
    </li>
  );
};

export default NoteItem;
