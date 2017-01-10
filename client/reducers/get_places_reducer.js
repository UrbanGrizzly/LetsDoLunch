import {
  SET_QUERY,
  START_FETCH,
  STOP_FETCH,
  UPDATE_PLACES,
  REJECT_PLACE,
  TOGGLE_DETAILS,
  SHOW_DETAIL,
  UPDATE_ROUTE_INFO,
  SET_MAP
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

    case TOGGLE_DETAILS:
      return {...state, showDetails: !state.showDetails}

    case UPDATE_ROUTE_INFO:
      return {...state, singleListing: {...state.singleListing, ...action.routeInfo}}

  default:
      return state;
  }
}
