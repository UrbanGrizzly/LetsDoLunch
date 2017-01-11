import React, { Component } from 'react';
import Preference from './Preference.jsx';

export default ({ blacklist, removeFn, mouseEnter, mouseLeave }) => {
  return (
    <div className="preference-container">
    Your blacklist: 
    (You have asked us never to show these places)
      { 
        blacklist ? blacklist.map((listing, index) => (
        <Preference 
        mouseEnter={mouseEnter} 
        mouseLeave={mouseLeave} 
        removeFn={removeFn} 
        pref={listing} 
        prefType={"blacklist"}
        index={index} 
        key={index} 
        />)) : 
        " No items yet."
      } 
    </div>
  )
}
