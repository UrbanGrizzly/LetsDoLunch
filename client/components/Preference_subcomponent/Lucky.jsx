import React, {Component, PropTypes} from 'react';
import { Button } from 'react-bootstrap';
import { Router, hashHistory } from 'react-router';

class Lucky extends Component {

  constructor(props) {
    super();
    this.feelingLucky = this.feelingLucky.bind(this);
  }

  feelingLucky(){
    console.log('lucky');
    hashHistory.push('/recommend');
  }

  render () {
    return (
      <div><Button className='lucky' bsStyle='success' type="submit" onClick={this.feelingLucky}>Feeling Lucky!</Button>
</div>
    );
  };
}

export default Lucky


