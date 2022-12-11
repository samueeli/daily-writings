import { Button, TextField } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import AlertContext from '../../context/alert/alertContext';
import { useAuth, clearErrors, login } from '../../context/auth/AuthState';

import './Register.styles.css';

const Login = () => {
  // use alert context
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  // use authState
  const [authState, authDispatch] = useAuth();
  const { error, isAuthenticated } = authState;

  // Check for auth errors
  useEffect(() => {
    if (error === 'Email or password is incorrect') {
      setAlert(error, 'error');
      clearErrors(authDispatch);
    }
  }, [error, isAuthenticated, authDispatch, setAlert]);

  // init user state
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

  const onChange = (e) => {
    // set state according to user input
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    // check for empty input fields
    if (email === '' || password === '') {
      setAlert('Please fill in all the fields', 'error');
    } else {
      login(authDispatch, {
        email,
        password,
      });
    }
  };

  // If user is logged in return dashboard
  if (isAuthenticated) return <Navigate to="/" />;

  return (
    <div className="RegisterContainer">
      <h2>Login To Your Account</h2>
      <TextField
        type="email"
        label="Email"
        placeholder="Add your email"
        name="email"
        value={email}
        onChange={onChange}
        autoComplete="off"
      />
      <TextField
        type="password"
        label="Password"
        placeholder="Add your password"
        name="password"
        value={password}
        onChange={onChange}
        autoComplete="new-password"
      />
      <Button variant="contained" onClick={handleLogin}>
        Login
      </Button>
    </div>
  );
};

export default Login;
