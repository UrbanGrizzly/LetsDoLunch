import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import Map from '../containers/Map_Container.jsx';

import { startFetch } from '../actions/action_get_places'

import Selector from '../containers/Selector.jsx'

const options = ["Food", "Drinks", "Fun"];
const prices = ['$','$$','$$$','$$$$']
const cuisines = ['Chinese', 'Japanese', 'Italian', 'Spanish', 'Thai', 'Mexican', 'Mediterranean', 'Indian', 'Greek', 'French', 'Caribbean'].sort()
const times = ['Now', 'Later']


export default ({ startFetch, query, setMap, mapSet }) => (
  <div className='col-md-11'>
      <div><Selector print='What do you want to do?' selector='options' selections={options} /></div>
      <div>{query.options.selected ? <div className='col-md-11'><Map /> <Button bsStyle='info' onClick={() => setMap()}>That's the Place!</Button></div> : null}</div>
      <div>{mapSet ? <Selector print='When do you want to go?' selector='time' selections={times} /> : null}</div>
      <div>{query.time.selected ? <div>Anything else we should know?<Selector print='What type of food do you want to eat?' selector='cuisine' selections={cuisines} /> <Selector print='How much do you want to spend?' selector='price' selections={prices} /> </div> : null}</div>
    <div>
      <Button bsStyle='info' onClick={() => {startFetch(); browserHistory.push('/recommend')}}>Submit</Button>
    </div>
  </div>
)
