import React from 'react';

import Selector from '../containers/Selector.jsx';

const detailArrays = {
  food: ['Chinese', 'Japanese', 'Italian', 'Spanish', 'Thai', 'Mexican', 'Mediterranean', 'Indian', 'Greek', 'French', 'American'],
drinks: ['Cocktail Bars', 'Breweries', 'Dive Bars', 'Wine Bars'],
fun: ['Concerts', 'Parks', 'Adult Entertainment', 'Museums'] 
}



export default ({ option }) => {
  console.log(option)
  return (
    <div>
      <Selector selector='detail' selections={detailArrays[option]} /> 
    </div>
  );
}