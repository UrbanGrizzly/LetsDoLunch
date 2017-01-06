import fetch from 'isomorphic-fetch';

const facebookLogin = () => (
  fetch('/auth/facebook')
  .then((resp) => { console.log(resp); })
  .catch((err) => { console.log(err); })
);

export default facebookLogin;
