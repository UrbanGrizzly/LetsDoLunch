import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <ul>
          <li><a href="/dog">Dog</a></li>
          <li><a href="/recommend">Recommend</a></li>
          <li><a href="/search">Search</a></li>
        </ul>
      </nav>
    );
  }
}
