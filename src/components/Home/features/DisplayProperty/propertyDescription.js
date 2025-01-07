import React, { useState } from "react";
import "./propertyDescription.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faUserGroup,
  faBed,
  faBath,
} from "@fortawesome/free-solid-svg-icons";

export default function PropertyDescription({fullDescription,title,country}) {
  console.log(fullDescription,"@@@@@")
  const [isExpanded, setIsExpanded] = useState(false);

  const truncatedDescription = `${fullDescription.substring(0, 150)}...`;

  // Toggle description length
  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="property-description-home-selected">
      <h3 className="property-description-home-selected-title">
       {title}, {country}
      </h3>

      <div className="property-description-home-selected-info">
        <span className="property-description-home-selected-info-item">
          <FontAwesomeIcon icon={faUserGroup} className="icon" /> 4 guests
        </span>
        <span className="property-description-home-selected-info-item">
          <FontAwesomeIcon icon={faBed} className="icon" /> 1 bedroom
        </span>
        <span className="property-description-home-selected-info-item">
          <FontAwesomeIcon icon={faBed} className="icon" /> 3 beds
        </span>
        <span className="property-description-home-selected-info-item">
          <FontAwesomeIcon icon={faBath} className="icon" /> 1.5 bathrooms
        </span>
      </div>

      <div className="property-description-home-selected-rating">
        <div className="property-description-home-selected-badge">
          <FontAwesomeIcon icon={faStar} className="icon-star" /> Top Rated
        </div>
        <span className="property-description-home-selected-stars">4.98</span>
        <span className="property-description-home-selected-reviews">
          (118 Reviews)
        </span>
      </div>

      <p className="property-description-home-selected-text">
        {isExpanded ? fullDescription : truncatedDescription}
      </p>

      <button
        className="property-description-home-selected-show-more"
        onClick={toggleDescription}
      >
        {isExpanded ? "Show less" : "Show more"}
      </button>
    </div>
  );
}
