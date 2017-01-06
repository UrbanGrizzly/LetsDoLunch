import React, { Component } from 'react';
import fetch from 'isomorphic-fetch'
import LoginButton from '../components/LoginButton.jsx'
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { Button, Navbar, NavItem, Nav, MenuItem, NavDropdown } from 'react-bootstrap';

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
        <NavItem onClick={()=>browserHistory.push("/search")}>Search</NavItem>
        <NavItem onClick={()=>browserHistory.push("/recommend")}>Recommend</NavItem>
        <NavItem onClick={()=>browserHistory.push("/profile")}>Profile</NavItem>
        <NavItem onClick={()=>browserHistory.push("/dog")}>Dog</NavItem>
        <NavItem><LoginButton onClick={() => browserHistory.push("/login")} /></NavItem>
      </Nav>
    </Navbar>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn
  }
}

const mapDispatchToProps = (dispatch) => ({
  navigate: browserHistory.push,
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
