import React, {Component, PropTypes} from 'react'
import { SplitButton, MenuItem, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

let cuisines = ['Chinese', 'Japanese', 'Italian', 'Spanish', 'Thai', 'Mexican', 'Mediterranean', 'Indian', 'Greek', 'French', 'Caribbean']

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
      <div>

        <SplitButton bsStyle='info' title={this.state.selectedCuisine} id={'split-button-basic-0'}>
          <MenuItem onSelect={this.updateCuisine} eventKey="Chinese">Chinese</MenuItem>
          <MenuItem onSelect={this.updateCuisine} eventKey="Italian">Italian</MenuItem>
          <MenuItem onSelect={this.updateCuisine} eventKey="American">American</MenuItem>
          <MenuItem onSelect={this.updateCuisine} eventKey="Pho">Pho</MenuItem>
        </SplitButton><br />

        <FormGroup bsStyle='info' controlId="formControlsSelectMultiple">
          <ControlLabel>Cuisine</ControlLabel>
          <FormControl componentClass="select" multiple>
            <option value="select">Select multiple ...</option>
            <option value="other">{cuisines[0]}</option>
            <option value="other">{cuisines[1]}</option>
            <option value="other">{cuisines[2]}</option>
            <option value="other">{cuisines[3]}</option>
          </FormControl>
        </FormGroup>

      </div>
    )
  }
}

export default Cuisine


