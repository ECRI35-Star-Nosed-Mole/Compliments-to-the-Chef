import React, { useState } from 'react';
import { Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import CriticRatings from './components/criticRatings';
import UserRatings from './components/userRatings';

import {  Button } from '@mui/material';

export default function restauntProfileContainer() {
  const criticButtonStyle = {left: '25%'};
  const userButtonStyle = {left: '50%'};
  const [sta, setSta] = useState(null);
  console.log('restaurant');
  return (
    <div>
      <BrowserRouter>
        <Button color="inherit" component={Link} to="/" style={criticButtonStyle}>
          Critic Ratings
        </Button>
        <Button color="inherit" component={Link} to="/userratings" style={userButtonStyle}>
          User Ratings
        </Button>
        <Routes>
          <Route path="/" element={<CriticRatings />} />
          <Route path="/userratings" element={<UserRatings />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}