import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';

const neverButton = ({onClick}) => {
  return (
    <Button type="button" className="glyphicon glyphicon-thumbs-down" onClick={onClick}>
      Never!
    </Button>
  )
}

export default neverButton;
