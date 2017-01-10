import React from 'react';
import { Button } from 'react-bootstrap';


export default ({ query, setQuery, startFetch }) => (
  <div className='lucky'>
    <Button bsStyle='warning' onClick={() => {
      setQuery({...query, cuisine: {Gold: true, Club: true}});
      startFetch();
    }
    }>Feeling Lucky!
    </Button>
  </div>
)
