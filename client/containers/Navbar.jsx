import React, { Component } from 'react';
import fetch from 'isomorphic-fetch'
import LoginButton from '../components/LoginButton.jsx'
import { connect } from 'react-redux';
<<<<<<< HEAD
import { browserHistory } from 'react-router';
import { Button } from 'react-bootstrap';
=======
import { Router, browserHistory } from 'react-router';
import { Button, Navbar, NavItem, Nav, MenuItem, NavDropdown } from 'react-bootstrap';
>>>>>>> [MODIFY](Client): Refactor navbar to use react-bootstrap {VE}

import Navigationbar from '../components/NavBar_Component.jsx'
import Lucky from '../containers/Lucky.jsx';

import { checkAuth, logout } from '../actions/action_authentication'
import { setQuery, receivePlaces, filterPlaces } from '../actions/action_get_places';
import FacebookLogin from '../actions/action_login'

const Navigationbar = ({feelingLucky, facebookLoginButton}) => {
  return (
    <Navbar>
      <Nav>
        <NavItem><Lucky feelingLucky={feelingLucky}/></NavItem>
        <NavItem href="/search">Search</NavItem>
        <NavItem href="/recommend">Recommend</NavItem>
        <NavItem href="/dog">Dog</NavItem>
        <NavItem><LoginButton onClick={() => facebookLoginButton()} /></NavItem>
      </Nav>
    </Navbar>

  );
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn
  }

const mapDispatchToProps = (dispatch) => ({
  feelingLucky: () => {
    dispatch(setQuery('Gold Club'))
    browserHistory.push('/recommend')
  },
  facebookLoginButton: () => {dispatch(FacebookLogin)}
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigationbar)
