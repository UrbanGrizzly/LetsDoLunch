import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import Selector from '../containers/Selector.jsx';

const options = ["Get Food", "Get Drinks", "Have Fun"];

export default () => {
  return (
    <div>

    <Jumbotron>
      <div className='container'>
        <h1>Wanna Hang Out?</h1>
      <div className='prefItem'>
        <h2 >What would you like to do?</h2>
        <Selector  selector='options' selections={options} /></div>
      </div>
    </Jumbotron>

    </div>
  );
}