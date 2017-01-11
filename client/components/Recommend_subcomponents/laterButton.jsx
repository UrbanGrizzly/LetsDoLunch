import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';

const laterButton = ({onClick}) => {
  return (
    <Button type="button" className="glyphicon glyphicon-thumbs-up" onClick={onClick}>
      Later!
    </Button>
  )
}

export default laterButton;
