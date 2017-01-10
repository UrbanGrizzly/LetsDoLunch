import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Jumbotron, Button } from 'react-bootstrap';
import Selector from '../containers/Selector.jsx';
import InitialQuestion from './InitialQuestion.jsx';


export default () => {
  return (
    <div>

    <Jumbotron>
      <div className='container'>
        <h1>Wanna Hang Out?</h1>
        <InitialQuestion />
        <Button onClick={() => browserHistory.push('/search')}>Let's Go!</Button>
      </div>
    </Jumbotron>

    </div>
  );
}