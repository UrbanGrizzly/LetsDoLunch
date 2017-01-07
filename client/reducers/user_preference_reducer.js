
const initialState = [
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
];

export default (state = initialState, action) => {
  switch(action.type) {
    case 'GET_USER_PREFERENCES': 
      console.log(action.data);
      return action.data;
    default: 
      return state;
  }
}
