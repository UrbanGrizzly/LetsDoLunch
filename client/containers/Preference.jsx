import React, {Component, PropTypes} from 'react';
import request from 'superagent';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import Time from '../components/Preference_subcomponent/Time.jsx';
import Cuisine from '../components/Preference_subcomponent/Cuisine.jsx';
import PriceRange from '../components/Preference_subcomponent/PriceRange.jsx';
import Neighborhood from '../components/Preference_subcomponent/Neighborhood.jsx';

//this is for getting places from yelp API route 
import {fetchPlaces, receivePlaces} from '../actions/action_get_places';
import fetch from 'isomorphic-fetch'

import { changeTime, changePrice, changeNeighborhood, changeCuisine } from '../actions/preference_action'

class Preference extends Component {

  constructor(props) {
    super(props);
    this.submitPreference=this.submitPreference.bind(this);
  };

  submitPreference() {
    let pref = {};

    for (var statuses in this.props.preferenceState) {
      for (var value in this.props.preferenceState[statuses]) {
        if (this.props.preferenceState[statuses][value] === true) {
          if (!pref[statuses]) {
            pref[statuses]={};
          }
          pref[statuses][value]=true;
        }
      }
    };

    console.log('pref', pref);

    request
      .post('/search/preference')
      .send(pref)
      .set('Accept', 'application/json')
      .end(function(err, res){
        if (err) throw err;
        console.log('response from backend received!')
      })
  };

  render () {
    return (
      <div>
        <div className="col-md-11"><Cuisine changeCuisine={this.props.changeCuisine} cuisineStatus={this.props.preferenceState.cuisineStatus} /></div>

        <div className="col-md-11"><Neighborhood changeNeighborhood={this.props.changeNeighborhood} neighborhoodStatus={this.props.preferenceState.neighborhoodStatus}/></div>

        <div className="col-md-11"><Time changeTime={this.props.changeTime} timeStatus={this.props.preferenceState.timeStatus}/></div>

        <div className="col-md-11"><PriceRange changePrice={this.props.changePrice} priceStatus={this.props.preferenceState.priceStatus}/></div><br></br>

          <div className="col-md-offset-11 prefSubmit" >
            <Button bsStyle='info' type="submit" onClick={this.props.fetchPlaces}>Submit</Button>
          </div>
      </div>
    )
  };
}

////// RR - beg of connectiong React/Redux //////
//1. state-related, refer to reducer files
const mapStateToProps =(state) => {
  return { preferenceState: state.preference}
}

//2. dispatch/action related, refer to action files
const mapDispatchToProps = (dispatch) => ({
  changeTime: (timeChosen) => {dispatch(changeTime(timeChosen))},
  changePrice: (priceChosen) => {dispatch(changePrice(priceChosen))},
  changeNeighborhood: (neighborhoodChosen) => {dispatch(changeNeighborhood(neighborhoodChosen))},
  changeCuisine: (cuisineChosen) => {dispatch(changeCuisine(cuisineChosen))},
  fetchPlaces: (query) => {
    dispatch(fetchPlaces(query))
    return fetch('/api/places')
    .then(response => response.json())
    .then(json => dispatch(receivePlaces(query, json)))
  }
})

Preference = connect(
  mapStateToProps,
  mapDispatchToProps
)(Preference)
////// RR - end of connectiong React/Redux //////

export default Preference

///hiding neighborhood for now ///
// <div className="col-md-11"><Neighborhood changeNeighborhood={this.props.changeNeighborhood} neighborhoodStatus={this.props.preferenceState.neighborhoodStatus}/></div>

