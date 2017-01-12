import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Button, Modal } from 'react-bootstrap';
import { connectModal } from 'redux-modal';


const afterSelectModal = ({show, onClick, place}) => {
  return (
    <Modal show={show}>
      <Modal.Header>
        <Modal.Title>
        <h2>You're Welcome.</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Here are directions to {place}.</h4>
        <a>Show Me the Way!</a>
        <h4>And don't forget to rate your previous places to help us get to know you better!</h4>
        <a onClick={() => browserHistory.push('/profile')}>Let's Get Intimate</a>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={onClick}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default connectModal({ name: 'afterSelectModal' })(afterSelectModal)