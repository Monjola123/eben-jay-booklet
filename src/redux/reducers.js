
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notes: [],
  editingNoteId: null,
};

const notebookSlice = createSlice({
  name: 'notebook',
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.notes.push(action.payload);
    },
    updateNote: (state, action) => {
      const { id, title, date, text } = action.payload;
      const note = state.notes.find((note) => note.id === id);
      if (note) {
        note.title = title;
        note.date = date;
        note.text = text;
      }
    },
    deleteNote: (state, action) => {
      const noteId = action.payload;
      state.notes = state.notes.filter((note) => note.id !== noteId);
    },
    setEditingNoteId: (state, action) => {
      state.editingNoteId = action.payload;
    },
  },
});

export const { addNote, updateNote, deleteNote, setEditingNoteId } = notebookSlice.actions;

export default notebookSlice.reducer;
