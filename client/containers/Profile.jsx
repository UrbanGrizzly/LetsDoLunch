import React, { Component } from 'react';
import { connect }          from 'react-redux';
import fetch                from 'isomorphic-fetch';
import {
  getUserPreferences,
  removeUserPreference,
  removeUserListing,
  userPreferenceMouseEnter,
  userPreferenceMouseLeave,
  moveToBlacklist,
  moveToFavorites
}                           from '../actions/action_user_preference';

import Preferences          from '../components/Profile_subcomponents/UserPreferences.jsx';
import Blacklist            from '../components/Profile_subcomponents/Blacklist.jsx';
import Wishlist             from '../components/Profile_subcomponents/Wishlist.jsx';
import RatePreviousChoice   from '../components/Profile_subcomponents/RatePreviousChoice.jsx';

const columnClassString = (size) => `col col-xs-${size} col-md-${size} col-lg-${size} col-xl-${size}`;

class Profile extends Component {

  constructor(props) {
    super(props);

    props.getPreferences();
  }

  render () {
    let {
      prefs: {
        preferences, blacklist, visited, wishlist
      },
      user: {
        username, email
      },
      removeUserPreference, removeUserListing,
      mouseEnter, mouseLeave,
      moveToBlacklist, moveToFavorites
    } = this.props;

    let lastVisited = visited && visited.length ? visited[0] : { name: "No places to display!" };

    return (
      <div className="row">
        <div className={ columnClassString(8) }>
          <h2>Profile Info</h2>
          <p>{ email ? `email: ${ email }` : "No email provided yet!" }</p>

          <RatePreviousChoice
          listing={ lastVisited }
          moveToBlacklist={ moveToBlacklist }
          moveToFavorites={ moveToFavorites }
          />

        </div>
        <div className={ columnClassString(4) }>

          <Preferences
          mouseEnter={ mouseEnter }
          mouseLeave={ mouseLeave }
          removeFn={ removeUserPreference }
          prefs={ preferences }
          />

          <Wishlist
          mouseEnter= { mouseEnter }
          mouseLeave={ mouseLeave }
          removeFn={ removeUserListing }
          wishlist={ wishlist }
          />

          <Blacklist
          mouseEnter={ mouseEnter }
          mouseLeave={ mouseLeave }
          removeFn={ removeUserListing }
          blacklist={ blacklist }
          />

        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ userPreferences, user }) => ({
  prefs: userPreferences,
  user: user
})

const mapDispatchToProps = (dispatch) => ({
  getPreferences: () => dispatch(getUserPreferences()),
  removeUserPreference: (preference) => dispatch(removeUserPreference(preference)),
  removeUserListing: (listing) => dispatch(removeUserListing(listing)),
  mouseEnter: (prefInfo) => dispatch(userPreferenceMouseEnter(prefInfo)),
  mouseLeave: (prefInfo) => dispatch(userPreferenceMouseLeave(prefInfo)),
  moveToBlacklist: (listingInfo) => dispatch(moveToBlacklist(listingInfo)),
  moveToFavorites: (listingInfo) => dispatch(moveToFavorites(listingInfo))
});

Profile = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);

export default Profile;
