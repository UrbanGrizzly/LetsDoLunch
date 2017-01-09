import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeBounds, changeOrigin } from '../actions/map_action';
import { stopFetch, updatePlaces } from '../actions/action_get_places';
import { updateRouteInfo } from '../actions/action_single_place';
import Map_Component from '../components/Map_Component.jsx';

const mapStateToProps = (state) => {
  return {...state.map, ...state.currentPlacesList}
}

const mapDispatchToProps = (dispatch) => ({
  changeBounds: (newBounds) => {dispatch(changeBounds(newBounds))},
  changeOrigin: (newOrigin) => {dispatch(changeOrigin(newOrigin))},
  stopFetch: () => {dispatch(stopFetch())},
  updatePlaces: (places) => {dispatch(updatePlaces(places))},
  updateRouteInfo: (distance, duration) => {dispatch(updateRouteInfo(distance, duration))}
})

export default connect(mapStateToProps, mapDispatchToProps)(Map_Component)
