import React from 'react';

const listingDetail = ({phone, address, yelpCategory, open, dollar, yelpRating }) => {
  return (
    <div>
      <span className='listingDetail'>Type: {yelpCategory || 'Loading...'}</span> <br/><br/>
      <span className='listingDetail listingDetail-address'>Address: {address || 'Loading...'}</span><br/><br/>

<div className='listingDetail-center'>
      <ul className='listingDetail-left'>
        <li className='listingDetail'>Yelp Rating: {yelpRating ? yelpRating+'/5' : 'Loading...'}</li><br/>
        <li className='listingDetail'>Open now: {open}</li>
      </ul>


      <ul className='listingDetail-right'>
        <li className='listingDetail'>Phone: {phone || 'Loading...'}</li><br/>
        <li className='listingDetail'>Price Level: {dollar}</li>
      </ul>
</div><br/>

    </div>
  )
}
export default listingDetail;
