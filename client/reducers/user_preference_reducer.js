import { RECEIVE_USER_PREFERENCES, USER_PREFERENCE_MOUSE_ENTER, USER_PREFERENCE_MOUSE_LEAVE } from '../actions/actions';

const initialState = {
  preferences: [
    {
      "name": "Initialstate is working!!111",
      "type": "heart"
    },
    {
      "name": "Chinese",
      "type": "hate"
    },
    {
      "name": "Steff's",
      "type": "yes"
    },
    {
      "name": "Indian",
      "type": "no"
    }
  ],
  blacklist: [
    {
      "name": "Not Steff's",
      "type": "yes"
    },
    {
      "name": "Not something else",
      "type": "no"
    }
  ]
};

export default (state = initialState, action) => {
  let { prefType, index } = action.payload ? action.payload : {};
  let newState = {
    ...state
  }

  switch(action.type) {
    case RECEIVE_USER_PREFERENCES:
      return action.data;
      break;
    case USER_PREFERENCE_MOUSE_ENTER:
      newState[prefType][index].hover = true;
      return newState;
    case USER_PREFERENCE_MOUSE_LEAVE:      
      newState[prefType][index].hover = false;
      return newState;
    default:
      return state;
  }
}
