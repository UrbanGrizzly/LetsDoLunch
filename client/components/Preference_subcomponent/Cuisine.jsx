import React, {Component, PropTypes} from 'react'
import { SplitButton, MenuItem, FormGroup, FormControl, ControlLabel, ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';



class Cuisine extends Component {

  constructor(props) {
    super(props);
    this.state={
      selectedCuisine: ''
    };
  }

  changeStatus(item){
    console.log('testing changeStatus', item)
  }

  render () {

    let cuisineOptions = [];
    let cuisines = ['Chinese', 'Japanese', 'Italian', 'Spanish', 'Thai', 'Mexican', 'Mediterranean', 'Indian', 'Greek', 'French', 'Caribbean'].sort();
    cuisines.map((item, index) => {
      cuisineOptions.push(<Button key={index} onClick={() => this.changeStatus(item)}>{item}</Button>)
    });

    return (
      <div>
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


