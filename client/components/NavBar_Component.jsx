import React, { Component } from 'react';
import {browserHistory } from 'react-router';
import Lucky from '../containers/Lucky.jsx';
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
        <div className="navbarItems">
          <Navbar.Header>
            <Navbar.Brand>
              <a onClick={() => browserHistory.push("/")}>LocalSpot</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>

          <Nav pullRight={true}>
            <NavItem><Lucky /></NavItem>
            <NavItem onClick={()=>browserHistory.push("/search")}>Search</NavItem>
            {this.props.user.isLoggedIn ?
              <NavDropdown title={this.props.user.username} id="profile">
                <MenuItem onClick={()=>browserHistory.push("/profile")}>My Profile</MenuItem>
                <MenuItem divider />
                <MenuItem>
                  <LogoutButton onClick={() => {this.props.logout(); browserHistory.push("/login")}} />
                </MenuItem>
              </NavDropdown> : null}
            <NavItem onClick={() => browserHistory.push("/login")} >
              {this.props.user.isLoggedIn ?
                null :
                <LoginButton />}
            </NavItem>
          </Nav>
        </div>
      </Navbar>
    )

  };
}

export default Navigationbar;
