import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';

const never = ({onClick}) => {
  return (

    <a className="col-sm-6 optionLinks" onClick={onClick}>
      <span className='glyphicon glyphicon-thumbs-down' ></span>
      &nbsp; Never show me this again!
    </a>
  )
}

export default never;
