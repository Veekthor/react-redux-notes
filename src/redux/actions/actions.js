export const ADD_NOTE = 'ADD_NOTE';
export const REMOVE_NOTE = 'REMOTE_NOTE';

export const addNote = (title, content) => ({type: ADD_NOTE, title, content});

export const removeNote = id => ({type: REMOVE_NOTE, id});