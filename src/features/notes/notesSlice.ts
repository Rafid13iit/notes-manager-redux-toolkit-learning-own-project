import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
  import { Note, NotesState } from './notesType';
  
  const initialState: NotesState = {
    notes: [],
    status: 'idle',
    error: null,
  };
  
  // Async thunk to fetch notes from an API
  export const fetchNotes = createAsyncThunk('notes/fetchNotes', async () => {
    // Simulating API call with a promise
    return new Promise<Note[]>((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: '1',
            title: 'Redux Toolkit',
            content: 'Redux Toolkit simplifies Redux setup and usage',
            createdAt: new Date().toISOString(),
          },
          {
            id: '2',
            title: 'TypeScript',
            content: 'TypeScript adds static typing to JavaScript',
            createdAt: new Date().toISOString(),
          },
        ]);
      }, 1000);
    });
  });
  
  const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
      addNote: (state, action: PayloadAction<{ title: string; content: string }>) => {
        const newNote = {
          id: Date.now().toString(),
          title: action.payload.title,
          content: action.payload.content,
          createdAt: new Date().toISOString(),
        };
        state.notes.push(newNote);
      },
      updateNote: (state, action: PayloadAction<Note>) => {
        const index = state.notes.findIndex((note) => note.id === action.payload.id);
        if (index !== -1) {
          state.notes[index] = action.payload;
        }
      },
      deleteNote: (state, action: PayloadAction<string>) => {
        state.notes = state.notes.filter((note) => note.id !== action.payload);
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchNotes.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchNotes.fulfilled, (state, action: PayloadAction<Note[]>) => {
          state.status = 'succeeded';
          state.notes = action.payload;
        })
        .addCase(fetchNotes.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message || 'Failed to fetch notes';
        });
    },
  });
  
  export const { addNote, updateNote, deleteNote } = notesSlice.actions;
  export default notesSlice.reducer;