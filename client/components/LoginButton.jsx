import React from 'react';
import { Button } from 'react-bootstrap';

const loginButton = ({onClick}) => {
  return <Button className="btn btn-primary" onClick={onClick}>Login</Button>
}

export default loginButton;