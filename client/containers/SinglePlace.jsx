import React from 'react';
import { connect } from 'react-redux';
import Recommend from '../components/Recommend.jsx';
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
    addToVisited: (listing) => {
      alert('Enjoy your lunch!');
      dispatch(addToVisited(listing))
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Recommend);
