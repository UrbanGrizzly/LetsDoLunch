import fetch from 'isomorphic-fetch';


export const isUserAuth = (bool) => {
  return ({
    type: UPDATE_NAVBAR,
    bool
  });
}

export const checkAuth = () => {

  return dispatch => fetch('/auth/check')
  .then((resp) => dispatch(isUserAuth(resp)))
  .catch((err) => { console.log(err); })
}
