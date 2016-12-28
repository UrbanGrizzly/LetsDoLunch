import React from 'react';
import Preference from '../containers/Preference.jsx';
import Map from '../containers/Map.jsx';

export default () => {
  return (
    <div>
      <div>
        <Map />
      </div>
      <Preference />
    </div>
  );
}
