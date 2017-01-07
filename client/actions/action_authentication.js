import fetch from 'isomorphic-fetch';

export const facebookLogin = () => {
  fetch('/auth/facebook')
  .then((resp) => { console.log(resp); })
  .catch((err) => { console.log(err); })
};

export const checkAuth = () => {
    fetch('/auth/check')
    .then((resp) => { console.log(resp); })
    .catch((err) => { console.log(err); })
  }
}



