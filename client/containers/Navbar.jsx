import React, { Component } from 'react';
import fetch from 'isomorphic-fetch'
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { Button } from 'react-bootstrap';

import Navigationbar from '../components/NavBar_Component.jsx'
import Lucky from '../containers/Lucky.jsx';
  
import { checkAuth, logout } from '../actions/action_authentication'
import { setQuery, receivePlaces, filterPlaces } from '../actions/action_get_places';

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn
  }
}

const mapDispatchToProps = (dispatch) => ({
  feelingLucky: () => {
    dispatch(setQuery('Gold Club'))
    browserHistory.push('/recommend')
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigationbar)
