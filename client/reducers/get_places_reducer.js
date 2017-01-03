
const initialState = {
  isFetching: false,
  places: [],
  singleListing: {
    categories: [[]], //this is to prevent the app from breaking on load
    //listingInfo component references singleListing.categories[0]
    //probably want a more robust solution later
    location: {
      coordinate: {
        latitude: 37.77493,
        longitude: -122.419415
      },
      display_address: []
    }
  }
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_PLACES':
      return Object.assign({}, state, {isFetching: true})

    case 'RECEIVE_PLACES':
    console.log('action.places', action.places)
      return Object.assign({}, state, {
        isFetching: false,
        places: action.places,
        singleListing: action.places[0]
      })

    case 'REJECT_PLACE':
      return Object.assign({}, state, {
        singleListing: state.places[action.idx]
        //nothing happens when we run out of places...
      })

    default:
      return state;
  }
}
