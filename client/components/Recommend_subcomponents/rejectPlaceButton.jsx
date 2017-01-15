import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';

const rejectButton = ({ clickHandler }) => {
  return <Glyphicon className="col-sm-6 btn btn-danger" onClick={ clickHandler } glyph="remove" />
}

export default rejectButton;