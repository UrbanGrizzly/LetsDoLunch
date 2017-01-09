import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetch from 'isomorphic-fetch';
import { getUserPreferences, removeUserPreference, removeUserListing } from '../actions/action_user_preference';

import Preferences from '../components/Profile_subcomponents/UserPreferences.jsx';
import Blacklist from '../components/Profile_subcomponents/Blacklist.jsx';

const columnClassString = (size) => `col col-xs-${size} col-md-${size} col-lg-${size} col-xl-${size}`;

class Profile extends Component {

  constructor(props) {
    super(props);

    props.getPreferences();
  }

  render () {
    let { prefs: { preferences, blacklist, likes }, removeUserPreference, removeUserListing } = this.props;

    return (
      <div className="container row">
        <div className={columnClassString(8)}>
          Fine, here is your Profile component. I hope you're happy.
        </div>
        <div className={columnClassString(4)}>
          <Preferences removeFn={ removeUserPreference } prefs={ preferences } />
          <Blacklist removeFn={ removeUserListing } blacklist={ blacklist } />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ userPreferences }) => ({
  prefs: userPreferences
})

const mapDispatchToProps = (dispatch) => ({
  getPreferences: () => dispatch(getUserPreferences()),
  removeUserPreference: (preference) => dispatch(removeUserPreference(preference)),
  removeUserListing: (listing) => dispatch(removeUserListing(listing))
});

Profile = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);

export default Profile;
