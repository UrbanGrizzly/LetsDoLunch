import React from 'react';
import { Image } from 'react-bootstrap';

const currentListing = ({onClick, photos, distance, duration, name, rating }) => {
  return (
    <div>
      <Image className='listingPhoto' src={photos ? photos[0].getUrl({maxWidth: 400, maxHeight: 400}) : null} responsive />
      <h2 onClick={onClick}>{name}</h2>
      <div>
        <h5 className='listingInfo'>Distance: {distance ? `${distance} away, ${duration} of a walk` : "Loading distance and duration..." }</h5>
        <h5 className='listingInfo'>Rating: {rating ? rating+'/5' : 'Loading...'}</h5>
      </div>
    </div>
  )
}

export default currentListing;
