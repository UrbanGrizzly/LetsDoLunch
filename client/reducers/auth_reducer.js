import { UPDATE_NAVBAR } from '../action/actions';

const initialState = {isLoggedIn: false};

export default (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_NAVBAR:
    console.log(action.bool)
      return Object.assign({}, state, {isLoggedIn: action.bool});
    default:
      return state;
  }
}

