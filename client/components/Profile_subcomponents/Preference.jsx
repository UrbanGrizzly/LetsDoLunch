import React, { Component } from 'react';
import DeleteX from './DeleteX.jsx';


export default (props) => {
  let { pref: { name, type, hover }, prefType, index, removeFn, mouseEnter, mouseLeave } = props;

  let enter = () => mouseEnter({ prefType, index });  
  let leave = () => mouseLeave({ prefType, index });

  let removePref = () => removeFn(name);

  return (
    <div 
    className="preference-box"
    onMouseEnter={ enter } 
    onMouseLeave={ leave } 
    >
      <p className="preference">
        { name }
      </p>
      { hover ? <DeleteX removeFn={ removePref } /> : null }
    </div>
  );
}
