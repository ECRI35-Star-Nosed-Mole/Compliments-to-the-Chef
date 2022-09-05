import React from 'react';
import Logo from './assets/NavLogo.png';
import { Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import Login from './login';
// import useStyles from './navStyles.js';

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Button,
  Tooltip,
  Box,
} from '@mui/material';

const NavBar = () => {
  // const classes = useStyles;
  const displayHeader = () => {
    return (
      <Toolbar>
        <img src={Logo} alt="icon" height="60"></img>
        <Typography className="header" variant="h6" sx={{ flexGrow: 1 }}>
					Compliments To The Chef
        </Typography>
        <Box>
          <Button>Sign Up</Button>
          <Button color="inherit" Component={Link} to={Login}>
						Sign Up
          </Button>
          <Button color="inherit" Component={Link} to={Login}>
						Login
          </Button>
          <IconButton>
            <Avatar className="navAvaar" />
          </IconButton>
        </Box>
      </Toolbar>
    );
  };

  return (
    <header>
      <AppBar className="appbar">{displayHeader()}</AppBar>
    </header>
  );
};
export default NavBar;
