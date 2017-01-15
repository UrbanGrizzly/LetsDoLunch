import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';

const later = ({onClick}) => {
  return (
    <a className="col-sm-6 optionLinks" onClick={onClick}>
      <span className='glyphicon glyphicon-thumbs-up' ></span>
      &nbsp; Interested! Show me later!
    </a>
  )
}

export default later;
