// NoteList.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteNote } from '../redux/reducers';
import { setEditingNoteId } from '../redux/reducers';

const NoteList = () => {
  const notes = useSelector((state) => state.notebook.notes);
  const dispatch = useDispatch();
  const editingNoteId = useSelector((state) => state.notebook.editingNoteId);

  const handleDelete = (noteId) => {
    dispatch(deleteNote(noteId));
  };

  const handleEdit = (noteId) => {
    dispatch(setEditingNoteId(noteId));
  };

  return (
    <div>
      {notes.map((note) => (
        <div key={note.id}>
          <h3>{note.title}</h3>
          <p>Date: {note.date}</p>
          <p>{note.text}</p>
          <button onClick={() => handleDelete(note.id)}>Delete</button>
          <button onClick={() => handleEdit(note.id)}>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
