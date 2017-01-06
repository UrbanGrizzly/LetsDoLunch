import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import FacebookLogin from '../actions/action_login'

const login = () => {
  return <a className="btn btn-primary" href="/auth/facebook">Log in with Facebook</a>
}

export default login;
