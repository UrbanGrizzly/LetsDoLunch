import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { Button, Nav, NavItem }           from 'react-bootstrap';
import fetch                from 'isomorphic-fetch';
import { setMap }           from '../actions/map_action';
import { setHome }          from '../actions/action_user_preference';
import {
  getUserPreferences,
  removeUserPreference,
  removeUserListing,
  userPreferenceMouseEnter,
  userPreferenceMouseLeave,
  moveToBlacklist,
  moveToFavorites,
  submitPrefForm,
  changeList
} from '../actions/action_user_preference';

import Map                  from '../containers/Map_Container.jsx';
import Preferences          from '../components/Profile_subcomponents/UserPreferences.jsx';
import Blacklist            from '../components/Profile_subcomponents/Blacklist.jsx';
import Wishlist             from '../components/Profile_subcomponents/Wishlist.jsx';
import Favorites            from '../components/Profile_subcomponents/Favorites.jsx';
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

  componentDidMount () {
    this.props.changeList("favorites")
  }

  render () {
    let {
      prefs: {
        preferences, blacklist, visited, wishlist, favorite
      },
      user: {
        username, email, selectedList
      },
      home,
      removeUserPreference, removeUserListing,
      mouseEnter, mouseLeave,
      moveToBlacklist, moveToFavorites, submitPrefForm, changeList
    } = this.props;

    const activeList = (listTitle) => {selectedList == listTitle ? 'activeListTab' : 'listTab'}

    let lastVisited = visited && visited.length ? visited[0] : { name: "No places to display!" };

    return (
      <div className="container profile-col">
        <h2>Welcome {username}</h2>
        <div className={ columnClassString(4) }>

          <p>{ email ? `email: ${ email }` : "No email provided yet!" }</p>

          <p>home location:</p>
          <Map useHome={true} />
          <Button bsStyle='info' onClick={setHome.bind(null, home)}>set home location</Button>


        </div>
        <div className={ columnClassString(4) }>
          <div className='preference-container'>
            <h2>Where Have You Been?</h2>
            <RatePreviousChoice
            listing={ lastVisited }
            moveToBlacklist={ moveToBlacklist }
            moveToFavorites={ moveToFavorites }
            />
          </div>
          <br/>
          <div className='preference-container'>
            <h2>What Do You Think?</h2>
            <Nav bsStyle="tabs">
              <NavItem className={selectedList === 'favorites' ? 'activeListTab' : 'listTab'} onClick={() => changeList("favorites")}>Favorites List</NavItem>
              <NavItem className={selectedList === 'wish' ? 'activeListTab' : 'listTab'} onClick={() => changeList("wish")}>Wish List</NavItem>
              <NavItem className={selectedList === 'blacklist' ? 'activeListTab' : 'listTab'} onClick={() => changeList("blacklist")}>Black List</NavItem>
            </Nav>

            <Favorites
            mouseEnter= { mouseEnter }
            mouseLeave={ mouseLeave }
            removeFn={ removeUserListing }
            favorite={ favorite }
            />

            {selectedList === 'wish' ?
            <Wishlist
            mouseEnter= { mouseEnter }
            mouseLeave={ mouseLeave }
            removeFn={ removeUserListing }
            wishlist={ wishlist }
            /> : null}

            {selectedList ==='blacklist' ?
            <Blacklist
            mouseEnter={ mouseEnter }
            mouseLeave={ mouseLeave }
            removeFn={ removeUserListing }
            blacklist={ blacklist }
            /> : null }

          </div>

        </div>
        <div className={ columnClassString(4) }>
          <h2>What Do You Like?</h2>
          <Preferences
          mouseEnter={ mouseEnter }
          mouseLeave={ mouseLeave }
          removeFn={ removeUserPreference }
          prefs={ preferences }
          submitPrefForm={ submitPrefForm }
          />



        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  prefs: state.userPreferences,
  user: state.user,
  home: state.map.home
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
  submitPrefForm: (preference) => dispatch(submitPrefForm(preference)),
  changeList: (listTitle) => dispatch(changeList(listTitle))
});

Profile = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);

export default Profile;
