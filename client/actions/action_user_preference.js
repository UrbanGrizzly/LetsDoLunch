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

export const removeUserPreference = (preference) => (
  dispatch => {
    let url = '/db/userpreferences';
    let qs = `?name=${preference}`;
    return fetch(url + qs, {
      method: 'DELETE'
    })
    .then(data => data.json())
    .then(json => dispatch(receiveUserPreferences(json)));
  }
)
