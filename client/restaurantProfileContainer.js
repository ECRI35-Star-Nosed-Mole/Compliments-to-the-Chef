import React, { useState } from 'react';
import { Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import CriticRatings from './components/criticRatings';
import UserRatings from './components/userRatings';

import {  Button } from '@mui/material';

export default function restauntProfileContainer() {
  const [sta, setSta] = useState(null);
  console.log('restaurant');
  return (
    <div>
      restaurantProfileContainer
      <BrowserRouter>
        <Button color="inherit" component={Link} to="/criticratings">
          Critic Ratings
        </Button>
        <Button color="inherit" component={Link} to="/userratings">
          User Ratings
        </Button>
        <Routes>
          <Route path="/criticratings" element={<CriticRatings />} />
          <Route path="/userratings" element={<UserRatings />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}