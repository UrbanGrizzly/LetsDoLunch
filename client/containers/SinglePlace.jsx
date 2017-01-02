import React from 'react';
import { connect } from 'react-redux';
import Recommend from '../components/Recommend.jsx';
import rejectListing from '../actions/action_single_place';


function mapStateToProps (state) {
  return {
    singleListing: state.singleListing,
    rejectedList: state.rejectedList
  }
}

function mapDispatchToProps (dispatch) {
  return ({
    rejectPlace: (listing) => {dispatch(rejectListing(listing))}
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Recommend);
