import { CHANGE_BOUNDS, CHANGE_ORIGIN, CHANGE_DESTINATION } from '../actions/actions';

const initialMapState = {
  zoom: 16,
  center: {lat: 37.787596, lng: -122.4001153},
  origin: {lat: 37.787596, lng: -122.4001153},
  destination: null
};

export default (state = initialMapState, action) => {
  switch(action.type) {

    case CHANGE_BOUNDS:
      return {...state, zoom: action.newBounds.zoom, center: action.newBounds.center};

    case CHANGE_ORIGIN:
      return {...state, origin: action.newOrigin};

    case CHANGE_DESTINATION:
      return {...state, destination: action.newDestination};

    default:
      return state;
  }
}
