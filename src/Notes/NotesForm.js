import React, { Component, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { addNote } from '../redux/actions/actions';

const NotesForm = () => {
  const [values, setValues] = useState({
    title: '',
    content: '',
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmission = (e) => {
    e.preventDefault();

    let { title, content } = values;
    dispatch(addNote(title, content));

    setValues(prev => ({
      ...prev,
      title: '',
      content: ''
    }));
  };


  return (
    <React.Fragment>
      <h3>Add a Note</h3>

      <form onSubmit={handleSubmission}>
        Title: <br />
        <input
          type="text"
          name="title"
          value={values.title}
          onChange={handleChange}
        />
        <br />
        Content: <br />
        <textarea
          name="content"
          value={values.content}
          onChange={handleChange}
        ></textarea>
        <br />
        <button type="submit">Add Note</button>
      </form>
    </React.Fragment>
  );

}

export default NotesForm;