import { SET_QUERY, START_FETCH, STOP_FETCH, UPDATE_PLACES, SAVE_NEXT_PAGE } from './actions';

export const setQuery = function(query) {
  return {
    type: SET_QUERY,
    query
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

export const saveNextPage = function(nextPage) {
  return {
    type: SAVE_NEXT_PAGE,
    nextPage
  }
}
