import { UPDATE_NAVBAR } from '../actions/actions';

const initialState = {
  isLoggedIn: false,
  username: '',
  email: ''
};

export default (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_NAVBAR:
      return Object.assign({}, state, {
        isLoggedIn: action.bool, 
        username: action.username,
        email: action.email
      })
    default:
      return state;
  }
}
