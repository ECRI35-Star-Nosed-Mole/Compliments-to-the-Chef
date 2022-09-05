import React, {useState} from 'react';
import Logo from './assets/NavLogo.png';
import { Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import Login from './login';
import Signup from './signup';
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
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  

  // const classes = useStyles
  const displayHeader = () => {
    return (
      <div>
      <Toolbar>
        <BrowserRouter>
          <img src={Logo} alt="icon" height="60"></img>
          <Typography className="header" variant="h6" sx={{ flexGrow: 1 }}>
						Compliments To The Chef
          </Typography>
          <Box>
            <Button>Sign Up</Button>
            <Button color="inherit" component={Link} to="/signup">
							Sign Up
            </Button>
            <Button color="inherit" onClick={() =>setLoginOpen(true)} >
							Login
            </Button>
            <IconButton>
              <Avatar className="navAvaar" />
            </IconButton>
          </Box>
          <Routes>
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </Toolbar>
      <Login show={loginOpen} />
      </div>
    );
  };

  return (
    <header>
      <AppBar className="appbar">{displayHeader()}</AppBar>
    </header>
  );
};


export default NavBar;
