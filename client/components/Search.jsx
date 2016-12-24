import React from 'react';
import Preference from '../containers/Preference.jsx';
import Map from '../containers/Map.jsx';

export default () => {
  const markers = [
    {
      location: {
        lat: 37.7749,
        lng: -122.4194
      }
    }
  ]

  return (
    <div>
      <div>
        <Map center={location} markers={markers} />
      </div>
      <Preference />
    </div>
  );
}
