import React, { useState, useEffect } from 'react';

export default function userRatings() {
  const [userReviews, setUserReviews] = useState([]);
  const avatar =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe1_6-PtcF48iM3PkReAZlBpbSaLDhKNyisg&usqp=CAU';

  useEffect(() => {
    fetch('/internal/restaurantReviews')
      .then((res) => res.json())
      .then((data) => {
        console.log('REVIEWS', data)
        setUserReviews(data);
      });
  }, []);
  const results =[];
  for (let i = 0; i < userReviews.length; i++) {
    results.push(
      <div>
        <img src={avatar} alt='Profile Pic' width='100px' height='auto'></img>
        <span>{userReviews[i].username}</span>
        {userReviews[i].vote == true ? <span>👍</span> : <span>👎</span>}
        <p>{userReviews[i].review_content}</p>
      </div>
    );
  }
  console.log('userRatings');
  return <div>{results}</div>;
}
