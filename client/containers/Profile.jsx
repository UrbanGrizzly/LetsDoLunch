import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { Button }           from 'react-bootstrap';
import fetch                from 'isomorphic-fetch';
import { setMap }           from '../actions/map_action';
import { setHome }           from '../actions/action_user_preference';
import {
  getUserPreferences,
  removeUserPreference,
  removeUserListing,
  userPreferenceMouseEnter,
  userPreferenceMouseLeave,
  moveToBlacklist,
  moveToFavorites,
  submitPrefForm
} from '../actions/action_user_preference';

import Map                  from '../containers/Map_Container.jsx';
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

  componentWillMount() {
    this.props.setMap('mediumMap')
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
      moveToBlacklist, moveToFavorites, submitPrefForm
    } = this.props;

    let lastVisited = visited && visited.length ? visited[0] : { name: "No places to display!" };

    return (
      <div className="row">
        <div className={ columnClassString(4) }>

          <h2>Profile Info</h2>
          <p>{ email ? `email: ${ email }` : "No email provided yet!" }</p>
          <p>home location:</p>
          <Map useHome={true} />
          <Button bsStyle='info' onClick={setHome}>set home location</Button>

        </div>
        <div className={ columnClassString(4) }>

          <h2>History</h2>
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
          submitPrefForm={ submitPrefForm }
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
  setMap: (mapState, mapSet) => {dispatch(setMap(mapState, mapSet))},
  getPreferences: () => dispatch(getUserPreferences()),
  removeUserPreference: (preference) => dispatch(removeUserPreference(preference)),
  removeUserListing: (listing) => dispatch(removeUserListing(listing)),
  mouseEnter: (prefInfo) => dispatch(userPreferenceMouseEnter(prefInfo)),
  mouseLeave: (prefInfo) => dispatch(userPreferenceMouseLeave(prefInfo)),
  moveToBlacklist: (listingInfo) => dispatch(moveToBlacklist(listingInfo)),
  moveToFavorites: (listingInfo) => dispatch(moveToFavorites(listingInfo)),
  submitPrefForm: (preference) => dispatch(submitPrefForm(preference))
});

Profile = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);

export default Profile;
