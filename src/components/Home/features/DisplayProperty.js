import React, { useState } from 'react';
import './DisplayProperty.css';
const propertyData = {
    images: [
      "https://tse4.mm.bing.net/th?id=OIP.nPNmQs6cm7VToKJ7oHv1iwHaE8&pid=Api",
      "https://tse2.mm.bing.net/th?id=OIP.E0tnPW81_JeMB35SPMCATwHaHc&pid=Api",
      "https://tse2.mm.bing.net/th?id=OIP.CUpjCitxOHZoCb2eg4Gl1gHaLb&pid=Api",
      "https://tse1.mm.bing.net/th?id=OIP.toTv8tHVsosP8MkGhMNcbwHaE8&pid=Api",
      "https://tse1.mm.bing.net/th?id=OIP.toTv8tHVsosP8MkGhMNcbwHaE8&pid=Api",
    
    ],
    title: "Luxurious, picture-perfect, stunning treehouse",
    location: "Treehouse in Mayfield, United Kingdom",
    rating: 4.98,
    reviews: 118,
    description:
      "Hoots Treehouse is a picture-perfect, romantic, luxurious treehouse with all mod cons in an area of outstanding natural beauty. Only 45 minutes south of M25, clad in aromatic cedar wood, beautifully furnished. Ideal for couples.",
    price: 275,
    serviceFee: 93,
    maxGuests: 4,
  };
  
  const DisplayProperty = ({ property }) => {
    const [showAllImages, setShowAllImages] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const { images, title, location, rating, reviews, description, price, serviceFee, maxGuests } = propertyData;
  
    const displayedImages = showAllImages ? images : images.slice(0, 5);
  
    // Open the modal
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    // Close the modal
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    return (
      <div className="display-property-container">
        <header className="display-property-header">
          <h1>{title}</h1>
        </header>
  
        {/* Full-width Image Section */}
        <div className="display-property-images">
          <div className="display-property-thumbnails">
            {displayedImages.map((src, index) => (
              <img key={index} src={src} alt={`Thumbnail ${index + 1}`} />
            ))}
          </div>
          {!showAllImages && (
            <button
              className="display-property-showall-button"
              onClick={() => {
                setShowAllImages(true);
                openModal();
              }}
            >
              Show All Photos
            </button>
          )}
        </div>
  
        {/* Main Content with Booking Section */}
        <div className="display-property-main-content">
          <div className="display-property-details">
            <h2>{location}</h2>
            <div className="display-property-rating">
              <span>{'⭐'.repeat(Math.round(rating))}</span>
              <span>{rating} ({reviews} Reviews)</span>
            </div>
            <p>{description}</p>
          </div>
  
          <div className="display-property-reservation">
            <div className="display-property-price">
              <span>${price}</span> <span>/ night</span>
            </div>
            <div className="display-property-dates">
              <label>Check-in:</label>
              <input type="date" />
              <label>Check-out:</label>
              <input type="date" />
              <label>Guests:</label>
              <select>
                {Array.from({ length: maxGuests }).map((_, index) => (
                  <option key={index} value={index + 1}>
                    {index + 1} {index + 1 === 1 ? 'guest' : 'guests'}
                  </option>
                ))}
              </select>
            </div>
            <div className="display-property-total">
              <p>${price} × 2 nights = ${price * 2}</p>
              <p>Paradise service fee: ${serviceFee}</p>
              <p>Total: ${price * 2 + serviceFee}</p>
            </div>
            <button className="display-property-reserve-button">Reserve</button>
          </div>
        </div>
  
        {/* Modal for Full Image View */}
        {isModalOpen && (
          <div className="display-property-modal">
            <div className="display-property-modal-content">
              <span className="display-property-modal-close" onClick={closeModal}>
                &times;
              </span>
              <div className="display-property-modal-images">
                {images.map((src, index) => (
                  <img key={index} src={src} alt={`Full-size ${index + 1}`} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default DisplayProperty;
  