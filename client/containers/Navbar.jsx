import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { Button, Navbar, NavItem, Nav, MenuItem, NavDropdown } from 'react-bootstrap';

import Navigationbar from '../components/NavBar_Component.jsx'
import FacebookLogin from '../actions/action_login'
import Lucky from '../containers/Lucky.jsx';

import { checkAuth, logout } from '../actions/action_authentication'
import { setQuery, receivePlaces, filterPlaces } from '../actions/action_get_places';

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn
  }
}

const mapDispatchToProps = (dispatch) => ({
  navigate: browserHistory.push,
  feelingLucky: () => {
    dispatch(setQuery({keyword: 'Gold Club'}))
    browserHistory.push('/recommend')
  },
  checkAuth: () => {dispatch(checkAuth())},
  logout: () => {dispatch(logout())}
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigationbar)
