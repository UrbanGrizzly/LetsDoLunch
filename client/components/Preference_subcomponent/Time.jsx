import React, {Component, PropTypes} from 'react'
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';

class Time extends Component {

  constructor(props) {
    super(props);
  }

  changeTimeButton(value){
    if (this.props.timeStatus[value]===true){
      return 'info'
    }
  }

  render () {
    return (
      <div className='prefTitle'>Time
        <ButtonToolbar>
          <ButtonGroup bsSize='large' className='time'>
            <Button bsStyle={this.changeTimeButton('Now')} onClick={() => this.props.changeTime('Now')}>Now
            </Button>
            <Button bsStyle={this.changeTimeButton('Later')} onClick={() => this.props.changeTime('Later')}>Later
            </Button>
          </ButtonGroup>
        </ButtonToolbar>
      </div>
    )
  }
}

export default Time

