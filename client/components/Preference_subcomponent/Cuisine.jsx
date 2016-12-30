import React, {Component, PropTypes} from 'react'
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';

class Cuisine extends Component {

  constructor(props) {
    super(props);
  }

  changeCuisineButton(item){
    if (this.props.cuisineStatus[item]===true){
      return 'info'
    }
  }

  render () {
    let cuisineOptions = Object.keys(this.props.allCuisines).map((item, index) => <Button bsStyle={this.changeCuisineButton(item)} key={index} onClick={() => this.props.changeCuisine(item)}>{item}</Button>);

    return (
      <div className='prefTitle'>Cuisine
        <ButtonToolbar>
          <ButtonGroup bsSize='large' className='cuisine'>
            {cuisineOptions}
          </ButtonGroup>
        </ButtonToolbar>
      </div>
    )
  };
};

export default Cuisine


