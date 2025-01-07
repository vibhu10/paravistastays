import React, { useState } from 'react';
import './PropertyLayout.css';

export default function PropertyLayout({ data }) {
  // Set initial gallery to the first one, or default to an empty state
  const [selectedGallery, setSelectedGallery] = useState(
    data?.[0]?.name || ''
  );
  const [photos, setPhotos] = useState(
    data?.[0]?.photos || []
  );

  const handleSelectionChange = (event) => {
    const selectedName = event.target.value;
    setSelectedGallery(selectedName);

    // Find the gallery based on the selected name and update photos
    const gallery = data.find((gallery) => gallery.name === selectedName);
    setPhotos(gallery ? gallery.photos : []);
  };

  return (
    <div className="property-select-layout-home-container">
      <h3 className="property-select-layout-home-title">Layout</h3>

      <div className="property-select-layout-home-dropdown">
        <label htmlFor="photo-gallery" className="property-select-layout-home-label">
          <span>{selectedGallery}</span>
          <select
            id="photo-gallery"
            value={selectedGallery}
            onChange={handleSelectionChange}
            className="property-select-layout-home-select"
          >
            {data.map((gallery, index) => (
              <option key={gallery.id} value={gallery.name}>
                {gallery.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="property-select-layout-home-gallery">
        {photos.length > 0 ? (
          photos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`${selectedGallery} photo ${index + 1}`}
              className="property-select-layout-home-image"
            />
          ))
        ) : (
          <p className="property-select-layout-home-no-photos">
            No photos available for the selected room.
          </p>
        )}
      </div>
    </div>
  );
}
