
export const fetchPlaces = function(query) {
  console.log('in fetch places!')
  return {
    type: 'FETCH_PLACES',
    query
  }
}


export const receivePlaces = function(query, json) {
  console.log('in receive places!', json.businesses)
  return {
    type: 'RECEIVE_PLACES',
    query,
    places: json.businesses
  }
}


export const luckyPlace = function() {
  console.log('using the feeling lucky trick');
  return {
    type: 'FEELING_LUCKY',
    query: '',
    place: res.businesses
  }
}
