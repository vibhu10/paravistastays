// PropertyOwnerDetails.js
import React from 'react';
import './PropertyOwnerDetails.css';

const PropertyOwnerDetails = () => {
  return (
    <div className="property-owner-details">
      <h2 className="property-owner-details__title">Property Owner Details</h2>
      <div className="property-owner-details__container">
        <div className="property-owner-details__header">
          <img
            src="https://via.placeholder.com/80"
            alt="Owner Avatar"
            className="property-owner-details__avatar"
          />
          <div className="property-owner-details__info">
            <h3 className="property-owner-details__name">Owner Name</h3>
            <div className="property-owner-details__rating">
              <span className="property-owner-details__score">4.98</span>
              <span className="property-owner-details__stars">⭐⭐⭐⭐⭐</span>
            </div>
            <span className="property-owner-details__reviews">118 Reviews</span>
          </div>
        </div>
        <div className="property-owner-details__body">
          <p><strong>Language:</strong> English</p>
          <p><strong>Bio/Intro Sentence</strong></p>
          <p className="property-owner-details__bio">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has...
          </p>
        </div>
        <button className="property-owner-details__message-button">Message Owner</button>
      </div>
    </div>
  );
};

export default PropertyOwnerDetails;
