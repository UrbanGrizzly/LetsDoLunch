import React, {Component, PropTypes} from 'react'
import { SplitButton, MenuItem } from 'react-bootstrap';

class Cuisine extends Component {

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
      <div>This is the Preference_Cuisine Component! <br />

        <SplitButton bsStyle='info' title={this.state.selectedCuisine} id={'split-button-basic-0'}>
          <MenuItem onSelect={this.updateCuisine} eventKey="Chinese">Chinese</MenuItem>
          <MenuItem onSelect={this.updateCuisine} eventKey="Italian">Italian</MenuItem>
          <MenuItem onSelect={this.updateCuisine} eventKey="American">American</MenuItem>
          <MenuItem onSelect={this.updateCuisine} eventKey="Pho">Pho</MenuItem>
        </SplitButton><br /><br />

      </div>
    )
  }
}

export default Cuisine