import React, { useState } from 'react';
import './PropertyReview.css';

export default function PropertyReview() {
  const reviews = [
    {
      id: 1,
      name: 'Sahil',
      date: '3 weeks ago',
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has...`,
    },
    {
      id: 2,
      name: 'Sahil',
      date: '3 weeks ago',
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has...`,
    },
    {
      id: 3,
      name: 'John',
      date: '2 weeks ago',
      text: `Great experience! I would highly recommend this property to anyone who visits.`,
    },
    {
      id: 4,
      name: 'Jane',
      date: '1 week ago',
      text: `The layout and the facilities were amazing. The host was very friendly.`,
    },
  ];

  const [showAllReviews, setShowAllReviews] = useState(false);

  const handleShowAllClick = () => {
    setShowAllReviews(true);
  };

  return (
    <div className="review-section-property-select-container">
      <h2 className="review-section-property-select-title">Reviews</h2>
      <div className="review-section-property-select-rating-summary">
        <span className="review-section-property-select-average-rating">4.98</span>
        <span className="review-section-property-select-stars">⭐⭐⭐⭐⭐</span>
        <span className="review-section-property-select-review-count">118 Reviews</span>
      </div>
      <div className="review-section-property-select-reviews-list">
        {(showAllReviews ? reviews : reviews.slice(0, 2)).map((review) => (
          <div
            key={review.id}
            className="review-section-property-select-review-card"
          >
            <div className="review-section-property-select-review-header">
              <div className="review-section-property-select-avatar">
                {review.name.charAt(0)}
              </div>
              <div>
                <h3 className="review-section-property-select-reviewer-name">
                  {review.name}
                </h3>
                <span className="review-section-property-select-review-date">
                  {review.date}
                </span>
              </div>
            </div>
            <p className="review-section-property-select-review-text">
              {review.text}
            </p>
            <a href="#" className="review-section-property-select-read-more">
              Read more..
            </a>
          </div>
        ))}
      </div>
      {!showAllReviews && (
        <button
          className="review-section-property-select-show-all-btn"
          onClick={handleShowAllClick}
        >
          Show all reviews
        </button>
      )}
    </div>
  );
}
