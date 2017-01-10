import React, { Component } from 'react'
import { connect } from 'react-redux'

import { startFetch } from '../actions/action_get_places';

import Preferences from '../components/Preferences.jsx';

const mapStateToProps = (state) => {
  console.log(state.currentPlacesList.query)
  return {query: state.currentPlacesList.query}
}

const mapDispatchToProps = (dispatch) => ({
  startFetch: () => {dispatch(startFetch())}
})

export default connect(mapStateToProps, mapDispatchToProps)(Preferences)
