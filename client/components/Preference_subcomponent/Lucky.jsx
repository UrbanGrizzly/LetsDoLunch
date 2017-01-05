import React, {Component, PropTypes} from 'react';
import { Button } from 'react-bootstrap';
import { Router, browserHistory } from 'react-router';

class Lucky extends Component {

  constructor(props) {
    super();
     // this.feelingLucky = this.feelingLucky.bind(this);
  }

  // feelingLucky(){
  //   console.log('lucky');
  //   //browserHistory.push('/recommend');
  // }

  render () {
    return (
      <div>
        <Button className='lucky' bsStyle='danger' type="submit" onClick={() => this.props.feelingLucky()}>Feeling Lucky! (this is the component)
        </Button>
      </div>
    );
  };
}

export default Lucky


