import React from 'react'
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';

const helperObj = {
  'Eat Food': 'food',
  'Get Drinks': 'drinks',
  'Have Fun': 'fun'
}


export default ({ print, selector, selections, query, setQuery }) => (
  <div>
    {selections.map((item, index) => (
      <Button className='prefTitle'
        bsStyle={query[selector][item] ? 'info' : null}
        key={index}
        onClick={() => {
          let newQuery = {...query}
          newQuery[selector][item] ? delete newQuery[selector][item]: newQuery[selector][item] = true; newQuery.selected[selector] = helperObj[item] || true; 
          setQuery(newQuery)
        }}
      >{item}</Button>
    ))}
  </div>
)
