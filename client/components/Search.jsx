import React from 'react';
import Map from '../containers/Map_Container.jsx';
import Preferences from '../containers/Preferences.jsx';
import { changeDestination } from '../actions/map_action';


export default () => {

  return (
    <div>
      <div className="preference"><Preferences /></div>
    </div>
  );
}
