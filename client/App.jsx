import React, { useEffect } from 'react'; // importing useEffect hook
import { Container, Grid } from '@mui/material';
// import { useDispatch, useSelector } from 'react-redux';

import NavBar from './components/NavBar.js';
import RestaurantProfileContainer from './restaurantProfileContainer';
import Info from './components/info';
// import { getAllReviews } from './redux/actions/index.js';

//using inline syle for now. Convert to class styles later
const appStyle = {
  height: '100%',
  width: '100%',
  margin: '0',
  position: 'fixed',
};

const navStyle = {
  position: 'relative',
  height: '70px',
};

const contentStyle = {
  display: 'flex',
  position: 'relative',
  border: '1px solid red',
  gap: '10px',
  height: '100%',
};

const infoStyle = {
  border: 'inherit',
  flex: '1',
};

const reviewStyle = {
  border: 'inherit',
  flex: '3',
  overflow: 'auto',
};

function App() {
  // const dispatch = useDispatch(); // usinfg dispatch hook
  // useEffect(() => {
  // 	dispatch(getAllReviews());
  // }, [dispatch]);
  // const allReviews = useSelector((state) => state.allReviews);
  // console.log('getting all reviews from backend', allReviews);
  return (
  // <Container>
    <div className="app" style={appStyle}>
      <nav className="nav" style={navStyle}>
        <NavBar />
      </nav>

      <div className="content" style={contentStyle}>
        <Grid direction="column" spacing={2}>
          <div className="info" style={infoStyle}>
            <Info />
          </div>
        </Grid>
        <Grid>
          <div className="review-container">
            {/* style={reviewStyle} */}
            <RestaurantProfileContainer />
          </div>
        </Grid>
      </div>
    </div>
  // </Container>
  );
}

export default App;
