import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Button, Modal } from 'react-bootstrap';
import { connectModal } from 'redux-modal';


const afterSelectModal = ({show, onClick, place, origin, isLoggedIn}) => {
  const mapLink = 'https://www.google.com/maps/dir/' + origin.lat + ',' + origin.lng + '/' + place.geometry.location.lat() + ',' + place.geometry.location.lng();
  return (
    <Modal show={show}>
      <Modal.Header>
        <h2>
        You're Welcome.
        </h2>
      </Modal.Header>
      <Modal.Body>
        <h4>Here are directions to {place.name}.</h4>
        <a href={mapLink} target="_blank">Show Me the Way!</a>
        { isLoggedIn ?
          <div>
            <h4>And don't forget to rate your previous places to help us get to know you better!</h4>
            <a onClick={() => browserHistory.push('/profile')}>Let's Get Intimate</a> 
          </div>
        : null }
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={onClick}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default connectModal({ name: 'afterSelectModal' })(afterSelectModal)