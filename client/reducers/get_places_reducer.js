import {
  SET_QUERY,
  SET_MAP,
  START_FETCH,
  STOP_FETCH,
  UPDATE_PLACES,
  REJECT_PLACE,
  UPDATE_LISTING,
  TOGGLE_DETAILS,
} from '../actions/actions';

const initialState = {
  isFetching: false,
  showDetails: false,
  query: {
    radius: '1000',
    type: 'restaurant',
    selected: {
      price: false,
      cuisine: false,
      time: false,
      options: false
    },
    price: {},
    cuisine: {},
    time: {},
    options: {}
  },
  mapSet: false,
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
    },
    routeInfo: {
      distance: '',
      duration: ''
    }
  }
}

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_QUERY:
      return {...state, query: action.query}

    case SET_MAP:
      return {...state, mapSet: true}

    case START_FETCH:
      return {...state, isFetching: true}

    case STOP_FETCH:
      return {...state, isFetching: false}

    case UPDATE_PLACES:
      return {...state, places: action.places, singleListing: action.places[0]}

    case REJECT_PLACE:
      return {...state, singleListing: state.places[action.idx]}

    case UPDATE_LISTING:
    return {...state, singleListing: action.listing}

    case TOGGLE_DETAILS:
      return {...state, showDetails: !state.showDetails}

    default:
        return state;
  }
}
