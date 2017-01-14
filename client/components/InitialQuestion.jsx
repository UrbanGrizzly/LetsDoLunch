import React, { Component } from 'react';
import Selector from '../containers/Selector.jsx';


const options = ["Eat Food", "Get Drinks", "Have Fun"];

export default ({onClick}) => {
  return ( 
    <div>
      <h3 className="col-md-4 prefTitle">What would you like to do?</h3>
      <div className="prefItem">
        <Selector onClick={onClick} selector='options' selections={options} />
      </div>
    </div>
  )
};