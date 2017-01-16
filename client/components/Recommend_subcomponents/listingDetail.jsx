import React from 'react';

const listingDetail = ({phone, address, yelpCategory, open, dollar, yelpRating }) => {
  const displayStar = (yelpRating) => {
    let star = []
    yelpRating = parseInt(yelpRating)
    for (var i = 0; i < yelpRating; i++ ) {
      star.push(<i key={i} className="fa fa-star" aria-hidden="true"></i>)
    }
    if (yelpRating%1 !== 0) {
      star.push(<i key='half' className="fa fa-star-half-o" aria-hidden="true"></i>)
    }
    return star
  }

  return (
    <div>
      <span className='listingDetail'><i className="fa fa-cutlery" aria-hidden="true"></i> &nbsp; {yelpCategory || 'Loading...'}</span> <br/><br/>
      <span className='listingDetail listingDetail-address'><i className="fa fa-home" aria-hidden="true"></i> &nbsp; {address || 'Loading...'}</span><br/><br/>

<div className='listingDetail-center'>
      <ul className='listingDetail-left'>
        <li className='listingDetail'><i className="fa fa-yelp" aria-hidden="true"></i> &nbsp; {yelpRating ? displayStar(yelpRating) : 'Loading...'}</li><br/>
        <li className='listingDetail'><i className="fa fa-clock-o" aria-hidden="true"></i> &nbsp; {open}</li>
      </ul>


      <ul className='listingDetail-right'>
        <li className='listingDetail'><i className="fa fa-phone" aria-hidden="true"></i> &nbsp; {phone || 'Loading...'}</li><br/>
        <li className='listingDetail'><i className="fa fa-money" aria-hidden="true"></i> &nbsp; {dollar}</li>
      </ul>
</div>

    </div>
  )
}
export default listingDetail;
