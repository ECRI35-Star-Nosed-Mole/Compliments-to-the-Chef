import React, { Component } from 'react';

import NavBar from './components/NavBar.js';
import RestaurantProfileContainer from './restaurantProfileContainer';
import Info from './components/info';
class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <nav>
          <NavBar />
        </nav>
        <div>
          <Info />
        </div>
        <div>
          <RestaurantProfileContainer />
        </div>
      </div>

    );
  }
}

export default App;
