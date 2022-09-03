import React, { Component } from 'react';
import {Route, Routes, NavLink, BrowserRouter } from 'react-router-dom';
import Login from './login';
import RestaurantProfileContainer from './restaurantProfileContainer';


class App extends Component {
  constructor() {
    super();
  }

  render () {

    return (
      <BrowserRouter>
        <h1>Compliments to the Chef</h1>
        <ul className="header">
          <li><NavLink to="/login">login</NavLink></li>
          <li><NavLink to="/restaurantprofile">Restaurant Profile</NavLink></li>
        </ul>
        <div>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/restaurantprofile" element={<RestaurantProfileContainer />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;