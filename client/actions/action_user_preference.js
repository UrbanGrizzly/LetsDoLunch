import { RECEIVE_USER_PREFERENCES } from './actions';
import fetch from 'isomorphic-fetch';

export const receiveUserPreferences = (data) => {
  return ({
    type: RECEIVE_USER_PREFERENCES, 
    data
  })
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
