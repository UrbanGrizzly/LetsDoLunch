
export function(query) {
  return {
    type: 'FETCH_PLACES',
    query
  }
}


export function(query, json) {
  return {
    type: 'RECEIVE_PLACES',
    query,
    places: json.businesses.map((place) => place)
  }
}

