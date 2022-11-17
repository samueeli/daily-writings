import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAuth, logout } from '../../context/auth/AuthState';
import { useWritings, clearWritings } from '../../context/writing/WritingState';

import './Navbar.styles.css';

export const Navbar = () => {
  const [authState, authDispatch] = useAuth();
  const { isAuthenticated, user } = authState;

  const writingDispatch = useWritings()[1];

  const onLogout = () => {
    logout(authDispatch);
    clearWritings(writingDispatch);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            DailyWritings
          </Typography>
          {isAuthenticated ? (
            <>
              <span>Hi {user && user.name}</span>
              <Link to="login">
                <Button onClick={onLogout} variant="contained" disableElevation>
                  Logout
                </Button>
              </Link>
            </>
          ) : (
            <>
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
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
