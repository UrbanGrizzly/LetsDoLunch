import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';

const never = ({onClick}) => {
  return (
    <a className="glyphicon glyphicon-thumbs-down optionLinks" onClick={onClick}>
        Never show me this place again!
    </a>
  )
}

export default never;
