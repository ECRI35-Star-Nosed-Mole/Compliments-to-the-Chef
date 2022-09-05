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


    // <BrowserRouter>
    //   <ul className="header">
    //     <li><NavLink to="/login">login</NavLink></li>
    //     <li><NavLink to="/restaurantprofile">Restaurant Profile</NavLink></li>
    //     <li><NavLink to="/criticRatings">Critic Ratings</NavLink></li>
    //     {/* <li><NavLink to="/header">header</NavLink></li> */}
    //     <li><NavLink to="/info">info</NavLink></li>
    //     <li><NavLink to="/signup">signup</NavLink></li>
    //     <li><NavLink to="/userRatings">User Ratings</NavLink></li>
    //   </ul>
    //   <div>
    //     <Routes>
    //       <Route path="/" element={<RestaurantProfileContainer />} />
    //       <Route path="/login" element={<Login />} />
    //       <Route path="/restaurantprofile" element={<RestaurantProfileContainer />} />
    //       <Route path="/criticRatings" element={<CriticRatings />} />
    //       {/* <Route path="/header" element={<Header />} /> */}
    //       <Route path="/info" element={<Info />} />
    //       <Route path="/signup" element={<Signup />} />
    //       <Route path="/userRatings" element={<UserRatings />} />
    //     </Routes>
    //   </div>
    // </BrowserRouter>
    );
  }
}

export default App;
