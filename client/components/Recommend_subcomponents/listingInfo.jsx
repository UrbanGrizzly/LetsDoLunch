import React from 'react';
import { Image } from 'react-bootstrap';

const currentListing = ({onClick, photos, name, rating, categories}) => {
  return (
    <div>
      <Image src={photos ? photos[0].getUrl({maxWidth: 400, maxHeight: 400}) : null} responsive />
      <h2 onClick={onClick}>{name}</h2>
      <div>
        <h4>Rating: {rating}/5</h4>
        <h4>Type: {'stuff goes here...'}</h4>
      </div>
    </div>
  )
}

export default currentListing;
