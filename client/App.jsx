import React, { Component } from 'react';

import NavBar from './components/NavBar.js';
import RestaurantProfileContainer from './restaurantProfileContainer';
import Info from './components/info';

//using inline syle for now. Convert to class styles later
const appStyle = {
  height:'100%',
  width:'100%',
  margin:'0',
  position:'fixed'

};

const navStyle ={
  position:'relative',
  height:'70px'
};

const contentStyle = {
  display:'flex',
  position: 'relative',
  border: '1px solid red',
  gap: '10px',
  height: '100%'
};

const infoStyle = {
  border: 'inherit',
  flex: '1'
};

const reviewStyle = {
  border: 'inherit',
  flex:'3'
};

function App() {
  return (
    <div className="app" style={appStyle}>
      <nav className="nav" style={navStyle}>
        <NavBar />
      </nav>
      <div className="content" style={contentStyle}>
        <div className="info" style={infoStyle}>
          <Info />
        </div>
        <div className="review-container" style={reviewStyle}>
          <RestaurantProfileContainer />
        </div>
      </div>
    </div>

  );
}

export default App;
