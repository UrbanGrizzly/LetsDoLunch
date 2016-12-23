import React, {Component, PropTypes} from 'react'
import { SplitButton, MenuItem } from 'react-bootstrap';
//import {Router, browswerHistory} from 'react-router'
//import {connect, Provider} from 'react-redux'

class PreferenceContainer extends Component {

  render () {
    return (
      <div>This is the Preference Container and this is a test! <br />

        <SplitButton bsStyle='info' title={'Cuisine'} id={'split-button-basic-0'}>
          <MenuItem eventKey="1">Chinese</MenuItem>
          <MenuItem eventKey="2">Italian</MenuItem>
          <MenuItem eventKey="3">American</MenuItem>
          <MenuItem eventKey="4">Pho</MenuItem>
        </SplitButton><br />

        <SplitButton bsStyle='info' title={'Price Range'} id={'split-button-basic-0'}>
          <MenuItem eventKey="1">$</MenuItem>
          <MenuItem eventKey="2">$$</MenuItem>
          <MenuItem eventKey="3">$$$</MenuItem>
          <MenuItem eventKey="4">$$$$</MenuItem>
        </SplitButton><br />

        <SplitButton bsStyle='info' title={'Neighborhood'} id={'split-button-basic-0'}>
          <MenuItem eventKey="1">SOMA</MenuItem>
          <MenuItem eventKey="2">FiDi</MenuItem>
          <MenuItem eventKey="3">Mission</MenuItem>
          <MenuItem eventKey="4">Tenderloin</MenuItem>
        </SplitButton><br />

        <SplitButton bsStyle='info' title={'Time'} id={'split-button-basic-0'}>
          <MenuItem eventKey="1">Now</MenuItem>
          <MenuItem eventKey="2">Later</MenuItem>
        </SplitButton><br />
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