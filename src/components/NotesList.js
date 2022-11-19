import React from "react";
import useNotesStore from "../state/notes";
import NoteItem from "./NoteItem";

const NotesList = () => {
  const notes = useNotesStore((state) => state.notes);
  return (
    <div>
      <ul>
        {notes.map((note) => (
          <NoteItem key={note.id} note={note}></NoteItem>
        ))}
      </ul>
    </div>
  );
};

export default NotesList;
