import { RECEIVE_USER_PREFERENCES, USER_PREFERENCE_MOUSE_ENTER, USER_PREFERENCE_MOUSE_LEAVE, CHANGE_LIST } from './actions';
import fetch from 'isomorphic-fetch';


export const receiveUserPreferences = (data) => {
  return ({
    type: RECEIVE_USER_PREFERENCES,
    data
  })
}

export const userPreferenceMouseEnter = ({ prefType, index }) => {
  return {
    type: USER_PREFERENCE_MOUSE_ENTER,
    payload: { prefType, index }
  }
}

export const userPreferenceMouseLeave = ({ prefType, index }) => {
  return {
    type: USER_PREFERENCE_MOUSE_LEAVE,
    payload: { prefType, index }
  }
}

export const setHome = (location) => (
  fetch('/db/homelocation', {
    method: 'POST',
    body: JSON.stringify({geometry: { location }}),
    headers: {'Content-type': 'application/json'},
    credentials: 'same-origin'
  })
)

export const getUserPreferences = () => (
  dispatch => fetch('/db/userpreferences', {
    credentials: 'same-origin'
  })
  .then(data => data.json())
  .then(json => dispatch(receiveUserPreferences(json)))
)

// Send a delete request, which the server will respond to
// By sending the updated user preferences object. Trigger
// receiveUserPreferences with the server's response.
export const removeUserPreference = (preference) => (
  dispatch => {
    let url = '/db/userpreferences';
    let qs = `?id=${preference}`;
    return fetch(url + qs, {
      method: 'DELETE',
      credentials: 'same-origin'
    })
    .then(data => data.json())
    .then(json => dispatch(receiveUserPreferences(json)));
  }
)

// Same as removeUserPreference, except with listings
export const removeUserListing = (preference) => (
  dispatch => {
    let url = '/db/userlistings';
    let qs = `?id=${preference}`;
    return fetch(url + qs, {
      method: 'DELETE',
      credentials: 'same-origin'
    })
    .then(data => data.json())
    .then(json => dispatch(receiveUserPreferences(json)));
  }
)

export const moveToBlacklist = (listing) => (
  dispatch => {
    let url = '/db/movetoblacklist';

    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(listing),
      headers: {'Content-type': 'application/json'},
      credentials: 'same-origin'
    })
    .then(data => data.json())
    .then(json => dispatch(receiveUserPreferences(json)));
  }
)

export const moveToFavorites = (listing) => (
  dispatch => {
    let url = '/db/movetofavorites';

    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(listing),
      headers: {'Content-type': 'application/json'},
      credentials: 'same-origin'
    })
    .then(data => data.json())
    .then(json => dispatch(receiveUserPreferences(json)));
  }
)

export const submitPrefForm = (pref) => (
  dispatch => {
    pref.type = pref.type || 'userInput';
    return fetch('/db/adduserpreference', {
      method: 'POST',
      body: JSON.stringify(pref),
      headers: {'Content-type': 'application/json'},
      credentials: 'same-origin'
    })
    .then(data => data.json())
    .then(json => dispatch(receiveUserPreferences(json)))
  }
)

export const changeList = (listTitle) => {
  return {
    type: CHANGE_LIST,
    listTitle
  }
}




