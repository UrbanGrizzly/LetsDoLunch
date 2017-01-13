import React from 'react';
import { Image } from 'react-bootstrap';

const currentListing = ({onClick, photos, distance, duration, name, rating }) => {
  return (
    <div>
      <Image className='listingPhoto' src={photos ? photos[0].getUrl({maxWidth: 400, maxHeight: 400}) : null} responsive />
      <h2 onClick={onClick}>{name}</h2>
      <div>
        <h4>Distance: {distance} away, {duration} of walk.</h4>
        <h4>Rating: {rating ? rating+'/5' : 'Loading...'}</h4>
      </div>
    </div>
  )
}

export default currentListing;
