import React from 'react';
import { connect } from 'react-redux';
import Recommend from '../components/Recommend.jsx';
import { show } from 'redux-modal';
import { rejectListing, updateListing, toggleDetails, addToBlacklist, addToWishlist, addToVisited } from '../actions/action_single_place';


function mapStateToProps (state) {
  return {
    singleListing: state.currentPlacesList.singleListing,
    rejectedList: state.rejectedList,
    showDetails: state.currentPlacesList.showDetails
  }
}

function mapDispatchToProps (dispatch) {
  return ({
    rejectPlace: (listing) => {dispatch(rejectListing(listing))},
    updateListing: (listing) => {dispatch(updateListing(listing))},
    toggleDetails: () => {dispatch(toggleDetails())},
    addToBlacklist: (listing) => {
      alert('You will never see it again!');
      dispatch(addToBlacklist(listing))
    },
    addToWishlist: (listing) => {dispatch(addToWishlist(listing))},
    addToVisited: (listing) => {dispatch(addToVisited(listing))},
    openModal: (modal) => {dispatch(show(modal))}
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Recommend);
