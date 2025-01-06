import React from "react";
import "./DisplayProperty.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faKitchenSet,
  faParking,
  faBowlFood,
  faTv,
  faWifi,

  faChild,
  faTree,
  faFridge,
  faWind,
  faFire,
} from "@fortawesome/free-solid-svg-icons";
import SelectedPropertyCalendar from "./SelectedPropertyCalendar";
import DisplayPropertyMap from "./DisplayPropertyMap";
import PropertyOwnerDetails from "./PropertyOwnerDetails";
import PropertyDisplayHouseRule from "./PropertyDisplayHouseRule";
import PropertyDisplayPolicy from "./PropertyDisplayPolic";

function DisplayProperty({ selectedPropertyData }) {
  return (
    <div className="property-container">
      {/* Title Section */}
      <h2 className="property-title">
        Luxurious, picture-perfect, stunning treehouse
      </h2>

      {/* Action Buttons */}
      <div className="property-actions">
        <button>Compare</button>
        <button>Share</button>
        <button>Save</button>
      </div>

      {/* Image Grid */}
      <div className="property-images-grid">
        {/* Main Image */}
        <img
          src="https://via.placeholder.com/600x400" // Replace with real image URLs
          alt="Main treehouse"
          className="main-image"
        />

        {/* Sub Images */}
        <div className="sub-images">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Treehouse side"
          />
          <img
            src="https://via.placeholder.com/300x200"
            alt="Treehouse deck"
          />
          <img
            src="https://via.placeholder.com/300x200"
            alt="Treehouse bedroom"
          />
          <img
            src="https://via.placeholder.com/300x200"
            alt="Treehouse interior"
          />
        </div>
      </div>

      {/* Property Details Section */}
      <div className="property-details-section">
        {/* Left: Property Description */}
        <div className="property-description">
          <h3>Treehouse in Mayfield, United Kingdom</h3>
          <p>4 guests · 1 bedroom · 3 beds · 1.5 bathrooms</p>
          <div className="property-rating">
            <span className="rating-badge">⭐ Top Rated</span>
            <span className="rating-stars">4.98</span>
            <span className="rating-reviews">(118 Reviews)</span>
          </div>
          <p>
            Hoots Treehouse is a picture-perfect, romantic, luxurious treehouse
            with all modern conveniences in an area of outstanding natural
            beauty - only 45 minutes south of M25. Clad in aromatic cedar wood,
            beautifully furnished - ideal private, woodland retreat for couples.
            A wonderful place to chill out and lose yourself - you won’t want to
            leave! Sheer bliss!
          </p>
        </div>

        {/* Right: Reservation Widget */}
        <div className="reservation-widget">
          <div className="price-section">
            <span className="price">$275</span> <span>night</span>
          </div>
          <div className="reservation-dates">
            <div>
              <label>Check-in</label>
              <input type="date" />
            </div>
            <div>
              <label>Check-out</label>
              <input type="date" />
            </div>
          </div>
          <div>
            <label>Guests</label>
            <select>
              <option>2 guests</option>
              <option>1 guest</option>
              <option>3 guests</option>
            </select>
          </div>
          <button className="reserve-button">Reserve</button>
          <p className="reservation-note">You won't be charged yet</p>
          <div className="reservation-costs">
            <p>$275 × 2 nights</p>
            <p>$550</p>
            <p>Paradise service fee</p>
            <p>$93</p>
            <hr />
            <p className="total-cost">Total</p>
            <p>$643</p>
          </div>
        </div>
      </div>

      {/* Amenities Section */}
      <div className="property-amenities">
        <h3>Amenities</h3>
        <div className="amenities-grid">
          <div>
            <FontAwesomeIcon icon={faKitchenSet} /> Kitchen
          </div>
          <div>
            <FontAwesomeIcon icon={faParking} /> Free parking on premises
          </div>
          <div>
            <FontAwesomeIcon icon={faWind} /> Private patio or balcony
          </div>
          <div>
            <FontAwesomeIcon icon={faFire} /> Indoor fireplace
          </div>
          <div>
            <FontAwesomeIcon icon={faBowlFood} /> Hair dryer
          </div>
          <div>
            <FontAwesomeIcon icon={faWifi} /> Wifi
          </div>
          <div>
            <FontAwesomeIcon icon={faTv} /> TV
          </div>
          <div>
            <FontAwesomeIcon icon={faTree} /> Garden
          </div>
          <div>
            <FontAwesomeIcon icon={faChild} /> Children's books and toys
          </div>
         
        </div>
        <button className="more-amenities-button">More amenities</button>
        <a className="report-property-link" href="#">
          Report Property
        </a>
      </div>

<hr/>

      {/* Layout Section */}
      <div className="layout-section">
        <h3>Layout</h3>
        <div className="layout-images">
          <div>
            <img
              src="/mnt/data/Screenshot 2025-01-05 163139.png"
              alt="Bedroom layout"
              className="layout-image"
            />
            <p>Bedroom</p>
          </div>
          <div>
            <img
              src="https://via.placeholder.com/300x200"
              alt="Modern Bedroom"
              className="layout-image"
            />
            <p>Modern Bedroom</p>
          </div>
          <div>
            <img
              src="https://via.placeholder.com/300x200"
              alt="Minimal Bedroom"
              className="layout-image"
            />
            <p>Minimal Bedroom</p>
          </div>
        </div>
      </div>
<hr/>

    <div className="reviews-section">
      <h2>Reviews</h2>
      <div className="rating-summary">
        <span className="average-rating">4.98</span>
        <span className="stars">⭐⭐⭐⭐⭐</span>
        <span className="review-count">118 Reviews</span>
      </div>
      <div className="reviews-list">
        <div className="review-card">
          <div className="review-header">
            <div className="avatar">S</div>
            <div>
              <h3>Sahil</h3>
              <span className="review-date">3 weeks ago</span>
            </div>
          </div>
          <p className="review-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has...
          </p>
          <a href="#" className="read-more">
            Read more..
          </a>
        </div>

        <div className="review-card">
          <div className="review-header">
            <div className="avatar">S</div>
            <div>
              <h3>Sahil</h3>
              <span className="review-date">3 weeks ago</span>
            </div>
          </div>
          <p className="review-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has...
          </p>
          <a href="#" className="read-more">
            Read more..
          </a>
        </div>
      </div>
      <button className="show-all-btn">Show all reviews</button>
    </div>
<hr/>
<SelectedPropertyCalendar/>

<hr/>
<DisplayPropertyMap/>

<hr/>
<PropertyOwnerDetails/>

<hr/>
<PropertyDisplayHouseRule/>
<hr/>
<PropertyDisplayPolicy/>
    </div>
  );
}

export default DisplayProperty;
