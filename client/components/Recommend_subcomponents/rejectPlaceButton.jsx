import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';

const rejectButton = ({onClick}) => {
  return <Glyphicon className="col-sm-6 btn btn-danger" onClick={onClick} glyph="remove" />
}

export default rejectButton;