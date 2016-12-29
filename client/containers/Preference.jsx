import React, {Component, PropTypes} from 'react';
import Request from 'react-http-request';

import { Button } from 'react-bootstrap';
import Time from '../components/Preference_subcomponent/Time.jsx';
import Cuisine from '../components/Preference_subcomponent/Cuisine.jsx';
import PriceRange from '../components/Preference_subcomponent/PriceRange.jsx';
import Neighborhood from '../components/Preference_subcomponent/Neighborhood.jsx';

//import {connect, Provider} from 'react-redux'

class Preference extends Component {

  constructor(props) {
    super(props);
    this.state={
      someState: '' //TODO: update someState to some useful states
    };
    this.submitPreference=this.submitPreference.bind(this);
  }

  submitPreference() {
    console.log('testing submit button')
  }

  render () {
    return (
      <div className="preference">

        <div className="col-md-11"><Neighborhood /></div>
        <div className="col-md-11"><Time /></div>
        <div className="col-md-11"><Cuisine /></div>
        <div className="col-md-11"><PriceRange /></div>
        <br></br>

        <div className="col-md-offset-11" ><Button bsStyle='info' type="submit" onClick={this.submitPreference}>Submit</Button></div>

      </div>
    )
  }
}


// function mapStateToProps(state) {
//   return {
//     //TODO
//   }
// }

// export default connect(mapStateToProps)(PreferenceContainer);

//// React-request
/*          <Request
            url='https://api.foursquare.com/v2/venues/search?near=chicago,%20il&query=eggtart&v=20161220&m=foursquare&client_secret=CEY34Y3RX2TYQ2UQ14V2K1GID4SEOESIPVDIKPPHEOXI2UOY&client_id=FZMJSOOXPGRZEGVCZRUKPRUCFOXDJR5FN5D50WK4R4512XMG'
            method='get'
            accept='application/json'
            verbose={true}
          >

          {
            ({error, result, loading}) => {
              if (loading) {
                return <div>loading...</div>;
              } else {
                return <div>{ JSON.stringify(result) }</div>;
              }
            }
          }
          </Request> */


export default Preference


