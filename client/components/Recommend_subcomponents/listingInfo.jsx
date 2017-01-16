import React from 'react';
import { Image } from 'react-bootstrap';

const currentListing = ({ onClick, photos, distance, duration, name, rating }) => {
  const displayStar = (rating) => {
    let star = []
    rating = parseInt(rating)
    for (var i = 0; i < rating; i++ ) {
      star.push(<i key={i} className="fa fa-star" aria-hidden="true"></i>)
    }
    if (rating%1 !== 0) {
      star.push(<i key='half' className="fa fa-star-half-o" aria-hidden="true"></i>)
    }
    return star
  }

  return (
    <div>
      <Image className='listingPhoto' src={photos ? photos[0].getUrl({maxWidth: 400, maxHeight: 400}) : null} responsive />
      <h2 onClick={onClick}>{name}</h2>
      <div>
        <p className='listingDetail'><i className="fa fa-location-arrow" aria-hidden="true"></i> &nbsp; {distance ? `${distance} away, ${duration} of a walk` : "Loading distance and duration..." }</p>
        <p className='listingDetail'><i className="fa fa-hand-peace-o" aria-hidden="true"></i> &nbsp; {rating ? displayStar(rating) : 'Loading...'}</p>
      </div>
    </div>
  )
}

export default currentListing;

/*rating+'/5'*/
