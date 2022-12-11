import { Button, TextField } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import AlertContext from '../../context/alert/alertContext';
import { useAuth, clearErrors, register } from '../../context/auth/AuthState';

import './Register.styles.css';

const Register = (props) => {
  // use alert context
  const alertContext = useContext(AlertContext);

  // use auth state
  const [authState, authDispatch] = useAuth();
  const { error, isAuthenticated } = authState;

  const { setAlert } = alertContext;

  // Check for auth errors
  useEffect(() => {
    if (error === 'User already exists') {
      setAlert(error, 'danger');
      clearErrors(authDispatch);
    }
  }, [error, isAuthenticated, props.history, setAlert, authDispatch]);

  // init user state
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = user;

  // set state according to user input
  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const handleRegister = () => {
    // check for empty input fields
    if (name === '' || email === '' || password === '') {
      setAlert('Please fill all fields!', 'error');
      // check if passwords match
    } else if (password !== password2) {
      setAlert('Passwords do not match!', 'error');
      // check if psw is at least 6 characters
    } else if (password.length < 6) {
      setAlert('Password must be at least 6 characters', 'error');
    } else {
      register(authDispatch, {
        name,
        email,
        password,
      });
    }
  };

  // If user is logged in return dashboard
  if (isAuthenticated) return <Navigate to="/" />;

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
