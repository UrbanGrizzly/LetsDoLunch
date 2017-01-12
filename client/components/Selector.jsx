import React from 'react'
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';

const helperObj = {
  'Eat Food': 'restaurant',
  'Get Drinks': 'bar',
  'Have Fun': 'entertainment'
}


export default ({ print, selector, selections, query, setQuery, onClick }) => (
  <div>
    {selections.map((item, index) => (
      <Button className='prefTitle'
        bsStyle={query[selector][item] ? 'info' : 'default'}
        key={index}
        onClick={() => {
          onClick ? onClick() : null
          let newQuery = {...query}
          newQuery[selector][item] ? 
          delete newQuery[selector][item]: 
          newQuery[selector][item] = true; newQuery.selected[selector] = helperObj[item] || true; 
          setQuery(newQuery)
        }}
      >{item}</Button>
    ))}
  </div>
)
