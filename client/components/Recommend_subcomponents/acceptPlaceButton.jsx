import React from 'react';
import { Glyphicon } from 'react-bootstrap';

const acceptButton = ({onClick}) => {
  return <Glyphicon className="col-sm-6 btn btn-success" onClick={onClick} glyph="ok" />
}

export default acceptButton;
