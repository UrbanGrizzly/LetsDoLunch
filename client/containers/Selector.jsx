import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setQuery } from '../actions/action_get_places'

import Selector from '../components/Selector.jsx'

const mapStateToProps = (state) => {
  return {query: state.currentPlacesList.query}
}

const mapDispatchToProps = (dispatch) => ({
  setQuery: (query) => {dispatch(setQuery(query))}
})

export default connect(mapStateToProps, mapDispatchToProps)(Selector)
