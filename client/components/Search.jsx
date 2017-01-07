import React from 'react';
import Map from '../containers/Map_Container.jsx';
import Preferences from '../containers/Preferences.jsx';
import { changeDestination } from '../actions/map_action';


export default () => {

  return (
    <div>
      <div className="col-md-5 prefTitle">
        Location
        <Map />
      </div>
      <div className="col-md-7 preference"><Preferences /></div>
    </div>
  );
}
