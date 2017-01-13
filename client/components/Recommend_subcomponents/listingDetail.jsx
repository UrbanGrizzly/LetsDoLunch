import React from 'react';

const listingDetail = ({phone, address, yelpCategory, rating, yelpRating, fourSqrRating}) => {
  return (
    <div>
      <h4>Google Rating: {rating}/5 </h4>
      <h4>Yelp Rating: {yelpRating}/5</h4>
      <h4>Foursquare Rating: {fourSqrRating}/5</h4>
      <h4>Type: {yelpCategory || 'Loading...'}</h4>
      <h4>Phone: {phone}</h4>
      <h4>Address: {address}</h4>
    </div>
  )
}

export default listingDetail;
