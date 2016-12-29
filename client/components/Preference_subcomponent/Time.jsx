import React, {Component, PropTypes} from 'react'
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';

class Time extends Component {

  constructor(props) {
    super(props);
    // this.state={
    //   selectedTime: 'Time'
    // };
    // this.updateTime=this.updateTime.bind(this);
  }

  changeTimeButton(value){
    if (this.props.timeStatus[value]===true){
      return 'info'
    }
  }

  render () {
    return (
      <div>Time
        <ButtonToolbar>
          <ButtonGroup bsSize='large' className='time'>
            <Button id='Now' bsStyle={this.changeTimeButton('Now')} value='Now' onClick={() => this.props.changeTime('Now')}>Now
            </Button>
            <Button id='Later' bsStyle={this.changeTimeButton('Later')} value='Later' onClick={() => this.props.changeTime('Later')}>Later
            </Button>
          </ButtonGroup>
        </ButtonToolbar>
      </div>
    )
  }
}

export default Time

