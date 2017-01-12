import React from 'react';
import { connect } from 'react-redux';
import Recommend from '../components/Recommend.jsx';
import { show, hide } from 'redux-modal';
import { rejectListing, updateListing, toggleDetails, addToBlacklist, addToWishlist, addToVisited } from '../actions/action_single_place';


function mapStateToProps (state) {
  return {
    singleListing: state.currentPlacesList.singleListing,
    rejectedList: state.rejectedList,
    showDetails: state.currentPlacesList.showDetails,
    map: state.map,
    user: state.user
  }
}

function mapDispatchToProps (dispatch) {
  return ({
    rejectPlace: (listing) => {dispatch(rejectListing(listing))},
    updateListing: (listing) => {dispatch(updateListing(listing))},
    toggleDetails: () => {dispatch(toggleDetails())},
<<<<<<< HEAD
    addToBlacklist: (listing, user) => {dispatch(addToBlacklist(listing))},
    addToWishlist: (listing) => {dispatch(addToWishlist(listing))},
    addToVisited: (listing) => {dispatch(addToVisited(listing))},
    openModal: (modal) => {dispatch(show(modal))},
    hideModal: (modal) => {dispatch(hide(modal))}
=======
    addToBlacklist: (listing, user) => {
      dispatch(addToBlacklist(listing))
    },
    addToWishlist: (listing, user) => {dispatch(addToWishlist(listing))},
    addToVisited: (listing, user) => {
      dispatch(addToVisited(listing))
    }
>>>>>>> [MODIFY](Client): foursqaure rating added. {AZ}
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Recommend);
