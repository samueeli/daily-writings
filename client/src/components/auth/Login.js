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
        label="Email"
        placeholder="Add your email"
        name="email"
        value={email}
        onChange={onChange}
      />
      <TextField
        label="Password"
        placeholder="Add your password"
        name="password"
        value={password}
        onChange={onChange}
      />
      <Button variant="contained" onClick={handleLogin}>
        Login
      </Button>
    </div>
  );
};

export default Login;
