import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import fetch from 'isomorphic-fetch';


export default ({ query, setQuery, startFetch }) => (
  <div className='lucky'>
    <Button bsStyle='warning' onClick={() => {

      fetch('/db/userpreferences?type=Steff%27s&name=Steff%27s', {
        method: 'POST',
        credentials: 'same-origin'
      })
      .then(res => console.log('posting...', res.json()))

      fetch('db/userpreferences', {
        credentials: 'same-origin'
      })
      .then(res => console.log('getting...', res.json()))

      setQuery({...query, cuisine: {Gold: true, Club: true}});
      startFetch();
    }
    }>Feeling Lucky!
    </Button>
  </div>
)
