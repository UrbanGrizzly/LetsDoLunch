import React from 'react';
import { Image } from 'react-bootstrap';

const currentListing = ({onClick, photos, distance, duration, name, rating }) => {
  return (
    <div>
      <Image className='listingPhoto' src={photos ? photos[0].getUrl({maxWidth: 400, maxHeight: 400}) : null} responsive />
      <h2 onClick={onClick}>{name}</h2>
      <div>
        <p className='listingDetail'>Distance: {distance ? `${distance} away, ${duration} of a walk` : "Loading distance and duration..." }</p>
        <p className='listingDetail'>Rating: {rating ? rating+'/5' : 'Loading...'}</p>
      </div>
    </div>
  )
}

export default currentListing;
