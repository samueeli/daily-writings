import { useContext, useState, useEffect } from 'react';
import { Button, TextField } from '@mui/material';
import WritingContext from '../../context/writing/writingContext';

import './CreateWriting.styles.css';

export const CreateWriting = () => {
  const writingContext = useContext(WritingContext);

  const { addWriting, updateWriting, current, clearCurrent } = writingContext;

  useEffect(() => {
    if (current !== null) {
      setWriting(current);
    } else {
      setWriting({
        title: '',
        text: '',
      });
    }
  }, [writingContext, current]);

  const [writing, setWriting] = useState({
    title: '',
    text: '',
  });

  const { title, text } = writing;

  const onChange = (e) => {
    setWriting({ ...writing, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (current === null) {
      addWriting(writing);
    } else {
      updateWriting(writing);
    }
    clearEdits();
  };

  const clearEdits = () => {
    clearCurrent();
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
