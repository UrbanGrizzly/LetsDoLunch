import React from 'react';

const listingDetail = ({phone, address, yelpCategory, yelpRating, fourSqrRating}) => {
  return (
    <div>
      <h4>Yelp Rating: {yelpRating ? yelpRating+'/5' : 'Loading...'}</h4>
      <h4>Foursquare Rating: {fourSqrRating ? fourSqrRating+'/5' : 'Loading...'}</h4>
      <h4>Type: {yelpCategory || 'Loading...'}</h4>
      <h4>Phone: {phone || 'Loading...'}</h4>
      <h4>Address: {address || 'Loading...'}</h4>
    </div>
  )
}

export default listingDetail;
