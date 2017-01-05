import React, {Component, PropTypes} from 'react';
import { Button } from 'react-bootstrap';
import { Router, browserHistory } from 'react-router';

class Lucky extends Component {

  constructor(props) {
    super();
  }

  render () {
    return (
      <div className='lucky'>
        <Button bsStyle='warning' type="submit" onClick={() => this.props.feelingLucky()}>Feeling Lucky! (this is the component)
        </Button>
      </div>
    );
  };
}

export default Lucky


