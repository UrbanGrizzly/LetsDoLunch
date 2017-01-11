import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';

const laterButton = ({onClick}) => {
  return <Glyphicon className="col-sm-6 btn btn-primary" onClick={onClick} glyph="ok" />

}

export default laterButton;
// <Glyphicon className="col-sm-4 btn btn-success" onClick={onClick} glyph="remove" />

  // <Button type="button" className="btn btn-default btn-sm">
  //  Heart
  // </Button>
