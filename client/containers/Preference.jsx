import React, { Component, PropTypes } from 'react';
import fetch from 'isomorphic-fetch'
import { connect } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { Button } from 'react-bootstrap';

import Time from '../components/Preference_subcomponent/Time.jsx';
import Cuisine from '../components/Preference_subcomponent/Cuisine.jsx';
import PriceRange from '../components/Preference_subcomponent/PriceRange.jsx';
import Neighborhood from '../components/Preference_subcomponent/Neighborhood.jsx';
import Lucky from '../components/Preference_subcomponent/Lucky.jsx';

import { fetchPlaces, receivePlaces } from '../actions/action_get_places';
import { changeTime, changePrice, changeNeighborhood, changeCuisine, feelingLucky } from '../actions/preference_action'

class Preference extends Component {

  constructor(props) {
    super(props);
    this.submitPreference=this.submitPreference.bind(this);
    // this.foursqr=this.foursqr.bind(this);
  };

  submitPreference() {
    let pref = {}; //most likely going into state or db for stored user pref
    let query = {};

    for (var statuses in this.props.preferenceState) {
      for (var value in this.props.preferenceState[statuses]) {
        if (this.props.preferenceState[statuses][value] === true) {
          if (!pref[statuses]) {
            pref[statuses]={};
            query[statuses]=[];
          }
          pref[statuses][value]=true;
          query[statuses].push(value);
        }
      }
    }
    this.props.fetchPlaces(query);
  };

  // foursqr(){
  //   this.props.foursqr();
  // }

  render () {
    return (
      <div>

        <div className="col-md-11"><Cuisine changeCuisine={this.props.changeCuisine} cuisineStatus={this.props.preferenceState.cuisineStatus} /></div>

        <div className="col-md-11"><Time changeTime={this.props.changeTime} timeStatus={this.props.preferenceState.timeStatus}/></div>

        <div className="col-md-11"><PriceRange changePrice={this.props.changePrice} priceStatus={this.props.preferenceState.priceStatus}/></div>

        <div><Button bsStyle='danger' onClick={this.props.foursqr}> 4^2  test </Button></div>

          <div className="col-md-offset-11 prefSubmit" >
            <Button bsStyle='info' type="submit" onClick={this.submitPreference}>Submit</Button>
          </div>
      </div>
    )
  };
}

////// RR - connectiong React/Redux //////
//1. state-related, refer to reducer files
const mapStateToProps =(state) => {
  return { preferenceState: state.preference }
}
//2. dispatch/action related, refer to action files
const mapDispatchToProps = (dispatch) => ({
  changeTime: (timeChosen) => {dispatch(changeTime(timeChosen))},
  changePrice: (priceChosen) => {dispatch(changePrice(priceChosen))},
  changeNeighborhood: (neighborhoodChosen) => {dispatch(changeNeighborhood(neighborhoodChosen))},
  changeCuisine: (cuisineChosen) => {dispatch(changeCuisine(cuisineChosen))},
  fetchPlaces: (query) => {
    dispatch(fetchPlaces(query))

    var tempterm='';
    if (!query.cuisineStatus) {
      tempterm='fried chicken' // TODO: this should be set to current user's top cuisine preference after user profile has been established and stored in DB.
    } else {
      for (var i = 0; i < query.cuisineStatus.length; i++) {
        tempterm = tempterm+' '+query.cuisineStatus[i]
      }
    }

    return fetch('/api/places?term='+tempterm)
    .then(response => response.json())
    .then(json => {
      dispatch(receivePlaces(query, json));
      browserHistory.push('/recommend')
    })
  },

  foursqr: () => { //will add in query rec'd from mother API call
    dispatch(fetchPlaces(''))
    return fetch('/api/timeprice?term=makersquare&near=san francisco, ca') //will add in query rec'd from mother API call
    .then(response => response.json())
    .then(json => {
      console.log('results from foursquare: ', json);
    })
  }
})

Preference = connect(
  mapStateToProps,
  mapDispatchToProps
)(Preference)

export default Preference

///hiding neighborhood for now ///
// <div className="col-md-11"><Neighborhood changeNeighborhood={this.props.changeNeighborhood} neighborhoodStatus={this.props.preferenceState.neighborhoodStatus}/></div>

