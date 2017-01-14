import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import FacebookLogin from '../actions/action_authentication'
import LoginForm from './LoginForm.jsx'

const login = () => {
  return (
    <div className='login-box col-md-4 col-md-offset-4'>
      <h2>Welcome to the Club.</h2>
      <a className="btn btn-primary"  href="/auth/facebook">Login with Facebook</a>
      <LoginForm />
    </div>
  )
}

export default login;
