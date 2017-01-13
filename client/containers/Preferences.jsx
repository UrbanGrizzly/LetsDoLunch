import React, { Component }  from 'react'
import { connect }           from 'react-redux'

import { startFetch }        from '../actions/action_get_places';
import { updateListing }     from '../actions/action_single_place';
import { setMap }            from '../actions/map_action';

import Preferences           from '../components/Preferences.jsx';

const mapStateToProps = (state) => {
  return {
    query: state.currentPlacesList.query,
    mapSet: state.map.mapSet,
    mapState: state.map.mapState
  }
}

const mapDispatchToProps = (dispatch) => ({
  startFetch: () => {dispatch(startFetch())},
  setMap: (mapState, mapSet) => {dispatch(setMap(mapState, mapSet))},
  updateListing: (listing) => {dispatch(updateListing(listing))}
})

export default connect(mapStateToProps, mapDispatchToProps)(Preferences)
