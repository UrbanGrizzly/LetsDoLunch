import React from 'react';
import { Image } from 'react-bootstrap';

const currentListing = ({onClick, photos, name, rating, yelpRating, fourSqrRating, yelpCategory, price, distance, duration }) => {
  return (
    <div>
      <Image className='listingPhoto' src={photos ? photos[0].getUrl({maxWidth: 400, maxHeight: 400}) : null} responsive />
      <h2 onClick={onClick}>{name}</h2>
      <div>
        <h4>Distance: {distance} away, {duration} of walk.</h4>
        <h4>Type: {yelpCategory || 'Loading...'}</h4>
        <ul>Google Rating: {rating}/5 </ul>
        <ul>Yelp Rating: {yelpRating}/5</ul>
        <ul>Foursquare Rating: {fourSqrRating}/5</ul>
      </div>
    </div>
  )
}

export default currentListing;
