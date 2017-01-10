import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap'

export default () => {
  return (
    <div>

    <Jumbotron>
      <div className='container'>
        <h1>Hungry?</h1>
        <p>Welcome to Let's Do Lunch. The app that helps you decide where to eat</p>
        <p><Button bsStyle="primary">Let's Do Lunch</Button></p>
      </div>
    </Jumbotron>

    </div>
  );
}