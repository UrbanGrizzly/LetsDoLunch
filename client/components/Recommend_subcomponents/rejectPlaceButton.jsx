import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';

const rejectButton = ({ clickHandler }) => {
  return <Glyphicon bsStyle='danger' className="col-sm-6 btn btn-danger" id='rejectButton' onClick={ clickHandler } glyph="remove" />
}

export default rejectButton;
