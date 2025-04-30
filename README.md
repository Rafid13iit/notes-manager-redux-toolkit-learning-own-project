# Notes Manager App

A simple React application for managing notes using Redux Toolkit, TypeScript, and Tailwind CSS.

## Features

- Create, read, update, and delete notes
- Responsive UI with Tailwind CSS
- Type safety with TypeScript
- State management with Redux Toolkit
- Simulated API calls for learning async operations

## Technologies Used

- React
- Redux Toolkit
- TypeScript
- Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/Rafid13iit/notes-manager-redux-toolkit-learning-own-project
   ```

2. Navigate to the project directory:
   ```
   cd notes-manager-redux-toolkit-learning-own-project
   ```

3. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

4. Start the development server:
   ```
   npm run dev
   ```
   or
   ```
   yarn run dev
   ```

5. Open your browser and visit `http://localhost:5173`

## Project Structure

```
src/
├── app/
│   └── store.ts     # Redux store configuration
├── components/
│   ├── NoteForm.tsx  # Form for adding/editing notes
│   ├── NoteItem.tsx  # Individual note component
│   └── NotesList.tsx # List of all notes
│── hooks/
│   ├── hooks.ts      # Custom Redux hooks
├── features/
│   └── notes/
│       └── notesSlice.ts    # Redux slice for notes
│       └── notesType.ts     # TypeScript interfaces
│

├── App.tsx          # Main application component
└── main.tsx        # Application entry point
```

## Learning Redux Toolkit

This project demonstrates several key concepts of Redux Toolkit:

### 1. Creating a Store

```typescript
// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import notesReducer from '../features/notes/notesSlice';

export const store = configureStore({
  reducer: {
    notes: notesReducer,
  },
});
```

### 2. Defining Slice with Reducers

```typescript
// src/features/notes/notesSlice.ts
const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action) => {
      // Add a new note
    },
    updateNote: (state, action) => {
      // Update existing note
    },
    deleteNote: (state, action) => {
      // Delete a note
    },
  },
  // ...
});
```

### 3. Using Async Thunks

```typescript
// src/features/notes/notesSlice.ts
export const fetchNotes = createAsyncThunk('notes/fetchNotes', async () => {
  // Simulated API call
  return new Promise<Note[]>((resolve) => {
    setTimeout(() => {
      // Return sample data
    }, 1000);
  });
});
```

### 4. Using Custom Hooks

```typescript
// src/app/hooks.ts
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```

## Next Steps for Learning

1. Add real API integration instead of simulated calls
2. Implement user authentication
3. Add categories or tags for notes
4. Implement search functionality
5. Add unit tests
