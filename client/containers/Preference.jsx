import React, {Component, PropTypes} from 'react'
import { SplitButton, MenuItem } from 'react-bootstrap';
//import {Router, browswerHistory} from 'react-router'
//import {connect, Provider} from 'react-redux'

class PreferenceContainer extends Component {

  constructor(props) {
    super(props);
    this.state={
      selectedCuisine: 'Cuisine2'
    };
    this.updateCuisine=this.updateCuisine.bind(this);

  }

  updateCuisine(name) {
    this.setState({selectedCuisine: name})
  }


  render () {
    return (
      <div>This is the Preference Container and this is a test! <br />

        <SplitButton bsStyle='info' title={this.state.selectedCuisine} id={'split-button-basic-0'}>
          <MenuItem onSelect={this.updateCuisine} eventKey="Chinese">Chinese</MenuItem>
          <MenuItem onSelect={this.updateCuisine} eventKey="Italian">Italian</MenuItem>
          <MenuItem onSelect={this.updateCuisine} eventKey="American">American</MenuItem>
          <MenuItem onSelect={this.updateCuisine} eventKey="Pho">Pho</MenuItem>
        </SplitButton><br /><br />

        <SplitButton bsStyle='info' title={'Price Range'} id={'split-button-basic-0'}>
          <MenuItem eventKey="1">$</MenuItem>
          <MenuItem eventKey="2">$$</MenuItem>
          <MenuItem eventKey="3">$$$</MenuItem>
          <MenuItem eventKey="4">$$$$</MenuItem>
        </SplitButton><br /><br />

        <SplitButton bsStyle='info' title={'Neighborhood'} id={'split-button-basic-0'}>
          <MenuItem eventKey="1">SOMA</MenuItem>
          <MenuItem eventKey="2">FiDi</MenuItem>
          <MenuItem eventKey="3">Mission</MenuItem>
          <MenuItem eventKey="4">Tenderloin</MenuItem>
        </SplitButton><br /><br />

        <SplitButton bsStyle='info' title={'Time'} id={'split-button-basic-0'}>
          <MenuItem eventKey="1">Now</MenuItem>
          <MenuItem eventKey="2">Later</MenuItem>
        </SplitButton><br /><br />
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

export default PreferenceContainer