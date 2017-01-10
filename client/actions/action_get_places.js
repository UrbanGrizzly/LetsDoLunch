import { SET_QUERY, START_FETCH, STOP_FETCH, UPDATE_PLACES, SET_MAP } from './actions';

export const setQuery = function(query) {
  return {
    type: SET_QUERY,
    query
  }
}

//this is when the user clicks the button that says the map is set
export const setMap = function() {
  return {
    type: SET_MAP
  }
}

export const startFetch = function() {
  return {
    type: START_FETCH
  }
}

export const stopFetch = function() {
  return {
    type: STOP_FETCH
  }
}

export const updatePlaces = function(places) {
  return {
    type: UPDATE_PLACES,
    places
  }
}
