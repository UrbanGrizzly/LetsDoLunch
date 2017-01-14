import { SET_MAP, CHANGE_BOUNDS, CHANGE_ORIGIN, CHANGE_HOME } from '../actions/actions';

const initialMapState = {
  mapClass: 'bigMap',
  mapSet: false,
  zoom: 16,
  center: {lat: 37.787596, lng: -122.4001153},
  origin: {lat: 37.787596, lng: -122.4001153},
  home: {lat: 37.797596, lng: -122.4001153}
};

export default (state = initialMapState, action) => {
  switch(action.type) {
    case SET_MAP:
      return {...state, mapClass: action.mapClass, mapSet: action.mapSet}

    case CHANGE_BOUNDS:
      return {...state, zoom: action.newBounds.zoom, center: action.newBounds.center};

    case CHANGE_ORIGIN:
      return {...state, origin: action.newOrigin};

    case CHANGE_HOME:
      return {...state, home: action.newHome};

    default:
      return state;
  }
}
