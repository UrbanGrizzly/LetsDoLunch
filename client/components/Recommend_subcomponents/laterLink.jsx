import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';

const later = ({ clickHandler }) => {
  return (
    <a className="col-sm-6 optionLinks" id='later' onClick={ clickHandler }>
      <span className='glyphicon glyphicon-thumbs-up' ></span>
      &nbsp; Interested! Show me later!
    </a>
  )
}

export default later;
