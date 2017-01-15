import React from 'react';
import { connect } from 'react-redux';
import Recommend from '../components/Recommend.jsx';
import { show, hide } from 'redux-modal';
import { setMap } from '../actions/map_action';
import { updatePlaces } from '../actions/action_get_places';
import {
  rejectListing,
  updateListing,
  toggleDetails,
  addToBlacklist,
  addToWishlist,
  addToVisited,
  fetchVenueDetails,
  finishVenueDetails
} from '../actions/action_single_place';


function mapStateToProps (state) {
  return {
    places: state.currentPlacesList.places,
    singleListing: state.currentPlacesList.singleListing,
    rejectedList: state.rejectedList,
    showDetails: state.currentPlacesList.showDetails,
    listingIndex: state.currentPlacesList.listingIndex,
    nextPage: state.currentPlacesList.nextPage,
    map: state.map,
    user: state.user,
    isFetchingDetails: state.currentPlacesList.fetchingDetail,
    routeInfo: state.currentPlacesList.routeInfo,
    blacklist: state.userPreferences.blacklist
  }
}

function mapDispatchToProps (dispatch) {
  return ({
    setMap: (mapState, mapSet) => {dispatch(setMap(mapState, mapSet))},
    rejectListing: (listing, blacklist) => {dispatch(rejectListing(listing, blacklist))},
    updateListing: (listing) => {dispatch(updateListing(listing))},
    toggleDetails: () => {dispatch(toggleDetails())},
    addToBlacklist: (listing, blacklist) => {dispatch(addToBlacklist(listing, blacklist))},
    addToWishlist: (listing, blacklist) => {dispatch(addToWishlist(listing, blacklist))},
    addToVisited: (listing, blacklist) => {dispatch(addToVisited(listing, blacklist))},
    openModal: (modal) => {dispatch(show(modal))},
    hideModal: (modal) => {dispatch(hide(modal))},
    fetchVenueDetails: () => {dispatch(fetchVenueDetails())},
    finishVenueDetails: (bool) => {dispatch(finishVenueDetails(bool))}
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Recommend);
