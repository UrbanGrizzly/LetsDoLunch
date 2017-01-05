import React from 'react';

const listingDetail = (listing) => {
  return (
    <div>
      <h4 className="col-sm-6">Phone: {listing.display_phone}</h4>
      <h4 className="col-sm-6">Address: {listing.location.display_address}</h4>
    </div>
  )
}


export default listingDetail;
