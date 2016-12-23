import React, {Component, PropTypes} from 'react'
import { SplitButton, MenuItem } from 'react-bootstrap';

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
      <div>This is the Preference_PriceRange Component! <br />

        <SplitButton bsStyle='info' title={this.state.selectedPriceRange} id={'split-button-basic-0'}>
          <MenuItem onSelect={this.updatePriceRange} eventKey="$">$</MenuItem>
          <MenuItem onSelect={this.updatePriceRange} eventKey="$$">$$</MenuItem>
          <MenuItem onSelect={this.updatePriceRange} eventKey="$$$">$$$</MenuItem>
          <MenuItem onSelect={this.updatePriceRange} eventKey="$$$$">$$$$</MenuItem>
        </SplitButton><br /><br />
      </div>
    )
  }
}

export default PriceRange

