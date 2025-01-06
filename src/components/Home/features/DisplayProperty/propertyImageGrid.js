import React, { useState } from 'react';
import './propertyImageGrid.css';

export default function PropertyImageGrid() {
  const [isGalleryOpen, setGalleryOpen] = useState(false);

  const images = [
    "https://via.placeholder.com/600x400", // Replace with real image URLs
    "https://via.placeholder.com/300x200",
    "https://via.placeholder.com/300x200",
    "https://via.placeholder.com/300x200",
    "https://via.placeholder.com/300x200",
    "https://via.placeholder.com/300x200", // Extra images for gallery
    "https://via.placeholder.com/300x200",
    "https://via.placeholder.com/300x200",
  ];

  return (
    <div className="PropertyImageGrid-container">
      <div className="PropertyImageGrid-grid">
        {/* Main Image */}
        <div className="PropertyImageGrid-main-image">
          <img src={images[0]} alt="Main treehouse" />
        </div>

        {/* Sub Images */}
        <div className="PropertyImageGrid-sub-images">
          {images.slice(1, 5).map((img, index) => (
            <img key={index} src={img} alt={`Treehouse ${index + 1}`} />
          ))}
        </div>
      </div>

      {/* Show All Photos Button */}
      <button
        className="PropertyImageGrid-show-all-button"
        onClick={() => setGalleryOpen(true)}
      >
        Show all photos
      </button>

      {/* Gallery Popup */}
      {isGalleryOpen && (
        <div className="PropertyImageGrid-gallery-popup">
          <div className="PropertyImageGrid-gallery-content">
            <button
              className="PropertyImageGrid-close-button"
              onClick={() => setGalleryOpen(false)}
            >
              &times;
            </button>
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Treehouse ${index + 1}`}
                className="PropertyImageGrid-gallery-image"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
