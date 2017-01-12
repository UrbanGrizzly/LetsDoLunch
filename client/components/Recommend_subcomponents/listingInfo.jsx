import React from 'react';
import { Image } from 'react-bootstrap';

const currentListing = ({onClick, photos, name, rating, yelpRating, fourSqrRating, yelpCategory, price}) => {
  return (
    <div>
      <Image src={photos ? photos[0].getUrl({maxWidth: 400, maxHeight: 400}) : null} responsive />
      <h2 onClick={onClick}>{name}</h2>
      <div>
        <h4>Type: {yelpCategory || 'Loading...'}</h4>
        <h4>Google Rating: {rating}/5 </h4>
        <h4>Yelp Rating: {yelpRating || 'Loading...'}/5</h4>
        <h4>Foursquare Rating: {fourSqrRating || 'Loading...'}/5</h4>
      </div>
    </div>
  )
}

export default currentListing;
