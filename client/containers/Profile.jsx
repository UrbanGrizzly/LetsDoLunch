import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetch from 'isomorphic-fetch';
import { getUserPreferences } from '../actions/action_user_preference';

import Preferences from './Profile_subcomponents/UserPreferences.jsx';

const columnClassString = (size) => `col col-xs-${size} col-md-${size} col-lg-${size} col-xl-${size}`;

class Profile extends Component {

  constructor(props) {
    super(props);
    
    props.getPreferences();

  }
  
  render () {

    return (
      <div className="container row">
        <div className={columnClassString(8)}>
          Fine, here is your Profile component. I hope you're happy.
        </div>
        <div className={columnClassString(4)}>
          <Preferences prefs={this.props.prefs} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  prefs: state.userPreferences
})

const mapDispatchToProps = (dispatch) => ({
  getPreferences: () => dispatch(getUserPreferences())
});

Profile = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);

export default Profile;
