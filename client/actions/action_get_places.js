import { SET_QUERY, RECEIVE_PLACES, FILTER_PLACES } from './actions';

export const setQuery = function(query) {
  return {
    type: SET_QUERY,
    query
  }
}


export const receivePlaces = function(query, json) {
  return {
    type: RECEIVE_PLACES,
    query,
    places: json.businesses
  }
}


//NOT USING until $ and time can be filtered
export const filterPlaces = function(query, places) {
  return {
    type: FILTER_PLACES,
    query,
    places
  }
}
