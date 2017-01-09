import { UPDATE_NAVBAR } from '../actions/actions';

const initialState = false;

export default (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_NAVBAR:
      return action.bool;
    default:
      return state;
  }
}

