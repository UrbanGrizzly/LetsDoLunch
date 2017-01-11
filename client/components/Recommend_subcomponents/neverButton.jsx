import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';

const neverButton = ({onClick}) => {
  return <Glyphicon className="col-sm-6 btn btn-warning" onClick={onClick} glyph="remove" />

}

export default neverButton;
// <Glyphicon className="col-sm-4 btn btn-success" onClick={onClick} glyph="remove" />

  // <Button type="button" className="btn btn-default btn-sm">
  //  Heart
  // </Button>
