import React from 'react';
import { connect } from 'react-redux';
import Recommend from '../components/Recommend.jsx';
import { rejectListing, toggleDetail } from '../actions/action_single_place';


function mapStateToProps (state) {
  console.log('this is state!', state);
  return {
    singleListing: state.currentPlacesList.singleListing,
    rejectedList: state.rejectedList,
    detailVisible: state.currentPlacesList.showDetail
  }
}

function mapDispatchToProps (dispatch) {
  return ({
    rejectPlace: (listing) => {dispatch(rejectListing(listing))},
    showDetail: () => {dispatch(toggleDetail())}
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Recommend);
