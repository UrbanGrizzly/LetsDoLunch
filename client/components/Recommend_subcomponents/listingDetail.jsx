import React from 'react';

const listingDetail = ({phone, address, yelpCategory, open, dollar, yelpRating, fourSqrRating}) => {
  return (
    <div>
      <span className='listingDetail'>Type: {yelpCategory || 'Loading...'}</span> <br/><br/>

<div className='listingDetail-center'>
      <ul className='listingDetail-left'>
        <li className='listingDetail'>Yelp Rating: {yelpRating ? yelpRating+'/5' : 'Loading...'}</li>
        <li className='listingDetail'>Open now: {open}</li>
      </ul>


      <ul className='listingDetail-right'>
        <li className='listingDetail'>Phone: {phone || 'Loading...'}</li>
        <li className='listingDetail'>Price Level: {dollar}</li>
      </ul>
</div><br/>

      <span className='listingDetail listingDetail-address'>Address: {address || 'Loading...'}</span>
    </div>
  )
}
export default listingDetail;
