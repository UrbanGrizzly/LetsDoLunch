import React, {Component, PropTypes} from 'react';
import request from 'superagent';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import Time from '../components/Preference_subcomponent/Time.jsx';
import Cuisine from '../components/Preference_subcomponent/Cuisine.jsx';
import PriceRange from '../components/Preference_subcomponent/PriceRange.jsx';
import Neighborhood from '../components/Preference_subcomponent/Neighborhood.jsx';
import request from 'superagent';
import Map from '../containers/Map.jsx';

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
        <div className="col-md-5"><Map/></div>

        <div className="col-md-7 preference">

          <div className="col-md-11 pref"><Cuisine changeCuisineStatus={this.changeCuisineStatus} cuisineStatus={this.state.cuisineStatus} /></div>

          <div className="col-md-11"><Neighborhood changeNeighborhood={this.props.changeNeighborhood} neighborhoodStatus={this.props.preferenceState.neighborhoodStatus}/></div>

          <div className="col-md-11"><Time changeTime={this.props.changeTime} timeStatus={this.props.preferenceState.timeStatus}/></div>

          <div className="col-md-11 pref"><PriceRange changePrice={this.changePrice} priceStatus={this.state.priceStatus}/></div>

          <div className="col-md-offset-11 prefSubmit" >
            <Button bsStyle='info' type="submit" onClick={this.submitPreference}>Submit</Button>
          </div>

        </div>
      </div>
    )
  };
}

////// RR - beg of connectiong React/Redux //////
const mapStateToProps =(state) => {
  return { preferenceState: state.preference}
}

const mapDispatchToProps = (dispatch) => ({
  changeTime: (timeChosen) => {dispatch(changeTime(timeChosen))},
  changePrice: (priceChosen) => {dispatch(changePrice(priceChosen))},
  changeNeighborhood: (neighborhoodChosen) => {dispatch(changeNeighborhood(neighborhoodChosen))},
  changeCuisine: (cuisineChosen) => {dispatch(changeCuisine(cuisineChosen))}
})

Preference = connect(
  mapStateToProps,
  mapDispatchToProps
)(Preference)
////// RR - end of connectiong React/Redux //////

export default Preference
