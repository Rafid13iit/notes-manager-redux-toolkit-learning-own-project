export interface Note {
    id: string;
    title: string;
    content: string;
    createdAt: string;
  }
  
  export interface NotesState {
    notes: Note[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
  }