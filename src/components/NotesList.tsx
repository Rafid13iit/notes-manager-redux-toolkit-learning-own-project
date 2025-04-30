import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../hooks/hooks';
import { fetchNotes } from '../features/notes/notesSlice';
import NoteItem from './NoteItem';

const NotesList: React.FC = () => {
  const { notes, status, error } = useAppSelector((state) => state.notes);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchNotes());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div className="text-center py-4">Loading notes...</div>;
  }

  if (status === 'failed') {
    return <div className="text-red-500 text-center py-4">{error}</div>;
  }

  if (notes.length === 0) {
    return <div className="text-center py-4">No notes found. Add one!</div>;
  }

  return (
    <div>
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NotesList;