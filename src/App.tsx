import React from 'react';
import NoteForm from './components/NoteForm';
import NotesList from './components/NotesList';

const App: React.FC = () => {
  return (
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Notes Manager</h1>
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Add a New Note</h2>
          <NoteForm />
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Your Notes</h2>
          <NotesList />
        </div>
      </div>
  );
};

export default App;