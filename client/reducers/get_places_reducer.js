import {
  SET_QUERY,
  SET_MAP,
  START_FETCH,
  STOP_FETCH,
  UPDATE_PLACES,
  SAVE_NEXT_PAGE,
  REJECT_PLACE,
  UPDATE_LISTING,
  TOGGLE_DETAILS,
  FETCH_DETAILS,
  FINISH_DETAILS,
  UPDATE_ROUTE
} from '../actions/actions';

const initialState = {
  fetchingDetail: false, //yelp/foursquare
  // finishDetail: false, //yelp/foursquare
  isFetching: false,
  showDetails: false,
  query: {
    radius: '1000',
    type: 'restaurant',
    selected: {
      price: false,
      detail: false,
      time: false,
      options: false
    },
    price: {},
    detail: {},
    time: {},
    options: {}
  },
  places: [],
  listingIndex: 0,
  singleListing: {
    hasDetails: false, //indicates whether yelp/foursquare successfully fetch details
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
  },
  routeInfo: {
    distance: '',
    duration: ''
  }
}

let findNextIndexNotOnBlacklist = function(index, places, blacklist) {
  blacklist = blacklist.map(listing => listing.name) || [];

  while (blacklist.indexOf(places[index].name) !== -1 && index < places.length) {
    index++;
  }

  return index;
}

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_QUERY:
      return {...state, query: action.query}

    case START_FETCH:
      return {...state, isFetching: true}

    case STOP_FETCH:
      return {...state, isFetching: false}

    case FETCH_DETAILS:
      return {...state, fetchingDetail: true}

    case FINISH_DETAILS:
      return {
        ...state,
        fetchingDetail: false,
        singleListing: {
          ...state.singleListing,
          hasDetails: action.hasDetails
        }
      }

    case UPDATE_ROUTE:
      return {
        ...state,
        routeInfo: {
          distance: action.distance,
          duration: action.duration
        }
      }

    case UPDATE_PLACES:
      return {...state, places: action.places || state.places, singleListing: action.places[0] || state.places[0], listingIndex: 0}

    case SAVE_NEXT_PAGE:
      return {...state, nextPage: action.nextPage}

    case REJECT_PLACE:
      let nextIndex = findNextIndexNotOnBlacklist(++state.listingIndex, state.places, action.blacklist);

      return {
        ...state, 
        singleListing: state.places[nextIndex], 
        listingIndex: nextIndex, 
        showDetails: false
      }

    case UPDATE_LISTING:
      return {...state,
        fetchingDetail: false,
        singleListing: {
          ...action.listing,
          hasDetails: true
        }
      }

    case TOGGLE_DETAILS:
      return {...state, showDetails: !state.showDetails}

    default:
        return state;
  }
}
