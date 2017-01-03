import React from 'react';

const listingDetail = (listing) => {
  return (
    <div>
      <h4 className="col-sm-6">Phone: {listing.display_phone}</h4>
      <h5 className="col-sm-12">Address: {listing.location.display_address}</h5>
    </div>
  )
}


export default listingDetail;
