import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap'
import Navbar from '../containers/Navbar.jsx';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />

        {this.props.children}
      </div>
    );
  }
}
