import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Glyphicon, Image } from 'react-bootstrap';
import StarRating from 'react-bootstrap-star-rating';
import fetch from 'isomorphic-fetch';

import RejectButton from './Recommend_subcomponents/rejectPlaceButton.jsx';
import AcceptButton from './Recommend_subcomponents/acceptPlaceButton.jsx';
import LaterButton from './Recommend_subcomponents/laterButton.jsx';
import NeverButton from './Recommend_subcomponents/neverButton.jsx';
import CurrentListing from './Recommend_subcomponents/listingInfo.jsx';
import ListingDetail from './Recommend_subcomponents/listingDetail.jsx';
import Map from '../containers/Map_Container.jsx';

export default class Recommend extends Component {

  constructor(props) {
    super(props)
  }

  componentDidUpdate() {
    console.log('result from google', this.props)
    let { singleListing, updateListing } = this.props
    let { name, vicinity, price_level } = singleListing
    let dollar = '';
    for (var i = 0; i<price_level; i++) {
      dollar=dollar+'$'
    }

    let open = singleListing.opening_hours.open_now;
    if (open) {
      open = 'Yes'
    } else {
      open = 'No'
    }
    if (singleListing.id !== this.previousId) {
      this.previousId = singleListing.id
      fetch('api/yelp?term='+name+'&location='+vicinity)
      .then(res =>
        res.json()
      )
      .then(json => {
        console.log('result from yelp', json)
        let { rating, phone, location } = json;
        let category = json.categories[0][0];
        let address = location.display_address.join(', ')
        updateListing({
          ...singleListing,
          yelpRating: rating,
          yelpCategory: category,
          dollar: dollar,
          open: open,
          phone: phone,
          address: address
        })
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
            <NeverButton onClick={() => alert('You won\'t see it again!')} />
            <LaterButton onClick={() => console.log('clicking later button')} />
          </div>
        </div>
      </div>
    )
  }
}
