import React, { Component } from 'react';
import { Route, Routes, NavLink, BrowserRouter } from 'react-router-dom';

import RestaurantProfileContainer from './restaurantProfileContainer';
import NavBar from './components/NavBar.js';
// import navLogo from './components/assets/NavLogo.png';
import { Container, Typography, Grow, Grid } from '@mui/material';
class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      // <Container>
      <nav>
        {/* <BrowserRouter>
            <ul className="header"> */}
        <NavBar />
        {/* <li>
                <NavLink to="/restaurantprofile">Restaurant Profile</NavLink>
                <Routes>
                  <Route
                    path="/restaurantprofile"
                    element={<RestaurantProfileContainer />}
                  ></Route>
                </Routes>
              </li>
            </ul>
          </BrowserRouter> */}
      </nav>
      // </Container>
    );
  }
}

export default App;
