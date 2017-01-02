
export default (state = {
  isFetching: false,
  places: []
}, action) => {
  switch(action.type) {
    case 'FETCH_PLACES':
      return Object.assign({}, state, {isFetching: true})

    case 'RECEIVE_PLACES':
      return state  

    default:
      return state;
  }
}
