
const initialState = {
  isFetching: false,
  places: [],
  singleListing: {}
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_PLACES':
      return Object.assign({}, state, {isFetching: true})

    case 'RECEIVE_PLACES':
      return Object.assign({}, state, {
        isFetching: false,
        places: action.places,
        singleListing: action.places[0]
      })

    case 'REJECT_PLACE':
      return Object.assign({}, state, {
        singleListing: state.places[action.idx]
      })

    default:
      return state;
  }
}
