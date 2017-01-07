import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeBounds, changeOrigin } from '../actions/map_action';
import { updateRouteInfo, updatePhoto } from '../actions/action_single_place';
import Map_Component from '../components/Map_Component.jsx';


const mapStateToProps = (state) => {
  return {...state.map, isFetching: state.isFetching}
}

const mapDispatchToProps = (dispatch) => ({
  changeBounds: (newBounds) => {dispatch(changeBounds(newBounds))},
  changeOrigin: (newOrigin) => {dispatch(changeOrigin(newOrigin))},
  updateRouteInfo: (distance, duration) => {dispatch(updateRouteInfo(distance, duration))},
  updatePhoto: (photo) => {dispatch(updatePhoto(photo))}
})

export default connect(mapStateToProps, mapDispatchToProps)(Map_Component)
