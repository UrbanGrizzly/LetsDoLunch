import React from 'react';
import UserPreference from './UserPreference.jsx';

export default ({ prefs, removeFn }) => {
  return (
    <div className="well">
      { prefs.map((pref, index) => <UserPreference removeFn={removeFn} pref={pref} key={index} />) }
    </div>
  )
}
