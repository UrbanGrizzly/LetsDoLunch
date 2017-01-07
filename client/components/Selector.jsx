import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap'


export default ({ selector, selections, query = {}, setQuery }) => (
  <div className='prefTitle'>
    { selector }
    <ButtonToolbar>
      <ButtonGroup bsSize='large' className='cuisine'>
        {selections.map((item, index) => (
          <Button
            bsStyle={query[selector][item] ? 'info' : null}
            key={index}
            onClick={() => {
              let newQuery = {...query}
              newQuery[selector][item] = !query[selector][item]
              setQuery(newQuery)
            }}
          >{item}</Button>
        ))}
      </ButtonGroup>
    </ButtonToolbar>
  </div>
)
