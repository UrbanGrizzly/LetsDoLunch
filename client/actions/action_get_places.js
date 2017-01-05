
export const fetchPlaces = function(query) {
  console.log('in fetch places!')
  return {
    type: 'FETCH_PLACES',
    query
  }
}


export const receivePlaces = function(query, json) {
  console.log('in receive places!')
  return {
    type: 'RECEIVE_PLACES',
    query,
    places: json.businesses
  }
}


//NOT USING until $ and time can be filtered
export const filterPlaces = function(query, places) {
  console.log('in filter places!')
  return {
    type: 'FILTER_PLACES',
    query,
    places
  }
}
