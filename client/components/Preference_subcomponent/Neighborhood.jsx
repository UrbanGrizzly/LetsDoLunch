import React, {Component, PropTypes} from 'react';
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';

class Neighborhood extends Component {

  changeNeighborhoodButton(item){
    if (this.props.neighborhoodStatus[item]===true){
      return 'info'
    }
  };

  render () {
    let neighborhoodOptions = Object.keys(this.props.neighborhoodStatus).map((item, index) => <Button bsStyle={this.changeNeighborhoodButton(item)} key={index} onClick={() => this.props.changeNeighborhood(item)}>{item}</Button>
    );

    return (
      <div className='prefTitle'>Neighborhood
        <ButtonToolbar>
          <ButtonGroup bsSize='large' className='neighborhood'>
            {neighborhoodOptions}
          </ButtonGroup>
        </ButtonToolbar>
      </div>
    )
  };
};

export default Neighborhood;

