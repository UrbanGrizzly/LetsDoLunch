import React, {Component, PropTypes} from 'react'
import { SplitButton, MenuItem } from 'react-bootstrap';

class Neighborhood extends Component {

  constructor(props) {
    super(props);
    this.state={
      selectedNeighborhood: 'Neighborhood'
    };
    this.updateNeighborhood=this.updateNeighborhood.bind(this);

  }

  updateNeighborhood(name) {
    this.setState({selectedNeighborhood: name})
  }


  render () {
    return (
      <div>This is the Preference_Neighborhood Container! <br />

        <SplitButton bsStyle='info' title={this.state.selectedNeighborhood} id={'split-button-basic-0'}>
          <MenuItem onSelect={this.updateNeighborhood} eventKey="SOMA">SOMA</MenuItem>
          <MenuItem onSelect={this.updateNeighborhood} eventKey="FIDI">FIDI</MenuItem>
          <MenuItem onSelect={this.updateNeighborhood} eventKey="Mission">Missiom</MenuItem>
          <MenuItem onSelect={this.updateNeighborhood} eventKey="Tenderloin">Tenderloin</MenuItem>
        </SplitButton><br /><br />
      </div>
    )
  }
}

export default Neighborhood