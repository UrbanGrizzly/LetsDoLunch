import React from 'react';
import { Glyphicon } from 'react-bootstrap';

const acceptButton = ({ clickHandler }) => {
  return <Glyphicon className="col-sm-6 btn btn-success" onClick={ clickHandler } glyph="ok" />
}

export default acceptButton;
