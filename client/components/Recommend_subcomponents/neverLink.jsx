import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';

const never = ({ clickHandler }) => {
  return (

    <a className="col-sm-6 optionLinks" onClick={ clickHandler }>
      <span className='glyphicon glyphicon-thumbs-down' ></span>
      &nbsp; Never show me this again!
    </a>
  )
}

export default never;
