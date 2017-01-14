import React, { Component } from 'react';
import Selector from '../containers/Selector.jsx';


const options = ["Eat Food", "Get Drinks", "Have Fun"];

export default ({onClick}) => {
  return ( 
    <div className='prefItem'>
      <h3 className="col-md-4">What would you like to do?</h3>
      <Selector onClick={onClick} className="col-md-4" selector='options' selections={options} />
    </div>
  )
};