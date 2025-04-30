import React, { useState } from 'react';
import { useAppDispatch } from '../hooks/hooks';
import { addNote, updateNote } from '../features/notes/notesSlice';
import { Note } from '../features/notes/notesType';

interface NoteFormProps {
  noteToEdit?: Note;
  onCancel?: () => void;
}

const NoteForm: React.FC<NoteFormProps> = ({ noteToEdit, onCancel }) => {
  const [title, setTitle] = useState(noteToEdit?.title || '');
  const [content, setContent] = useState(noteToEdit?.content || '');
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (title.trim() && content.trim()) {
      if (noteToEdit) {
        dispatch(updateNote({
          ...noteToEdit,
          title,
          content
        }));
      } else {
        dispatch(addNote({ title, content }));
      }
      
      setTitle('');
      setContent('');
      
      if (onCancel) {
        onCancel();
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-4 mb-4">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Note Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <textarea
          placeholder="Note Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded h-24"
          required
        />
      </div>
      <div className="flex justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {noteToEdit ? 'Update Note' : 'Add Note'}
        </button>
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default NoteForm;