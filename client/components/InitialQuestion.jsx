import React, { Component } from 'react';
import Selector from '../containers/Selector.jsx';


const options = ["Eat Food", "Get Drinks", "Have Fun"];

export default () => {
  return ( 
    <div className='prefItem'>
      <h4 className="col-md-4">What would you like to do?</h4>
      <Selector className="col-md-4" selector='options' selections={options} />
    </div>
  )
};