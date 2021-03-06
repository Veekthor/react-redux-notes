import React from 'react';
import NotesForm from './NotesForm';
import AllNotes from './AllNotes';

const Notes = () => (
  <React.Fragment>
    <h1>React Redux Notes App</h1>

    <NotesForm />
    <hr />
    <AllNotes />
  </React.Fragment>
);

export default Notes;