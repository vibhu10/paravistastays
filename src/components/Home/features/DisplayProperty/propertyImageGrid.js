import React, { useState } from 'react';
import './propertyImageGrid.css';

export default function PropertyImageGrid({ photoGallery }) {
  // Flatten the Photos from the photoGallery into a single array
  const images = photoGallery
    .flatMap((section) => section.Photos)
    .filter((img) => img); // Remove empty or undefined photos
  
  const [isGalleryOpen, setGalleryOpen] = useState(false);

  // Handle case when there are no images
  if (images.length === 0) {
    return <div>No images available</div>;
  }

  return (
    <div className="PropertyImageGrid-container">
      <div className="PropertyImageGrid-grid">
        {/* Main Image */}
        <div className="PropertyImageGrid-main-image">
          <img src={images[0]} alt="Main property" />
        </div>

        {/* Sub Images */}
        <div className="PropertyImageGrid-sub-images">
          {images.slice(1, 5).map((img, index) => (
            <img key={index} src={img} alt={`Property image ${index + 1}`} />
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
                alt={`Property image ${index + 1}`}
                className="PropertyImageGrid-gallery-image"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
