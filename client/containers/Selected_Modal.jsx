import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { connectModal } from 'redux-modal';


const afterSelectModal = ({show, onClick}) => {
  return (
    <Modal show={show}>
      <Modal.Body>
        Here is some stuff!
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={onClick}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default connectModal({ name: 'afterSelectModal' })(afterSelectModal)