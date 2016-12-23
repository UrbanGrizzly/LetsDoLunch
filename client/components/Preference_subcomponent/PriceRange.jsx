import React, {Component, PropTypes} from 'react';
import { SplitButton, MenuItem, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class PriceRange extends Component {

  constructor(props) {
    super(props);
    this.state={
      selectedPriceRange: 'Price Range'
    };
    this.updatePriceRange=this.updatePriceRange.bind(this);

  }

  updatePriceRange(name) {
    this.setState({selectedPriceRange: name})
  }


  render () {
    return (
      <div>
        <SplitButton bsStyle='info' title={this.state.selectedPriceRange} id={'split-button-basic-0'}>
          <MenuItem onSelect={this.updatePriceRange} eventKey="$">$</MenuItem>
          <MenuItem onSelect={this.updatePriceRange} eventKey="$$">$$</MenuItem>
          <MenuItem onSelect={this.updatePriceRange} eventKey="$$$">$$$</MenuItem>
          <MenuItem onSelect={this.updatePriceRange} eventKey="$$$$">$$$$</MenuItem>
        </SplitButton><br />

        <FormGroup bsStyle='info' controlId="formControlsSelectMultiple">
          <ControlLabel>$$$</ControlLabel>
          <FormControl componentClass="select" multiple>
            <option value="select">Select multiple ...</option>
            <option value="other">$</option>
            <option value="other">$$</option>
            <option value="other">$$$</option>
            <option value="other">$$$$</option>
          </FormControl>
        </FormGroup>

      </div>
    )
  }
}

export default PriceRange

