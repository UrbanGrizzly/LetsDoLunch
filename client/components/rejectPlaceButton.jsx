import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';

class rejectPlaceButton extends Component {

  constructor(props) {
    super(props);
  }

  rejectPlace (listing) {
    this.props.rejectPlace(listing);
  }

  render () {
    return <Glyphicon className="col-sm-6 btn btn-danger" onClick={() => this.rejectPlace()} glyph="remove" />
  }
}

export default rejectPlaceButton;