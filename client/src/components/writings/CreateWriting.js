import { useState, useEffect } from 'react';
import { Button, TextField } from '@mui/material';
import {
  addWriting,
  useWritings,
  updateWriting,
  clearCurrent,
} from '../../context/writing/WritingState';

import './CreateWriting.styles.css';

// set initial state for writing
const initialWriting = {
  title: '',
  text: '',
};

export const CreateWriting = () => {
  // use writingState
  const [writingState, writingDispatch] = useWritings();
  const { current } = writingState;

  // set writing (imput) state to initialWriting
  const [writing, setWriting] = useState(initialWriting);

  // Check if writing exists, then set state to current or initial
  useEffect(() => {
    if (current !== null) {
      setWriting(current);
    } else {
      setWriting(initialWriting);
    }
  }, [current]);

  const { title, text } = writing;

  const onChange = (e) => {
    // set writing state according to input values
    setWriting({ ...writing, [e.target.name]: e.target.value });
  };

  // check if writing is new or existing. If new, create. If old, update.
  const handleSubmit = () => {
    if (current === null) {
      addWriting(writingDispatch, writing).then(() =>
        setWriting(initialWriting)
      );
    } else {
      updateWriting(writingDispatch, writing);
    }
    clearEdits();
  };

  const clearEdits = () => {
    clearCurrent(writingDispatch);
  };

  return (
    <div className="CreateWritingContainer">
      <h2>{current ? 'Edit Writing' : 'Create a New Writing'}</h2>
      <TextField
        label="Title"
        placeholder="Add a title"
        name="title"
        value={title}
        onChange={onChange}
      />
      <TextField
        minRows={4}
        label="Writing"
        multiline
        placeholder="Write something..."
        name="text"
        value={text}
        onChange={onChange}
      />
      <Button variant="contained" onClick={handleSubmit}>
        {current ? 'Update Writing' : 'Create Writing'}
      </Button>
      {current && (
        <Button variant="outlined" onClick={clearEdits}>
          Undo edits
        </Button>
      )}
    </div>
  );
};
