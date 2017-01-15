import React from 'react';

const listingDetail = ({phone, address, yelpCategory, open, dollar, yelpRating, fourSqrRating}) => {
  return (
    <div>
      <span className='listingDetail'>Type: {yelpCategory || 'Loading...'}</span> <br />

      <ul className='listingDetail-left'>
        <li className='listingDetail'>Yelp Rating: {yelpRating ? yelpRating+'/5' : 'Loading...'}</li>
        <li className='listingDetail'>Open now: {open}</li>
      </ul>


      <ul className='listingDetail-right'>
        <li className='listingDetail'>Phone: {phone || 'Loading...'}</li>
        <li className='listingDetail'>Price Level: {dollar}</li>
      </ul><br/>

      <span className='listingDetail listingDetail-address'>Address: {address || 'Loading...'}</span>
    </div>
  )
}

export default listingDetail;


      // <span className='listingDetail'>Yelp Rating: {yelpRating ? yelpRating+'/5' : 'Loading...'}</span> &nbsp;&nbsp;
      // <span className='listingDetail'>Foursquare Rating: {fourSqrRating ? fourSqrRating+'/5' : 'Loading...'}</span><br />
      // <span className='listingDetail'>Type: {yelpCategory || 'Loading...'}</span> &nbsp;&nbsp;
      // <span className='listingDetail'>Phone: {phone || 'Loading...'}</span><br />
      // <span className='listingDetail'>Open now: {open}</span> &nbsp;&nbsp;
      // <span className='listingDetail'>Price Level: {dollar}</span><br />

        // <li className='listingDetail'>Foursquare Rating: {fourSqrRating ? fourSqrRating+'/5' : 'Loading...'}</li>
