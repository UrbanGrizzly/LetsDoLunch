import React from 'react'
import { connect } from 'react-redux'
import StarRating from 'react-bootstrap-star-rating';
import { Glyphicon, Image } from 'react-bootstrap';
import RejectButton from './Recommend_subcomponents/rejectPlaceButton.jsx';
import AcceptButton from './Recommend_subcomponents/acceptPlaceButton.jsx';
import CurrentListing from './Recommend_subcomponents/listingInfo.jsx';
import ListingDetail from './Recommend_subcomponents/listingDetail.jsx';
import Map from '../containers/Map_Container.jsx';


const Recommend = ({ singleListing, rejectPlace, showDetail, detailVisible}) => {
  console.log(singleListing);
  return (
    <div>
      <div className='col-md-7'>
        <Map center={{lat: singleListing.location.coordinate.latitude, lng: singleListing.location.coordinate.longitude}} staticMarkers={true}/>
      </div>
      <div className='col-md-5 single-rec'>
        <CurrentListing onClick={() => showDetail()} {...singleListing}  />
        <div> { detailVisible ? <ListingDetail {...singleListing} /> : null}
        </div>
        <div>
          <RejectButton onClick={() => rejectPlace(singleListing)} />
          <AcceptButton onClick={() => alert('Enjoy your lunch!')} />
        </div>
      </div>
    </div>
  )
}


export default Recommend;
