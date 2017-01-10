import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Glyphicon, Image } from 'react-bootstrap';
import StarRating from 'react-bootstrap-star-rating';
import fetch from 'isomorphic-fetch';

import RejectButton from './Recommend_subcomponents/rejectPlaceButton.jsx';
import AcceptButton from './Recommend_subcomponents/acceptPlaceButton.jsx';
import CurrentListing from './Recommend_subcomponents/listingInfo.jsx';
import ListingDetail from './Recommend_subcomponents/listingDetail.jsx';
import Map from '../containers/Map_Container.jsx';

export default class Recommend extends Component {

  constructor(props) {
    super(props)
  }

  componentDidUpdate() {
    let { singleListing, updateListing } = this.props
    let { name, vicinity } = singleListing
    console.log('name: ',name)
    console.log('vicinity: ',vicinity)
    if (singleListing.id !== this.previousId) {
      this.previousId = singleListing.id
      fetch('api/yelp?term='+name+'&location='+vicinity)
      .then(res =>

        res.json()
      )
      .then(json => {
        console.log(json)
        //let { rating } = results.businesses[0]
        updateListing({...singleListing, yelpRating: 'rating'})
      })
    }
  }

  render() {
    let { singleListing, rejectPlace, toggleDetails, showDetails } = this.props;
    return (
      <div>
        <div className='col-md-7'>
          <Map />
        </div>
        <div className='col-md-5 single-rec'>
          <CurrentListing onClick={toggleDetails} {...singleListing} />
          { showDetails ? null : <h5 onClick={toggleDetails}>more info</h5> }
          { showDetails ? <ListingDetail {...singleListing} /> : null }
          <div>
            <RejectButton onClick={() => rejectPlace(singleListing)} />
            <AcceptButton onClick={() => alert('Enjoy your lunch!')} />
          </div>
        </div>
      </div>
    )
  }
}
