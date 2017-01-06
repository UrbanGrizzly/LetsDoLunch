import React, { Component } from 'react';
//start of testing feel lucky component
import fetch from 'isomorphic-fetch'
import LoginButton from '../components/LoginButton.jsx'
import { connect } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { Button, Navbar, NavItem, Nav, MenuItem, NavDropdown } from 'react-bootstrap';

import Lucky from '../components/Preference_subcomponent/Lucky.jsx';

import { fetchPlaces, receivePlaces, filterPlaces } from '../actions/action_get_places';
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
        <NavItem><LoginButton onClick={() => facebookLoginButton()} /></NavItem>
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
  },
  facebookLoginButton: () => {dispatch(FacebookLogin)}
})

export default connect(
  null,
  mapDispatchToProps
)(Navigationbar)

