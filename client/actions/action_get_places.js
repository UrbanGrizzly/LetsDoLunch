import { FETCH_PLACES, RECEIVE_PLACES, FILTER_PLACES } from './actions';

export const fetchPlaces = function(query) {
  return {
    type: FETCH_PLACES,
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
