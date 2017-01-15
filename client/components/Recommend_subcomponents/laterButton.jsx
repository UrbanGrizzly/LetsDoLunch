import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';

const laterButton = ({ clickHandler }) => {
  return (
    <Button type="button" className="glyphicon glyphicon-thumbs-up" onClick={ clickHandler }>
      Later!
    </Button>
  )
}

export default laterButton;
