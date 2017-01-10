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
  <div className='col-md-11 pref'>
      <div className='prefItem'>
        <h4 className="col-md-4">What would you like to do?</h4>
        <Selector className="col-md-4" selector='options' selections={options} /></div>
      <div>
        {query.options.selected ? 
          <div className='prefItem'>
            <div className='col-md-4 mapTitle'>
            <h4>Where do you want to go?</h4>
            <Button bsStyle='info' onClick={() => setMap()}>Click me when you've set your location!</Button>
            </div>
            <Map className='col-md-6' />
          </div> : null}
      </div>
      <div>
        {mapSet ? 
          <div className='prefItem'>
            <h4 className='col-md-4'>When do you want to go?</h4>
            <Selector selector='time' selections={times} /></div> : null}
      </div>
      <div>
        {query.time.selected ? 
        <div>
          <h4 className='col-md-4'>Anything else we should know?</h4>
          <Selector print='What type of food do you want to eat?' selector='cuisine' selections={cuisines} /> 
          <Selector print='How much do you want to spend?' selector='price' selections={prices} /> 
          <Button bsStyle='info' onClick={() => {startFetch(); browserHistory.push('/recommend')}}>Submit</Button>
        </div> : null}
      </div>
  </div>
)
