//currently not using this sub_component

import React, {Component, PropTypes} from 'react';
import { Button } from 'react-bootstrap';
import { Router, browserHistory } from 'react-router';

class Lucky extends Component {

  constructor(props) {
    super();
    this.feelingLucky = this.feelingLucky.bind(this);
  }

  feelingLucky(){
    console.log('lucky');
    browserHistory.push('/recommend');
  }

  render () {
    return (
      <div><Button className='lucky' bsStyle='success' type="submit" onClick={this.feelingLucky}>Feeling Lucky!</Button>
</div>
    );
  };
}

export default Lucky


