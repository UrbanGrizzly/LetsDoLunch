import React from 'react';
import { connect } from 'react-redux';
import Recommend from '../components/Recommend.jsx';
import rejectListing from '../actions/action_single_place';


function mapStateToProps (state) {
  console.log('in mapStateToProps')
  return {
    singleListing: state.singleListing
  }
}

function mapDispatchToProps (dispatch) {
  console.log('in mapDispatchToProps')
  return ({
    rejectPlace: (listing) => {dispatch(rejectListing(listing))}
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Recommend);
