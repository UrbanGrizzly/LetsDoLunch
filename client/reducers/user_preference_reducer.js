import { RECEIVE_USER_PREFERENCES } from '../actions/actions';

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
  switch(action.type) {
    case RECEIVE_USER_PREFERENCES:
    console.log(action.data);
      return action.data;
    default: 
      return state;
  }
}
