import React from 'react';
import Map from '../containers/Map_Container.jsx';
import Preference from '../containers/Preference.jsx';
import { changeDestination } from '../actions/map_action';


export default () => {

  changeDestination(null);

  return (
    <div>
      <div className="col-md-5 prefTitle">
        Location
        <Map />
      </div>
      <div className="col-md-7 preference"><Preference /></div>
    </div>
  );
}
