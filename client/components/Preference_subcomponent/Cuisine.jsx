import React, {Component, PropTypes} from 'react'
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';

const cuisines = ['Chinese', 'Japanese', 'Italian', 'Spanish', 'Thai', 'Mexican', 'Mediterranean', 'Indian', 'Greek', 'French', 'Caribbean'].sort();
class Cuisine extends Component {

  constructor(props) {
    super(props);
    this.state = {
      someStatus: ''
    }
  }

  changeCuisineButton(item){
    if (this.props.cuisineStatus[item]===true){
      return 'info'
    }
  }


  render () {
    let cuisineOptions = [];
    cuisines.map((item, index) => {
      cuisineOptions.push(<Button bsStyle={this.changeCuisineButton(item)} key={index} onClick={() => this.props.changeCuisineStatus(item)}>{item}</Button>)
    });

    return (
      <div>Cuisine
        <ButtonToolbar>
          <ButtonGroup bsSize="large" className='cuisine'>
            {cuisineOptions}
          </ButtonGroup>
        </ButtonToolbar>
      </div>
    )
  }
}

export default Cuisine


