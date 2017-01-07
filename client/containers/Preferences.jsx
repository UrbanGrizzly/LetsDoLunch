import React, { Component } from 'react'
import { connect } from 'react-redux'

import { startFetch } from '../actions/action_get_places'

import Preferences from '../components/Preferences.jsx'

const mapDispatchToProps = (dispatch) => ({
  startFetch: () => {dispatch(startFetch())}
})

export default connect(null, mapDispatchToProps)(Preferences)
