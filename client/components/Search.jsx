import React from 'react';
import Locale from '../containers/Map_Container.jsx';
import Preference from '../containers/Preference.jsx';

export default () => {
  return (
    <div>
      <div className="col-md-5"><Locale /></div>
      <div className="col-md-7 preference"><Preference /></div>
    </div>
  );
}
