import React, { useState } from 'react';
import './PropertyLayout.css';

export default function PropertyLayout() {
  const data = {
    photoGallery: [
      {
        name: 'Bedroom',
        Photos: [
          'https://images.pexels.com/photos/3581753/pexels-photo-3581753.jpeg',
          'https://images.pexels.com/photos/3581753/pexels-photo-3581753.jpeg',
          'https://images.pexels.com/photos/3581753/pexels-photo-3581753.jpeg',
        ],
      },
      {
        name: 'Living Room',
        Photos: [
          'https://images.pexels.com/photos/3241973/pexels-photo-3241973.jpeg',
          'https://images.pexels.com/photos/3241973/pexels-photo-3241973.jpeg',
        ],
      },
      {
        name: 'Kitchen',
        Photos: [],
      },
    ],
  };

  const [selectedGallery, setSelectedGallery] = useState('Bedroom');
  const [photos, setPhotos] = useState(
    data.photoGallery.find((gallery) => gallery.name === 'Bedroom')?.Photos || []
  );

  const handleSelectionChange = (event) => {
    const selectedName = event.target.value;
    setSelectedGallery(selectedName);
    const gallery = data.photoGallery.find((gallery) => gallery.name === selectedName);
    setPhotos(gallery ? gallery.Photos : []);
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
            {data.photoGallery.map((gallery, index) => (
              <option key={index} value={gallery.name}>
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
