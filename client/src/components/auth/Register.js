import { Button, TextField } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

import './Register.styles.css';

const Register = () => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { register, error, clearErrors } = authContext;

  useEffect(() => {
    if (error === 'User already exists') {
      setAlert(error, 'error');
      clearErrors();
    }
  }, [error]);

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
    if (name === '' || email === '' || password === '') {
      setAlert('Please fill all fields!', 'error');
    } else if (password !== password2) {
      setAlert('Passwords do not match!', 'error');
    } else if (password.length < 6) {
      setAlert('Password must be at least 6 characters', 'error');
    } else {
      register({
        name,
        email,
        password,
      });
    }
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
        required
      />
      <TextField
        type="email"
        label="Email"
        placeholder="Add your email"
        name="email"
        value={email}
        onChange={onChange}
        required
      />
      <TextField
        type="password"
        label="Password"
        placeholder="Add a password"
        name="password"
        value={password}
        onChange={onChange}
        required
        inputProps={{ minLength: 6 }}
        autoComplete="new-password"
        helperText="Password must be at least 6 characters"
      />
      <TextField
        type="password"
        label="Confirm Password"
        placeholder="Confirm password"
        name="password2"
        value={password2}
        onChange={onChange}
        required
        inputProps={{ minLength: 6 }}
        autoComplete="new-password"
      />

      <Button variant="contained" onClick={handleRegister}>
        Create your account
      </Button>
    </div>
  );
};

export default Register;
