import React from "react";
import useNotesStore from "../state/notes";

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
  return (
    <li className="p-2 flex items-center w-full">
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
      <button onClick={() => removeNote(note.id)} className="bg-transparent">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-gray-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </button>
    </li>
  );
};

export default NoteItem;
