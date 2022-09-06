import React, { useState } from 'react';
import '../styles.css';

const UpdateReviewModal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  const { content, setContent } = useState('');

  const updateReview = (e) => {
    e.target.preventDefault();

    fetch('internal/reviews', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(content),
    })
      .then((response) => response.json())
      .then((data) => alert('The review was successfully updated!'));

    handleClose();
  };

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        <textarea id='updated-review-content' />
        <button type='button' onClick={updateReview}>
          Update Review
        </button>
        <button type='button' onClick={handleClose}>
          Close Modal
        </button>
      </section>
    </div>
  );
};

export default UpdateReviewModal;
