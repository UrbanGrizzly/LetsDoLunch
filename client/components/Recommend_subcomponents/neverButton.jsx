import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';

const neverButton = ({ clickHandler }) => {
  return (
    <Button type="button" className="glyphicon glyphicon-thumbs-down" onClick={ clickHandler }>
      Never!
    </Button>
  )
}

export default neverButton;
