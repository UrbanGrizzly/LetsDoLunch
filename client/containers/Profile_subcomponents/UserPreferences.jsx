import React from 'react';
import UserPreference from './UserPreference.jsx';

export default ({ prefs }) => {
  return (
    <div className="well">
      { prefs.map((pref, index) => <UserPreference pref={pref} key={index} />) }
    </div>
  )
}
