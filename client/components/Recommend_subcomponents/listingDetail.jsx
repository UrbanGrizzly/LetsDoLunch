import React from 'react';

const listingDetail = ({dollar, open, phone, address}) => {
  return (
    <div>
      <h4>Phone: {phone}</h4>
      <h4>Address: {address}</h4>
      <h4>Open now: {open}</h4>
      <h4>Price Level: {dollar}</h4>
    </div>
  )
}

export default listingDetail;
//<h4>Distance: distance, duration away</h4> --> will add back once i find them.
