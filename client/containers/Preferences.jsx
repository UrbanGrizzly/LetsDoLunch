import React, { Component } from 'react'
import { connect } from 'react-redux'

import { startFetch, setMap } from '../actions/action_get_places';

import Preferences from '../components/Preferences.jsx';

const mapStateToProps = (state) => {
  console.log(state)
  return {
    query: state.currentPlacesList.query,
    mapSet: state.currentPlacesList.mapSet
  }
}

const mapDispatchToProps = (dispatch) => ({
  startFetch: () => {dispatch(startFetch())},
  setMap: () => {dispatch(setMap())}
})

export default connect(mapStateToProps, mapDispatchToProps)(Preferences)
