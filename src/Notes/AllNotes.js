import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { removeNote } from "../redux/actions/actions";

const AllNotes = () => {
  const dispatch = useDispatch();
  const notes = useSelector(store => store.notes, shallowEqual);
  const handleRemoveNote = index => dispatch(removeNote(index));

  const notesItems = notes.map((note, index) => (
    <li key={index}>
      <b>{note.title}</b>
      <button onClick={() => handleRemoveNote(index)}>x</button>
      <br />
      <span>{note.content}</span>
    </li>
  ));

  return (
    <React.Fragment>
      <h3>All Notes</h3>

      <ul>{notesItems}</ul>
    </React.Fragment>
  );

};

export default AllNotes;