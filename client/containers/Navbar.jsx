import React, { Component } from 'react';
//start of testing feel lucky component
import fetch from 'isomorphic-fetch'
import LoginButton from '../components/LoginButton.jsx'
import { connect } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { Button, Navbar, NavItem, Nav, MenuItem, NavDropdown } from 'react-bootstrap';

import Lucky from '../components/Preference_subcomponent/Lucky.jsx';

import { fetchPlaces, receivePlaces, filterPlaces } from '../actions/action_get_places';

const Navigationbar = ({feelingLucky}) => {
  return (
    <Navbar>
      <Nav>
        <NavItem><Lucky feelingLucky={feelingLucky}/></NavItem>
        <NavItem href="/search">Search</NavItem>
        <NavItem href="/recommend">Recommend</NavItem>
        <NavItem href="/dog">Dog</NavItem>
        <NavItem><LoginButton /></NavItem>
      </Nav>
    </Navbar>
      
  );
}


const mapDispatchToProps = (dispatch) => ({
  feelingLucky: () => {
    dispatch(fetchPlaces(''))
    return fetch('/api/places?term=gold+club+entertainment&location=soma+san+francisco')
    .then(response => response.json())
    .then(json => {
      dispatch(receivePlaces('', json));
      browserHistory.push('/recommend')
    })
  }
})

export default connect(
  null,
  mapDispatchToProps
)(Navigationbar)

