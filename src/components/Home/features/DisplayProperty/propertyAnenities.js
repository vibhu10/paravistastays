import React, { useState } from "react";

import './propertyAnenities.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faKitchenSet,
  faParking,
  faWind,
  faFire,
  faWifi,
  faTv,
  faTree,
  faChild,
  faSnowflake, // Substitute for fridge
  faShower, // Example for additional amenities
  faBed,
} from "@fortawesome/free-solid-svg-icons";

export default function PropertyAmenities() {
  const [showMore, setShowMore] = useState(false);

  const amenities = [
    { icon: faKitchenSet, label: "Kitchen" },
    { icon: faParking, label: "Free parking on premises" },
    { icon: faWind, label: "Private patio or balcony" },
    { icon: faFire, label: "Indoor fireplace" },
    { icon: faSnowflake, label: "Hair dryer" }, // Updated icon
    { icon: faWifi, label: "Wifi" },
    { icon: faTv, label: "TV" },
    { icon: faTree, label: "Garden" },
    { icon: faChild, label: "Children's books and toys" },
    { icon: faSnowflake, label: "Fridge" }, // Updated icon
    // Additional amenities
    { icon: faShower, label: "Shower" },
    { icon: faBed, label: "Extra beds" },
  ];

  const visibleAmenities = showMore ? amenities : amenities.slice(0, 10);

  return (
    <div className="selected-property-amenites-home">
      <h3 className="property-amenities-title">Amenities</h3>
      <div className="property-amenities-grid">
        {visibleAmenities.map((amenity, index) => (
          <div className="property-amenities-item" key={index}>
            <FontAwesomeIcon icon={amenity.icon} /> {amenity.label}
          </div>
        ))}
      </div>
      <button
        className="property-amenities-more-button"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? "Show less" : "More amenities"}
      </button>
      <a className="property-amenities-report-link" href="#">
        Report Property
      </a>
    </div>
  );
}
