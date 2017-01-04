import React, {Component, PropTypes} from 'react';
import request from 'superagent';
import fetch from 'isomorphic-fetch'
import { connect } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { Button } from 'react-bootstrap';

import Time from '../components/Preference_subcomponent/Time.jsx';
import Cuisine from '../components/Preference_subcomponent/Cuisine.jsx';
import PriceRange from '../components/Preference_subcomponent/PriceRange.jsx';
import Neighborhood from '../components/Preference_subcomponent/Neighborhood.jsx';
// import Lucky from '../components/Preference_subcomponent/Lucky.jsx';

//this is for getting places from yelp API route
import { fetchPlaces, receivePlaces } from '../actions/action_get_places';

import { changeTime, changePrice, changeNeighborhood, changeCuisine } from '../actions/preference_action'

class Preference extends Component {

  constructor(props) {
    super(props);
    this.submitPreference=this.submitPreference.bind(this);
    this.feelingLucky=this.feelingLucky.bind(this);
  };

  feelingLucky(){
    this.props.feelingLucky();
  };

  submitPreference() {
    let pref = {};
    let query = {};

    for (var statuses in this.props.preferenceState) {
      for (var value in this.props.preferenceState[statuses]) {
        if (this.props.preferenceState[statuses][value] === true) {
          query[statuses]=[];
          query[statuses].push(value);

          if (!pref[statuses]) {
            pref[statuses]={};
          }
          pref[statuses][value]=true;
        }
      }
    }
    this.props.fetchPlaces(query);

    // request
    //   .post('/search/preference')
    //   .send(pref)
    //   .set('Accept', 'application/json')
    //   .end(function(err, res){
    //     if (err) throw err;
    //     console.log('response from backend received!')
    //   })
  };

  render () {
    return (
      <div>

        <div>
          <Button bsStyle='success' type="submit" onClick={this.feelingLucky}>Feeling Lucky!</Button>
        </div>


        <div className="col-md-11"><Cuisine changeCuisine={this.props.changeCuisine} cuisineStatus={this.props.preferenceState.cuisineStatus} /></div>

        <div className="col-md-11"><Neighborhood changeNeighborhood={this.props.changeNeighborhood} neighborhoodStatus={this.props.preferenceState.neighborhoodStatus}/></div>

        <div className="col-md-11"><Time changeTime={this.props.changeTime} timeStatus={this.props.preferenceState.timeStatus}/></div>

        <div className="col-md-11"><PriceRange changePrice={this.props.changePrice} priceStatus={this.props.preferenceState.priceStatus}/></div><br></br>

          <div className="col-md-offset-11 prefSubmit" >
            <Button bsStyle='info' type="submit" onClick={this.submitPreference}>Submit</Button>
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
    return fetch('/api/places?term='+query.cuisineStatus[0]+'&location='+query.neighborhoodStatus[0]+',sf')
    .then(response => response.json())
    .then(json => {
      let results = json.businesses;
      let timeChoice = query.timeStatus;
      let filteredResults = [], filteredResults2 = [];
      console.log('time is?', timeChoice)

//Need to consider both Now and Later are chosen
      if (timeChoice.includes('Now')) {
        for (var i = 0; i < results.length; i++) {
          if (!results[i].is_closed) {
            filteredResults.push(results[i])
          }
        }
      } else if (timeChoice.includes('Later')) {
        for (var i = 0; i < results.length; i++) {
          if (results[i].is_closed) {
            filteredResults2.push(results[i])
          }
        }
      }
      console.log('filteredResults?', filteredResults)
      console.log('filteredResults2?', filteredResults2)
      dispatch(receivePlaces(query, json));//update json to filteredResults
      browserHistory.push('/recommend')
    })
  },
  //should update the fetch/query to return more specific result catered to each user
  feelingLucky: () => {
    dispatch(fetchPlaces(''))
    return fetch('/api/places?term=gold+club+entertainment&location=soma+san+francisco')
    .then(response => response.json())
    .then(json => {
      dispatch(receivePlaces('', json));
      browserHistory.push('/recommend')
    })
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

//Lucky subcomponent hidden, using a button directly inside of Pre container instead
//<div className="col-md-11"><Lucky onClick={this.feelingLucky}/></div>

