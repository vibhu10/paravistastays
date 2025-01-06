import React from 'react';
import { GoogleMap, useLoadScript, Marker, Circle } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '500px',
};

const center = {
  lat: 25.7617, // Latitude for Miami, Florida
  lng: -80.1918, // Longitude for Miami, Florida
};

const propertyLocation = {
  lat: 25.7617,
  lng: -80.1918,
};

const DisplayPropertyMap = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY', // Replace with your API key
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div>
      <h2>Map</h2>
      <p>Miami, Florida</p>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={15}
        center={center}
      >
        <Circle
          center={propertyLocation}
          radius={500}
          options={{
            fillColor: '#90CAF9',
            fillOpacity: 0.4,
            strokeColor: '#1E88E5',
            strokeOpacity: 0.8,
            strokeWeight: 2,
          }}
        />
        <Marker position={propertyLocation} />
      </GoogleMap>
    </div>
  );
};

export default DisplayPropertyMap;
