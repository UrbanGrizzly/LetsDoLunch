import React from 'react';
import Preference from './Preference.jsx';

export default ({ prefs, removeFn, mouseEnter, mouseLeave }) => {
  return (
    <div className="preference-container">
      Default Preferences:
      { 
        prefs.map((pref, index) => (
        <Preference 
        mouseEnter={mouseEnter} 
        mouseLeave={mouseLeave} 
        removeFn={removeFn} 
        pref={pref} 
        prefType={"preferences"}
        index={index} 
        key={index} 
        />)) 
      }
    </div>
  )
}
