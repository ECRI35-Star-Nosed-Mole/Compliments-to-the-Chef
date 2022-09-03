import React, { Component } from 'react';
import {Route, Routes, NavLink, BrowserRouter } from 'react-router-dom';
import Login from './components/login';
import RestaurantProfileContainer from './restaurantProfileContainer';
import CriticRatings from './components/criticRatings';
import Header from './components/header';
import Info from './components/info';
import Signup from './components/signup';
import UserRatings from './components/userRatings';
class App extends Component {
  constructor() {
    super();
  }

  render () {

    return (
      <BrowserRouter>
        <ul className="header">
          <li><NavLink to="/login">login</NavLink></li>
          <li><NavLink to="/restaurantprofile">Restaurant Profile</NavLink></li>
          <li><NavLink to="/criticRatings">Critic Ratings</NavLink></li>
          {/* <li><NavLink to="/header">header</NavLink></li> */}
          <li><NavLink to="/info">info</NavLink></li>
          <li><NavLink to="/signup">signup</NavLink></li>
          <li><NavLink to="/userRatings">User Ratings</NavLink></li>
        </ul>
        <div>
          <Routes>
            <Route path="/" element={<RestaurantProfileContainer />} />
            <Route path="/login" element={<Login />} />
            <Route path="/restaurantprofile" element={<RestaurantProfileContainer />} />
            <Route path="/criticRatings" element={<CriticRatings />} />
            {/* <Route path="/header" element={<Header />} /> */}
            <Route path="/info" element={<Info />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/userRatings" element={<UserRatings />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;