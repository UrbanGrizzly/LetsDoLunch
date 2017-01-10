import React from 'react'
import { connect } from 'react-redux'

import { setQuery, startFetch } from '../actions/action_get_places'

import Lucky from '../components/Lucky.jsx'

const mapStateToProps = (state) => ({
  query: state.currentPlacesList.query
})

const mapDispatchToProps = (dispatch) => ({
  setQuery: (query) => {dispatch(setQuery(query))},
  startFetch: () => {dispatch(startFetch())}
})

export default connect(mapStateToProps, mapDispatchToProps)(Lucky)
