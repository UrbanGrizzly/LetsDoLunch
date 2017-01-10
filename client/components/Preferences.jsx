import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import Map from '../containers/Map_Container.jsx';

import { startFetch } from '../actions/action_get_places'

import Selector from '../containers/Selector.jsx'

const options = ["Food", "Drinks", "Fun"];
const prices = ['$','$$','$$$','$$$$']
const cuisines = ['Chinese', 'Japanese', 'Italian', 'Spanish', 'Thai', 'Mexican', 'Mediterranean', 'Indian', 'Greek', 'French', 'Caribbean'].sort()
const times = ['Now', 'Later']

export default ({ startFetch, query }) => (
  <div>
      <div className="col-md-11"><Selector print='What do you want to do?' selector='options' selections={options} /></div>
      <div className="col-md-11">{query.options.selected ? <Selector print='How much do you want to spend?' selector='price' selections={prices} /> : null}</div>
      <div>{query.options.selected ? <Map /> : null}</div>
      <div className="col-md-11"><Selector print='What type of food do you want to eat?' selector='cuisine' selections={cuisines} /></div>
      <div className="col-md-11"><Selector print='When do you want to go?' selector='time' selections={times} /></div>
    <br />
    <div className="col-md-offset-11 prefSubmit" >
      <Button bsStyle='info' onClick={startFetch}>Submit</Button>
    </div>
  </div>
)
