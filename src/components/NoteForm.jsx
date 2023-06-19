
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNote, updateNote, setEditingNoteId } from '../redux/reducers';

const NoteForm = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [text, setText] = useState('');
  const editingNoteId = useSelector((state) => state.notebook.editingNoteId);
  const notes = useSelector((state) => state.notebook.notes);

  const dispatch = useDispatch();

  useEffect(() => {
    if (editingNoteId) {
      const note = notes.find((note) => note.id === editingNoteId);
      if (note) {
        setTitle(note.title);
        setDate(note.date);
        setText(note.text);
      }
    }
  }, [editingNoteId, notes]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingNoteId) {
      const updatedNote = {
        id: editingNoteId,
        title,
        date,
        text,
      };
      dispatch(updateNote(updatedNote));
      dispatch(setEditingNoteId(null));
    } else {
      const newNote = {
        id: Date.now(),
        title,
        date,
        text,
      };
      dispatch(addNote(newNote));
    }

    setTitle('');
    setDate('');
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Note title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <textarea
        placeholder="Note text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">{editingNoteId ? 'Update Note' : 'Add Note'}</button>
    </form>
  );
};

export default NoteForm;
