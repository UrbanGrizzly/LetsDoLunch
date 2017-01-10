import React from 'react';
import { connect } from 'react-redux';
import Recommend from '../components/Recommend.jsx';
import { rejectListing, toggleDetails } from '../actions/action_single_place';
import { changeDestination } from '../actions/map_action';


function mapStateToProps (state) {
  return {
    singleListing: state.currentPlacesList.singleListing,
    rejectedList: state.rejectedList,
    detailVisible: state.currentPlacesList.showDetails
  }
}

function mapDispatchToProps (dispatch) {
  return ({
    rejectPlace: (listing) => {dispatch(rejectListing(listing))},
    toggleDetails: () => {dispatch(toggleDetails())},
    changeDestination: (destination) => {dispatch(changeDestination(destination))}
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Recommend);
