import React from 'react';
import { Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';

import { startFetch, setQuery } from '../actions/action_get_places';

export default Lucky => (
  <div className='lucky'>
    <Button bsStyle='warning' type="submit" onClick={() => {
      setQuery()
      startFetch();}
    }>Feeling Lucky!
    </Button>
  </div>
)
