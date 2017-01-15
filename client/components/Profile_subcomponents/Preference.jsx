import React, { Component } from 'react';
import DeleteX from './DeleteX.jsx';


export default (props) => {
  let { pref: { id, name, type, hover }, prefType, index, removeFn, mouseEnter, mouseLeave } = props;

  let enter = () => mouseEnter({ prefType, index });  
  let leave = () => mouseLeave({ prefType, index });

  let removePref = () => removeFn(id);

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
