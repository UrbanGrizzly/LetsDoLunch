import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';

const acceptButton = ({ clickHandler }) => {
  return <Glyphicon bsStyle='success' className="col-sm-6 btn btn-success" id='acceptButton' onClick={ clickHandler } glyph="ok" />
}

export default acceptButton;
