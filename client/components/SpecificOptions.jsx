import React from 'react';

import Selector from '../containers/Selector.jsx';

const food = ['Chinese', 'Japanese', 'Italian', 'Spanish', 'Thai', 'Mexican', 'Mediterranean', 'Indian', 'Greek', 'French', 'American'].sort();

const drinks = [].sort();

const fun = [].sort();


export default (option) => {
  return (
    <div>
      <Selector selector='detail' selections={food} /> 
    </div>
  );
}