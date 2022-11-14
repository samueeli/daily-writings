import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

import './Register.styles.css';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    console.log('samulin login');
  };

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
