import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import fetch from 'isomorphic-fetch';


export default ({ query, setQuery, startFetch }) => (
  <div className='lucky'>
    <Button bsStyle='warning' onClick={() => {
      fetch('db/userpreferences', {
        credentials: 'same-origin'
      })
      .then(res => res.json())
      .then(results => {
        let preferences = results.preferences.reduce((preferences, pref) => {
          preferences[pref.name] = true;
          return preferences;
        }, {})
        console.log(preferences);
        setQuery({...query, detail: preferences});
        startFetch();
      })
      .catch(err => console.error(err))
    }}>Feeling Lucky!
    </Button>
  </div>
)
