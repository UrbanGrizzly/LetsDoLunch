import React, { Component } from 'react';
import {browserHistory } from 'react-router';
import Lucky from '../components/Preference_subcomponent/Lucky.jsx';
import LoginButton from '../components/LoginButton.jsx'
import LogoutButton from '../components/LogoutButton.jsx'
import { Button, Navbar, NavItem, Nav, MenuItem, NavDropdown } from 'react-bootstrap';

class Navigationbar extends Component {

  constructor(props) {
    super(props);
    this.props.checkAuth.bind(this);
  }

  componentWillMount() {
    //check if user is logged in, then set isLoggedIn property on redux state
     this.props.checkAuth();
  }
  
  render() {
    return (
      <Navbar fluid>

        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Let's Do Lunch</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

        <Nav pullRight={true}>
          <NavItem><Lucky feelingLucky={this.props.feelingLucky}/></NavItem>
          <NavItem onClick={()=>browserHistory.push("/search")}>Search</NavItem>
          <NavItem onClick={()=>browserHistory.push("/recommend")}>Recommend</NavItem>
          <NavItem>{this.props.isLoggedIn ? <span onClick={()=>browserHistory.push("/profile")}>Profile</span> : null}</NavItem>
          <NavItem>{this.props.isLoggedIn ? <LogoutButton onClick={() => browserHistory.push("/login")} /> : <LoginButton href="auth/logout" />}</NavItem>
        </Nav>
      </Navbar>
    )
      
  };
}

export default Navigationbar;
