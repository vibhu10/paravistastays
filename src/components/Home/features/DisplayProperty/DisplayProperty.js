import React from "react";
import "./DisplayProperty.css";

import SelectedPropertyCalendar from "./SelectedPropertyCalendar";
import DisplayPropertyMap from "./DisplayPropertyMap";
import PropertyOwnerDetails from "./PropertyOwnerDetails";
import PropertyDisplayHouseRule from "./PropertyDisplayHouseRule";
import PropertyDisplayPolicy from "./PropertyDisplayPolic";
import PropertyImageGrid from "./propertyImageGrid";
import PropertyReservation from "./PropertyReservation";
import PropertyDescription from "./propertyDescription";
import PropertyAmenities from "./propertyAnenities";
import PropertyReview from "./propertyReview";
import PropertyLayout from "./PropertyLayout";


function DisplayProperty({ selectedPropertyData, setIsPropertySelected }) {
  console.log(selectedPropertyData);
  return (
    <div className="property-container">
      {/* Title Section */}
      <div className="PropertyTitleSection-container">
        {/* Back Button */}
        <button
          className="PropertyTitleSection-back-button"
          onClick={() => setIsPropertySelected(false)}
        >
          &#8592;
        </button>

        {/* Title */}
        <h2 className="PropertyTitleSection-title">
          {selectedPropertyData.title || "Property Title"}
        </h2>

        {/* Action Buttons */}
        <div className="PropertyTitleSection-actions">
          <button className="PropertyTitleSection-action-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
              <path d="M21 6.5H3v2h18v-2Zm-18 5h18v2H3v-2Zm18 5H3v2H3v-2Z" />
            </svg>
            Compare
          </button>
          <button className="PropertyTitleSection-action-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
              <path d="M14 9V5H6v14h12V9h-4ZM6 3h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2ZM13 16v-3H9v-2h4V8l5 4-5 4Z" />
            </svg>
            Share
          </button>
          <button className="PropertyTitleSection-action-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6.5 3.5 5 5.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5 18.5 5 20 6.5 20 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35Z" />
            </svg>
            Save
          </button>
        </div>
      </div>

      {/* Image Grid */}
      <PropertyImageGrid photoGallery={selectedPropertyData.photoGallery || []} />

      <hr />

      {/* Property Details Section */}
      <div className="property-details-section">
        {/* Left: Property Description */}
        <PropertyDescription fullDescription={selectedPropertyData.description}title={selectedPropertyData.title} country={selectedPropertyData.Address.country}/>

        {/* Right: Reservation Widget */}
        <PropertyReservation price={selectedPropertyData.price} availability={selectedPropertyData.availability} />
      </div>

      <hr />

      {/* Amenities Section */}
      <PropertyAmenities amenities={selectedPropertyData.amenities} />

      <hr />

      {/* Property Layout Section */}
      <PropertyLayout data={selectedPropertyData.bedrooms} />

      <hr />

      {/* Reviews Section */}
      <PropertyReview reviews={selectedPropertyData.reviews || []} />

      <hr />

      {/* Calendar Section */}
      <SelectedPropertyCalendar availability={selectedPropertyData.availability} />

      <hr />

      {/* Map Section */}
      <DisplayPropertyMap location={selectedPropertyData.Address} />

      <hr />

      {/* Owner Details */}
      <PropertyOwnerDetails ownerEmail={selectedPropertyData.ownerEmail} />

      <hr />

      {/* House Rules */}
      <PropertyDisplayHouseRule rules={selectedPropertyData.houseRules} />

      <hr />

      {/* Policies */}
      <PropertyDisplayPolicy policies={selectedPropertyData.policies || []} />
    </div>
  );
}

export default DisplayProperty;
