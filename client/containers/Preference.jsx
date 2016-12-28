import React, {Component, PropTypes} from 'react'
import { Button } from 'react-bootstrap';
import Time from '../components/Preference_subcomponent/Time.jsx';
import Cuisine from '../components/Preference_subcomponent/Cuisine.jsx';
import PriceRange from '../components/Preference_subcomponent/PriceRange.jsx';
import Neighborhood from '../components/Preference_subcomponent/Neighborhood.jsx';

//import {Router, browswerHistory} from 'react-router'
//import {connect, Provider} from 'react-redux'

class Preference extends Component {

  constructor(props) {
    super(props);
    this.state={
      someState: ''
    };
    this.submitPreference=this.submitPreference.bind(this);
  }

  submitPreference() {
    console.log('testing submit button')
  }

  render () {
    return (
      <div>

        <Cuisine />
        <PriceRange />
        <Neighborhood />
        <Time />

        <Button type="submit" onClick={this.submitPreference}>Submit</Button>

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


