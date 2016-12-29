import React, {Component, PropTypes} from 'react'
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';

const cuisines = ['Chinese', 'Japanese', 'Italian', 'Spanish', 'Thai', 'Mexican', 'Mediterranean', 'Indian', 'Greek', 'French', 'Caribbean'].sort();

class Cuisine extends Component {

  constructor(props) {
    super(props);

    let cuisineInitialStatus = {};
    cuisines.map((item,index) => {
      cuisineInitialStatus[item] = false;
    })

    this.state = {
      cuisineStatus: cuisineInitialStatus
    }
  }

  changeStatus(item){
    let allStatus = this.state.cuisineStatus
    let currStatus = this.state.cuisineStatus[item]

    allStatus[item] = !currStatus
    this.setState({cuisineStatus: allStatus})
  }

  buttonColor(item){
    if (this.state.cuisineStatus[item]===true){
      return 'info'
    }
  }

  render () {

    let cuisineOptions = [];
    cuisines.map((item, index) => {
      cuisineOptions.push(<Button bsStyle={this.buttonColor(item)} key={index} onClick={() => this.changeStatus(item)}>{item}</Button>)
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


