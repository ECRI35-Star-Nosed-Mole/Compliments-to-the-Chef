import React, { useState, useEffect } from 'react';
import axios from 'axios'

  const [sta, setSta] = useState(null);
  const dummyUser = {name:'Dummy',
    avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe1_6-PtcF48iM3PkReAZlBpbSaLDhKNyisg&usqp=CAU',
    review:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a pretium ante. Praesent in mauris lorem. Maecenas sit amet quam at mauris interdum aliquet et et urna. Curabitur ornare risus eget ligula lobortis laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sem eros, imperdiet vitae aliquam dapibus, hendrerit sit amet elit. Etiam pharetra aliquet tempor. In sit amet risus vitae risus sollicitudin bibendum. Maecenas vitae rutrum orci. In purus lectus, pharetra vel dapibus non, finibus sodales justo.

    Cras tempus tortor felis, sed venenatis turpis malesuada eget. Nam varius gravida odio, ac volutpat tellus vestibulum mollis. Vestibulum id molestie purus, nec mattis nibh. Aliquam sit amet suscipit justo. Sed rutrum dolor nec est tempor, nec sodales tortor congue. Morbi venenatis massa quis est convallis consectetur. In dictum commodo nulla eu vulputate.
    
    Fusce sit amet luctus turpis, vel placerat leo. Aenean ut dui ac eros commodo hendrerit. Donec hendrerit risus eget ligula pharetra fringilla. Etiam convallis eget magna vitae efficitur. Nulla nulla augue, tristique ac mollis et, feugiat ut eros. Quisque at tortor dictum, euismod arcu placerat, vulputate dui. Aenean sagittis varius nibh, sed mattis massa consectetur a. Pellentesque condimentum interdum mauris, ut dapibus est vulputate et. Sed vel feugiat.`};
  const dummyReviews =[];
  for (let i = 0; i < 5; i++){
    dummyReviews.push(    <div>
      <img src={dummyUser.avatar} alt="Profile Pic" width="100px" height="auto"></img>
      <span>{dummyUser.name}</span>
      <p>{dummyUser.review}</p>
    </div>);
  }
  // console.log('userRatings');
  return (
    <div style={{}}>
      {dummyReviews}
    </div>
  );

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
