import React, {Component, PropTypes} from 'react'
import { SplitButton, MenuItem } from 'react-bootstrap';

class Time extends Component {

  constructor(props) {
    super(props);
    this.state={
      selectedTime: 'Time'
    };
    this.updateTime=this.updateTime.bind(this);

  }

  updateTime(name) {
    this.setState({selectedTime: name})
  }


  render () {
    return (
      <div>This is the Preference_Time Container! <br />

        <SplitButton bsStyle='info' title={this.state.selectedTime} id={'split-button-basic-0'}>
          <MenuItem onSelect={this.updateTime} eventKey="Now">Now</MenuItem>
          <MenuItem onSelect={this.updateTime} eventKey="Later">Later</MenuItem>
        </SplitButton><br /><br />
      </div>
    )
  }
}

export default Time