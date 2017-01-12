import React, { Component }  from 'react'
import { browserHistory }    from 'react-router';
import { Button, Row }       from 'react-bootstrap';
import Map                   from '../containers/Map_Container.jsx';

import { startFetch }        from '../actions/action_get_places';

import Selector              from '../containers/Selector.jsx';
import InitialQuestion       from './InitialQuestion.jsx';
import SpecificOptions       from './SpecificOptions.jsx'


const prices = ['$','$$','$$$','$$$$']

const times = ['Now', 'Anytime']




export default class extends Component {

  constructor(props) {
    super(props);
    this.props.setMap.bind(this);
  }

  componentWillMount () {
    if(this.props.query.selected.options) {
      this.props.setMap('bigMap', false)
    } else {
      this.props.setMap('hiddenMap', false);
    }
  }

  render () {
    let { startFetch, query, setMap, mapSet, mapClass } = this.props;

    return (
      <div className='col-md-11 pref'>
        <InitialQuestion onClick={() => setMap('bigMap', false)}/>

        <div>
          {query.selected.options ? 
            <div className='prefItem'>
              <div className={mapSet ? 'col-md-6': 'col-md-4'}>
                <h4>Where do you want to go?</h4>
                <Button bsStyle='info' onClick={() => setMap('smallMap', true)}>Click me when you've set your location!</Button>
              </div>
              <Map className='col-md-6' />
            </div> : null}
        </div>

        <div>
          {mapSet ? 
            <div className='prefItem'>
              <h4 className='col-md-4'>When do you want to go?</h4>
              <Selector selector='time' selections={times} />
            </div> : null}
        </div>

        <div>
          {query.selected.time ? 
          <div>
            <div className='prefItem'>
              <h4 className='col-md-4'>Let's get specific.</h4>
              <div className='col-md-8'>
                <SpecificOptions option={query.selected.options}/>
              </div>
            </div>
            <div className='prefItem'>
              <h4 className='col-md-4'>How much do you want to spend?</h4>
              <div className='col-md-6'>
                <Selector selector='price' selections={prices} /> 
              </div>
            </div>
            <div className='col-md-11'>
              <Button bsStyle='info' onClick={() => {startFetch(); setMap('bigMap', true); browserHistory.push('/recommend')}}>
                Show Me Where To Go!
              </Button>
            </div>
          </div> 
          : null}
        </div>
      </div>
    )
  }
}
