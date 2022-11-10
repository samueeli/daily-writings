import { useContext, useState } from 'react';
import { Button, TextField } from '@mui/material';
import WritingContext from '../../context/writing/writingContext';

import './CreateWriting.styles.css';

// TODO add "SAVE WRITING" to btn when editing an existing writing

export const CreateWriting = () => {
  const writingContext = useContext(WritingContext);

  const [writing, setWriting] = useState({
    title: '',
    text: '',
  });

  const { title, text } = writing;

  const onChange = (e) => {
    setWriting({ ...writing, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log('submitted a writing');
    console.log('samulin writing', writing);
    writingContext.addWriting(writing);
    setWriting({
      title: '',
      text: '',
    });
  };

  return (
    <div className="CreateWritingContainer">
      <h2>Create a New Writing</h2>
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
        Create writing
      </Button>
    </div>
  );
};
