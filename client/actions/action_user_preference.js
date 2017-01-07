import { GET_USER_PREFERENCES } from './actions';
import fetch from 'isomorphic-fetch';

export const receiveUserPreferences = (data) => {
  return ({
    type: GET_USER_PREFERENCES, 
    data
  })
}

export const getUserPreferences = () => (
  dispatch => fetch('/db/userpreferences?username=Valerie')
  .then(data => data.json())
  .then(json => dispatch(receiveUserPreferences(json)))
)
