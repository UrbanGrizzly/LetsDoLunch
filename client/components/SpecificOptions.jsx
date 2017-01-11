import React from 'react';

import Selector from '../containers/Selector.jsx';

const food = ['Chinese', 'Japanese', 'Italian', 'Spanish', 'Thai', 'Mexican', 'Mediterranean', 'Indian', 'Greek', 'French', 'American'].sort();

const drinks = [].sort();

const activities = [].sort();


export default (option) => {
  return (
    <div>
      <Selector selector='cuisine' selections={food} /> 
    </div>
  );
}