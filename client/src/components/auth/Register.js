import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

import './Register.styles.css';

const Register = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    console.log('samulin handleRegister');
  };

  return (
    <div className="RegisterContainer">
      <h2>Create a New Account</h2>
      <TextField
        label="Name"
        placeholder="Add your name"
        name="name"
        value={name}
        onChange={onChange}
      />
      <TextField
        label="Email"
        placeholder="Add your email"
        name="email"
        value={email}
        onChange={onChange}
      />
      <TextField
        label="Password"
        placeholder="Add a password"
        name="password"
        value={password}
        onChange={onChange}
      />
      <TextField
        label="Confirm Password"
        placeholder="Confirm password"
        name="password2"
        value={password2}
        onChange={onChange}
      />

      <Button variant="contained" onClick={handleRegister}>
        Create your account
      </Button>
    </div>
  );
};

export default Register;
