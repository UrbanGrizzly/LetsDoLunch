import React, {Component, PropTypes} from 'react'
import { SplitButton, MenuItem } from 'react-bootstrap';
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
      selectedCuisine: 'Cuisine'
    };
    this.updateCuisine=this.updateCuisine.bind(this);

  }

  updateCuisine(name) {
    this.setState({selectedCuisine: name})
  }


  render () {
    return (
      <div>This is the Preference Container and this is a test! <br />

        <Cuisine />
        <PriceRange />
        <Neighborhood />
        <Time />

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