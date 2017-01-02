import React from 'react'
import { connect } from 'react-redux'
import StarRating from 'react-bootstrap-star-rating';
import { Glyphicon, Image } from 'react-bootstrap';
import RejectButton from './Recommend_subcomponents/rejectPlaceButton.jsx';
import AcceptButton from './Recommend_subcomponents/acceptPlaceButton.jsx';
import CurrentListing from './Recommend_subcomponents/listingInfo.jsx';


const Recommend = ({ singleListing, rejectPlace}) => {
  return <div className='col-sm-4 single-rec'>
      <CurrentListing {...singleListing} />
      <div>
        <RejectButton onClick={() => rejectPlace(singleListing)} />
        <AcceptButton onClick={() => alert('Enjoy your lunch!')} />
      </div>
    </div>
}


export default Recommend;
