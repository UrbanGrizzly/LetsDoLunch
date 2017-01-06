import React from 'react';
import Preference from './Preference.jsx';

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

export default () => {
  return (
    <div className="well">
      { dummyData.map((pref, index) => <Preference pref={pref} />) }
    </div>
  )
}
