import React, { useState } from 'react';
import { useAppDispatch } from '../hooks/hooks';
import { deleteNote } from '../features/notes/notesSlice';
import { Note } from '../features/notes/notesType';
import NoteForm from './NoteForm';

interface NoteItemProps {
  note: Note;
}

const NoteItem: React.FC<NoteItemProps> = ({ note }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deleteNote(note.id));
  };

  if (isEditing) {
    return (
      <NoteForm
        noteToEdit={note}
        onCancel={() => setIsEditing(false)}
      />
    );
  }

  return (
    <div className="bg-white shadow-md rounded p-4 mb-4">
      <h3 className="text-xl font-bold mb-2">{note.title}</h3>
      <p className="mb-4">{note.content}</p>
      <div className="text-gray-500 text-sm mb-2">
        Created: {new Date(note.createdAt).toLocaleString()}
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => setIsEditing(true)}
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-3 rounded mr-2"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteItem;