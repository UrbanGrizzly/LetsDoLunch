import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';

class rejectPlaceButton extends Component {

  render () {
    return <Glyphicon className="col-sm-6 btn btn-danger" glyph="remove" />
  }
}

export default rejectPlaceButton;