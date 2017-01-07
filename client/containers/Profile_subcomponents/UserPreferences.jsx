import React from 'react';
import UserPreference from './UserPreference.jsx';

let dummyData = [
  {
    "name": "American",
    "type": "like"
  },
  {
    "name": "Chinese",
    "type": "like"
  },
  {
    "name": "Steff's",
    "type": "dislike"
  },
  {
    "name": "Indian",
    "type": "dislike"
  }
];

export default ({ prefs }) => {
  return (
    <div className="well">
      { prefs.map((pref, index) => <UserPreference pref={pref} key={index} />) }
    </div>
  )
}
