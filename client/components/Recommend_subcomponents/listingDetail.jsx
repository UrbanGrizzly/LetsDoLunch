import React from 'react';

const listingDetail = ({phone, address, yelpCategory, rating, yelpRating, fourSqrRating}) => {
  return (
    <div>
      <ul>
        <li>Google Rating: {rating}/5 </li>
        <li>Yelp Rating: {yelpRating}/5</li>
        <li>Foursquare Rating: {fourSqrRating}/5</li>
      </ul>
      <h4>Type: {yelpCategory || 'Loading...'}</h4>
      <h4>Phone: {phone}</h4>
      <h4>Address: {address}</h4>
    </div>
  )
}

export default listingDetail;
