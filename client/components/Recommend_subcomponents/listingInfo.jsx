import React from 'react';
import { Image } from 'react-bootstrap';

const currentListing = ({onClick, image_url, name, rating, categories}) => {
  return (
    <div>
      <Image src={image_url} responsive />
      <h2 onClick={onClick}>{name}</h2>
      <div>
        <h4 className="col-sm-6">Rating: {rating}/5</h4> 
        <h4 className="col-sm-6">Type: {categories[0][0]}</h4>
      </div>
    </div>
  )
}

export default currentListing;
