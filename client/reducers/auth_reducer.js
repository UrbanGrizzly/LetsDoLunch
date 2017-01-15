import { UPDATE_NAVBAR, CHANGE_LIST } from '../actions/actions';

const initialState = {
  selectedList: 'favorites',
  isLoggedIn: false,
  username: '',
  email: ''
};

export default (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_LIST:
      return {...state, selectedList: action.listTitle}
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
