import React, {Component, PropTypes} from 'react';

import { Button } from 'react-bootstrap';

import Time from '../components/Preference_subcomponent/Time.jsx';
import Cuisine from '../components/Preference_subcomponent/Cuisine.jsx';
import PriceRange from '../components/Preference_subcomponent/PriceRange.jsx';
import Neighborhood from '../components/Preference_subcomponent/Neighborhood.jsx';
import request from 'superagent';
import Map from '../containers/Map.jsx';

import { changeTime } from '../actions/preference_action'

const cuisines = ['Chinese', 'Japanese', 'Italian', 'Spanish', 'Thai', 'Mexican', 'Mediterranean', 'Indian', 'Greek', 'French', 'Caribbean'].sort();

const neighborhoods = ['Castro District', 'Chinatown', 'Cole Valley', 'Financial District', 'Fisherman\'s Wharf', 'Haight-Ashbury', 'Hayes Valley', 'Japantown', 'Lower Haight', 'Marina', 'Mission District', 'Nob Hill', 'Noe Valley', 'North Beach', 'Pacific Heights', 'Panhandle', 'Potrero Hill', 'Presidio', 'Richmond', 'Russian Hill', 'Sea Cliff', 'Sixth Street', 'SOMA', 'Sunset', 'Tenderloin', 'Union Square', 'Upper Market'].sort();

class Preference extends Component {

  constructor(props) {
    super(props);

    let cuisineInitialStatus = {};
    cuisines.map((item,index) => {
      cuisineInitialStatus[item] = false;
    })

    let neighborhoodInitialStatus = {};
    neighborhoods.map((item,index) => {
      neighborhoodInitialStatus[item] = false;
    })

    this.state = {
      preferenceState: {
        cuisineStatus: cuisineInitialStatus,
        neighborhoodStatus: neighborhoodInitialStatus,
        // timeStatus: {
        //   'Now': false,
        //   'Later': false
        // },
        priceStatus: {
          '$': false,
          '$$': false,
          '$$$': false,
          '$$$$': false,
        }
      }
    };

    this.submitPreference=this.submitPreference.bind(this);
    this.changeCuisineStatus=this.changeCuisineStatus.bind(this);
    this.changeNeighborhoodStatus=this.changeNeighborhoodStatus.bind(this);
    // this.changeTime=this.changeTime.bind(this);
    this.changePrice=this.changePrice.bind(this);
  }

  submitPreference() {
    let pref = {};

    for (var statuses in this.state) {
      for (var value in this.state[statuses]) {
        if (this.state[statuses][value] === true) {
          if (!pref[statuses]) {
            pref[statuses]={};
          }
            pref[statuses][value]=true;
        }
      }
    }

    console.log('pref', pref)

    request
      .post('/search/preference')
      .send(pref)
      .set('Accept', 'application/json')
      .end(function(err, res){
        if (err) throw err;
        console.log('response frm backend received!')
    });
  }

////// functions related to Cuisine //////
  changeCuisineStatus(item){
    // let allStatus = this.state.cuisineStatus
    // let currStatus = this.state.cuisineStatus[item]
    // allStatus[item] = !currStatus
    // this.setState({cuisineStatus: allStatus})
    // console.log('test msg, ', item, currStatus)
  }

////// functions related to Neighborhood //////
  changeNeighborhoodStatus(item) {
    // let allNStatus = this.state.neighborhoodStatus
    // let currNStatus = this.state.neighborhoodStatus[item]
    // allNStatus[item] = !currNStatus
    // this.setState({neighborhoodStatus: allNStatus})
  }

////// functions related to Time //////
  // changeTime(val) {
  //   let allTStatus = this.state.timeStatus
  //   let currTStatus = this.state.timeStatus[val]
  //   allTStatus[val] = !currTStatus
  //   this.setState({timeStatus: allTStatus})
  // }

////// functions related to Price //////
  changePrice(val) {
    // let allPStatus = this.state.priceStatus
    // let currPStatus = this.state.priceStatus[val]
    // allPStatus[val] = !currPStatus
    // this.setState({priceStatus: allPStatus})
  }

  render () {
    console.log('this is change time', this.props.changeTime);
    return (
      <div>
        <div className="col-md-5"><Map/></div>

        <div className="col-md-7 preference">

          <div className="col-md-11 pref"><Cuisine changeCuisineStatus={this.changeCuisineStatus} cuisineStatus={this.state.cuisineStatus} /></div>

          <div className="col-md-11 pref"><Neighborhood changeNeighborhoodStatus={this.changeNeighborhoodStatus} neighborhoodStatus={this.state.preferenceState.neighborhoodStatus}/></div>

          <div className="col-md-11 pref"><Time changeTime={this.props.changeTime} timeStatus={this.props.preferenceState.timeStatus}/></div>

          <div className="col-md-11 pref"><PriceRange changePrice={this.changePrice} priceStatus={this.state.priceStatus}/></div>

          <div className="col-md-offset-11 prefSubmit" >
            <Button bsStyle='info' type="submit" onClick={this.submitPreference}>Submit</Button>
          </div>

        </div>
      </div>
    )
  }
}
// const mapStateToProps = (state) => {
//   console.log('supda', state)
//   return {
//     preferenceState: state.preferenceState
//   }
// }

function mapStateToProps(state) {
  return { preferenceState: state.preference}
}


const mapDispatchToProps = (dispatch) => ({
  changeTime: (timePref)=> {dispatch(changeTime(timePref))}
})



////// RR - REDUX RELATED!
Preference = connect(
  mapStateToProps,
  mapDispatchToProps
)(Preference)

export default Preference
