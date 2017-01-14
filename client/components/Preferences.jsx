import React, { Component }  from 'react'
import { browserHistory }    from 'react-router';
import { Button, Row }       from 'react-bootstrap';

import { startFetch }        from '../actions/action_get_places';

import Map                   from '../containers/Map_Container.jsx';
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
    let { query, setMap, updateListing } = this.props

    updateListing({})

    if (query.selected.options) {
      setMap('bigMap', false)
    } else {
      setMap('hiddenMap', false);
    }
  }

  render () {
    let { startFetch, query, setMap, mapSet, mapClass } = this.props;

    return (
      <div className='container pref'>
        <InitialQuestion onClick={() => setMap('medMap', false)}/>

        <div>
          {query.selected.options ?
            <div>
              <div className={mapSet ? 'col-md-5 prefTitle': 'col-md-4 prefTitle'}>
                <h3>Where do you want to go?</h3>
              </div>
              <div className={mapSet ? 'col-md-6 prefItem': 'col-md-7 prefItem'}>
                <Map />
                <div className='prefItem map-btn'>
                  <Button bsStyle={mapSet ? 'info' : 'primary'} onClick={() => setMap('smallMap', true)}>Click me when you've set your location!</Button>
                </div>
              </div>
            </div> : null}
        </div>

        <div>
          {mapSet ?
            <div>
              <h3 className='col-md-4 prefTitle'>When do you want to go?</h3>
              <div className='prefItem'>
                <Selector selector='time' selections={times} />
              </div>
            </div> : null}
        </div>

        <div>
          {query.selected.time ?
          <div>
            <div>
              <h3 className='col-md-5 prefTitle'>Let's get specific.</h3>
              <div className='col-md-6 prefItem'>
                <SpecificOptions option={query.selected.options}/>
              </div>
            </div>
            <div>
              <h3 className='col-md-5 prefTitle'>How much do you want to spend?</h3>
              <div className='col-md-6 prefItem'>
                <Selector selector='price' selections={prices} />
              </div>
            </div>
            <div className='submit-btn'>
              <Button className="submit-btn" bsStyle='primary' onClick={() => {startFetch(); setMap('bigMap', true)}}>
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
