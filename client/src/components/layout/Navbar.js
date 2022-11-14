import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

import './Navbar.styles.css';

// TODO
// If loggen in, show only "logout" btn
// if logged out, show "login" and "register" btns
// There also might be need for Account btn to be able to change email and password

export const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            DailyWritings
          </Typography>
          <Link to="login">
            <Button variant="contained" disableElevation>
              Login
            </Button>
          </Link>
          <Link to="register">
            <Button variant="contained" disableElevation>
              Register
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
