import { width } from '@mui/system';
import React from 'react';

const style = {maxWidth:'100%'};

function Info(){
  console.log('info');
  const exteriorPicUrl = 'https://stories.inspirebrands.com/wp-content/uploads/2018/12/Buffalo-Wild-Wings-Restaurant-Exterior.jpg';
  const interiorPicUrl = 'https://upserve.com/media/sites/2/Restaurant-Decor-Blog.jpg';
  const dishPicUrl = 'http://res.cloudinary.com/simpleview/image/upload/v1640823092/clients/orlandofl/185683_entrees_667152ec-7340-4428-91e7-72265329d7d0.jpg';
  const cuisine = 'Asian Fusion';
  const hours = ['11:00 AM - 12:00 AM',
    '11:00 AM - 12:00 AM',
    '11:00 AM - 12:00 AM',
    '11:00 AM - 12:00 AM',
    '11:00 AM - 12:00 AM',
    '11:00 AM - 12:00 AM',
    '11:00 AM - 12:00 AM',
  ];

  return(
    <div>
      <img src={exteriorPicUrl} alt="Restaurant Exterior" style={style}></img>
      <p>Cuisine: {cuisine}</p>
      <p>Hours:</p>
      <p>Monday: {hours[0]}</p>
      <p>Tuesday: {hours[1]}</p>
      <p>Wednesday: {hours[2]}</p>
      <p>Thursday: {hours[3]}</p>
      <p>Friday: {hours[4]}</p>
      <p>Saturday: {hours[5]}</p>
      <p>Sunday: {hours[6]}</p>
      <img src={interiorPicUrl} alt="Restaurant Interior" style={style}></img>
      <img src={dishPicUrl} alt="Restaurant Dish" style={style}></img>
    </div>
  );
}

export default Info;