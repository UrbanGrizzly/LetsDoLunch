import { RECEIVE_USER_PREFERENCES, USER_PREFERENCE_MOUSE_ENTER, USER_PREFERENCE_MOUSE_LEAVE } from './actions';
import fetch from 'isomorphic-fetch';

export const receiveUserPreferences = (data) => {
  // for (var key in data) {
  //   data[key] = data[key].map(thing => {
  //     thing.Hover = false;
  //     return thing;
  //   });
  // }
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

export const getUserPreferences = () => (
  dispatch => fetch('/db/userpreferences?username=Valerie')
  .then(data => data.json())
  .then(json => dispatch(receiveUserPreferences(json)))
)

// Send a delete request, which the server will respond to
// By sending the updated user preferences object. Trigger
// receiveUserPreferences with the server's response.
export const removeUserPreference = (preference) => (
  dispatch => {
    let url = '/db/userpreferences';
    let qs = `?name=${preference}&username=Valerie`;
    return fetch(url + qs, {
      method: 'DELETE'
    })
    .then(data => data.json())
    .then(json => dispatch(receiveUserPreferences(json)));
  }
)

// Same as removeUserPreference, except with listings
export const removeUserListing = (preference) => (
  dispatch => {
    let url = '/db/userlistings';
    let qs = `?name=${preference}&username=Valerie`;
    return fetch(url + qs, {
      method: 'DELETE'
    })
    .then(data => data.json())
    .then(json => dispatch(receiveUserPreferences(json)));
  }
)
