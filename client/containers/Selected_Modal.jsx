import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { connectModal } from 'redux-modal';


const afterSelectModal = ({show}) => {
  return (
    <Modal show={show}>
      <Modal.Body>
        Here is some stuff!
      </Modal.Body>
    </Modal>
  )
}

export default connectModal({ name: 'afterSelectModal' })(afterSelectModal)