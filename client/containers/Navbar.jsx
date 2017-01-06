import React, { Component } from 'react';
//start of testing feel lucky component
import fetch from 'isomorphic-fetch'
import LoginButton from '../components/LoginButton.jsx'
import { connect } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { Button, Navbar, NavItem, Nav, MenuItem, NavDropdown } from 'react-bootstrap';

import Lucky from '../components/Preference_subcomponent/Lucky.jsx';

import { fetchPlaces, receivePlaces, filterPlaces } from '../actions/action_get_places';
<<<<<<< HEAD
import FacebookLogin from '../actions/action_login'

const Navigationbar = ({feelingLucky, facebookLoginButton}) => {
  return (
    <Navbar>
      <Nav>
        <NavItem><Lucky feelingLucky={feelingLucky}/></NavItem>
        <NavItem onClick={()=>this.props.navigate("/search")}>Search</NavItem>
        <NavItem onClick={()=>this.props.navigate("/recommend")}>Recommend</NavItem>
        <NavItem onClick={()=>this.props.navigate("/profile")}>Profile</NavItem>
        <NavItem onClick={()=>this.props.navigate("/dog")}>Dog</NavItem>
        <NavItem><LoginButton onClick={() => facebookLoginButton()} /></NavItem>
      </Nav>
    </Navbar>
      
  );
=======

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">

      <div className="col-md-1"><Lucky feelingLucky={this.props.feelingLucky}/></div>


        <ul>
          <li><a onClick={()=>this.props.navigate("/dog")}>Dog</a></li>
          <li><a onClick={()=>this.props.navigate("/profile")}>Profile</a></li>
          <li><a onClick={()=>this.props.navigate("/recommend")}>Recommend</a></li>
          <li><a onClick={()=>this.props.navigate("/search")}>Search</a></li>
        </ul>
      </nav>
    );
  }
>>>>>>> [MODIFY](Client): Stop Page Refresh Upon Navbar Link Clickage {NH}
}


const mapDispatchToProps = (dispatch) => ({
  navigate: browserHistory.push,
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

