import fetch from 'isomorphic-fetch';
import { UPDATE_NAVBAR } from './actions'


export const isUserAuth = (bool) => {
  console.log(bool)
  return {
    type: UPDATE_NAVBAR,
    bool
  };
}

export const checkAuth = () => {
  return dispatch => fetch('/auth/check')
  .then((resp) => resp.json())
  .then((resp) => dispatch(isUserAuth(resp)))
  .catch((err) => { console.log(err); })
}
