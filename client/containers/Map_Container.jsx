import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeBounds, changeOrigin } from '../actions/map_action';
import { stopFetch, updatePlaces, saveNextPage } from '../actions/action_get_places';
import { updateListing } from '../actions/action_single_place';
import Map_Component from '../components/Map_Component.jsx';

const mapStateToProps = (state) => {
  return {...state.map, ...state.currentPlacesList}
}

const mapDispatchToProps = (dispatch) => ({
  changeBounds: (newBounds) => {dispatch(changeBounds(newBounds))},
  changeOrigin: (newOrigin) => {dispatch(changeOrigin(newOrigin))},
  stopFetch: () => {dispatch(stopFetch())},
  updatePlaces: (places) => {dispatch(updatePlaces(places))},
  saveNextPage: (nextPage) => {dispatch(saveNextPage(nextPage))},
  updateListing: (listing) => {dispatch(updateListing(listing))}
})

export default connect(mapStateToProps, mapDispatchToProps)(Map_Component)
