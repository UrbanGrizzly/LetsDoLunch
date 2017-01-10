import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

import { startFetch } from '../actions/action_get_places'

import Selector from '../containers/Selector.jsx'

const prices = ['$','$$','$$$','$$$$']
const cuisines = ['Chinese', 'Japanese', 'Italian', 'Spanish', 'Thai', 'Mexican', 'Mediterranean', 'Indian', 'Greek', 'French', 'Caribbean'].sort()
const times = ['Now', 'Later']

export default ({ startFetch }) => (
  <div>
      <div className="col-md-11"><Selector selector='price' selections={prices} /></div>
      <div className="col-md-11"><Selector selector='cuisine' selections={cuisines} /></div>
      <div className="col-md-11"><Selector selector='time' selections={times} /></div>
    <br />
    <div className="col-md-offset-11 prefSubmit" >
      <Button bsStyle='info' onClick={startFetch}>Submit</Button>
    </div>
  </div>
)
