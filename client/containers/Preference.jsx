import React, {Component, PropTypes} from 'react';
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
      <div>

        <div className="col-md-6"><Neighborhood /></div>
        <div className="col-md-6"><Time /></div>
        <div className="col-md-6"><Cuisine /></div>
        <div className="col-md-6"><PriceRange /></div>
        <br></br>

        <div className="col-md-offset-11" ><Button bsStyle='info' type="submit" onClick={this.submitPreference}>Submit</Button></div>



      </div>
    )
  }
}

// <MenuItem divider />

// function mapStateToProps(state) {
//   return {
//     //TODO
//   }
// }

// export default connect(mapStateToProps)(PreferenceContainer);

export default Preference


