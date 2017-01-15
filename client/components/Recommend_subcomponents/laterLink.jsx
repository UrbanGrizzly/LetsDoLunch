import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';

const later = ({onClick}) => {
  return (
    <a className="glyphicon glyphicon-thumbs-up optionLinks" onClick={onClick}>
        Interested! Show me later!
    </a>
  )
}

export default later;
