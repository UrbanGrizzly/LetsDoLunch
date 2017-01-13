import React, { Component }  from 'react'
import { connect }           from 'react-redux'
import { Glyphicon, Image }  from 'react-bootstrap';
import StarRating            from 'react-bootstrap-star-rating';
import fetch                 from 'isomorphic-fetch';

import RejectButton          from './Recommend_subcomponents/rejectPlaceButton.jsx';
import AcceptButton          from './Recommend_subcomponents/acceptPlaceButton.jsx';
import LaterButton           from './Recommend_subcomponents/laterButton.jsx';
import NeverButton           from './Recommend_subcomponents/neverButton.jsx';
import CurrentListing        from './Recommend_subcomponents/listingInfo.jsx';
import ListingDetail         from './Recommend_subcomponents/listingDetail.jsx';
import Map                   from '../containers/Map_Container.jsx';
import SubmitModal           from '../containers/Selected_Modal.jsx';

export default class Recommend extends Component {

  constructor(props) {
    super(props)
  }

  componentDidUpdate() {
    let { singleListing, updateListing, listingIndex, fetchVenueDetails, finishVenueDetails } = this.props
    let { name, vicinity, price_level, opening_hours } = singleListing

    if (singleListing.id !== this.previousId) {
      this.previousId = singleListing.id;
      fetchVenueDetails();
      fetch('api/yelp?term='+name+'&location='+vicinity)
      .then(res =>
        res.json()
      )
      .then(json => {
        finishVenueDetails(true);
        let { distance, duration, open, dollar } = this.props.singleListing
        let { rating, phone, location, fourSqrRating } = json;
        //category
        let category='';
        for (var i = 0; i < json.categories.length; i++) {
          category += json.categories[i][0]+', ';
        }
        category = category.slice(0, -2)
        //phone Number
        let phoneNum = 'N/A';
        if (phone) {
          phoneNum = phone.substr(0,3)+'-'+phone.substr(3,3)+'-'+phone.substr(6,5)
        }
        //address
        let address = location.display_address.join(', ')

        updateListing({
          ...singleListing,
          distance: distance,
          duration: duration,
          yelpRating: rating,
          yelpCategory: category,
          dollar: dollar,
          open: open,
          phone: phoneNum,
          address: address,
          fourSqrRating: fourSqrRating
        })
      })
      .catch(err => {
        finishVenueDetails(false);
        console.log('Error encountered while fetching venue details from Foursquare and Yelp: ', err);
      })
    }
  }


  render() {
    let { places, singleListing, listingIndex, updatePlaces, nextPage, rejectPlace, toggleDetails,
      showDetails, addToBlacklist, addToWishlist, addToVisited, openModal, hideModal, map, user } = this.props;
    return (
      <div>
        <div className='col-md-7'>
          <Map />
        </div>
        <div className='col-md-5 single-rec'>
          <CurrentListing {...singleListing} />
          { showDetails ? null : <h5 onClick={toggleDetails}>more info</h5> }
          { showDetails ? <ListingDetail {...singleListing} /> : null }
          <div>
            <RejectButton onClick={() => {
              if (!places[listingIndex+1]) {
                nextPage()
                setTimeout(updatePlaces, 2000)
              } else rejectPlace(singleListing)
            }} />
            <AcceptButton onClick={() => {addToVisited(singleListing); openModal('afterSelectModal')} } />
            <NeverButton onClick={() => addToBlacklist(singleListing)} />
            <LaterButton onClick={() => addToWishlist(singleListing)} />
          </div>
        <SubmitModal isLoggedIn={user.isLoggedIn} origin={map.origin} place={singleListing} onClick={() => hideModal('afterSelectModal')}/>
        </div>
      </div>
    )
  }
}
