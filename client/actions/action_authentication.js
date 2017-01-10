import fetch from 'isomorphic-fetch';
import { UPDATE_NAVBAR } from './actions'


export const isUserAuth = (user) => {
  return {
    type: UPDATE_NAVBAR,
    bool: user.bool,
    username: user.username,
    email: user.email
  };
}

export const logout = () => {
  return dispatch => fetch('/auth/logout', {
    credentials: 'same-origin'
  })
  .then(() => dispatch(isUserAuth(false)))
  .catch((err) => { console.log(err); })
}

export const checkAuth = () => {
  return dispatch => fetch('/auth/check', {
    credentials: 'same-origin'
  })
  .then(resp => resp.json())
  .then((resp) => dispatch(isUserAuth(resp)))
  .catch((err) => { console.log(err); })
}
