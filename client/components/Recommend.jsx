import React from 'react'
import { connect } from 'react-redux'
import StarRating from 'react-bootstrap-star-rating';
import { Glyphicon, Image } from 'react-bootstrap';
import RejectButton from './Recommend_subcomponents/rejectPlaceButton.jsx';
import AcceptButton from './Recommend_subcomponents/acceptPlaceButton.jsx';
import CurrentListing from './Recommend_subcomponents/listingInfo.jsx';
import Map from '../containers/Map_Container.jsx';


const Recommend = ({ singleListing, rejectPlace}) => {
  return (
    <div>
      <div className='col-md-7'>
        <Map />
      </div>
      <div className='col-md-5 single-rec'>
        <CurrentListing {...singleListing} />
        <div>
          <RejectButton onClick={() => rejectPlace(singleListing)} />
          <AcceptButton onClick={() => alert('Enjoy your lunch!')} />
        </div>
      </div>
    </div>
  )
}


export default Recommend;
