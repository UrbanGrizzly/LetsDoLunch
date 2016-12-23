import React, { Component } from 'react';
import Navbar from '../containers/Navbar.jsx';
import Preference from '../containers/Preference.jsx';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />

        {this.props.children}
        <Preference />
      </div>
    );
  }
}
