import React from 'react'
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap'


export default ({ selector, selections, query, setQuery }) => (
  <div className='prefTitle'>
    { selector }
    <ButtonToolbar>
      <ButtonGroup bsSize='large' className='cuisine'>
        {selections.map((item, index) => (
          <Button
            bsStyle={query[selector][item] ? 'info' : 'default'}
            key={index}
            onClick={() => {
              let newQuery = {...query}
              newQuery[selector][item] ? delete newQuery[selector][item] : newQuery[selector][item] = true
              setQuery(newQuery)
            }}
          >{item}</Button>
        ))}
      </ButtonGroup>
    </ButtonToolbar>
  </div>
)
