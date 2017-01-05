import React, {Component, PropTypes} from 'react';
import { Button } from 'react-bootstrap';
import { Router, browserHistory } from 'react-router';

class Lucky extends Component {

  render () {
    return (
      <div className='lucky'>
        <Button bsStyle='warning' type="submit" onClick={() => this.props.feelingLucky()}>Feeling Lucky!
        </Button>
      </div>
    );
  };
}

export default Lucky


