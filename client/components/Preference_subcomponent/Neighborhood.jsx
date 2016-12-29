import React, {Component, PropTypes} from 'react'
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';

const neighborhoods = ['Castro District', 'Chinatown', 'Cole Valley', 'Financial District', 'Fisherman\'s Wharf', 'Haight-Ashbury', 'Hayes Valley', 'Japantown', 'Lower Haight', 'Marina', 'Mission District', 'Nob Hill', 'Noe Valley', 'North Beach', 'Pacific Heights', 'Panhandle', 'Potrero Hill', 'Presidio', 'Richmond', 'Russian Hill', 'Sea Cliff', 'Sixth Street', 'SOMA', 'Sunset', 'Tenderloin', 'Union Square', 'Upper Market'].sort();

class Neighborhood extends Component {

  constructor(props) {
    super(props);
  }

  changeNeighborhoodButton(item){
    if (this.props.neighborhoodStatus[item]===true){
      return 'info'
    }
  }

  render () {
    let neighborhoodOptions = [];
    neighborhoods.map((item, index) => {
      neighborhoodOptions.push(<Button bsStyle={this.changeNeighborhoodButton(item)} key={index} onClick={() => this.props.changeNeighborhoodStatus(item)}>{item}</Button>)
    });

    return (
      <div className='prefTitle'>Neighborhood
        <ButtonToolbar>
          <ButtonGroup bsSize='large' className='neighborhood'>
            {neighborhoodOptions}
          </ButtonGroup>
        </ButtonToolbar>
      </div>
    )
  }
}

export default Neighborhood

