import _ from 'lodash';
import { REJECT_PLACE, UPDATE_LISTING, TOGGLE_DETAILS, FETCH_DETAILS, FINISH_DETAILS, UPDATE_ROUTE } from './actions';

export const updateRoute = (distance, duration) => ({
  type: UPDATE_ROUTE,
  distance,
  duration
})


export const rejectListing = (listing, blacklist) => {
  return ({
    type: REJECT_PLACE,
    listing,
    blacklist
  })
}


export const updateListing = (listing) => ({
  type: UPDATE_LISTING,
  listing
})

export const toggleDetails = () => ({
  type: TOGGLE_DETAILS
})

export const fetchVenueDetails = () => ({
  type: FETCH_DETAILS
})

//Not used
export const finishVenueDetails = (bool) => ({
  type: FINISH_DETAILS,
  hasDetails: bool
})

export const addToBlacklist = (listing, blacklist) => (
  dispatch => {
    let url = '/db/userblacklist';
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(listing),
      headers: {'Content-type': 'application/json'},
      credentials: 'same-origin'
    })
    .then(() => dispatch(rejectListing(listing, blacklist)));
  }
)

export const addToWishlist = (listing, blacklist) => (
  dispatch => {
    let url = '/db/userwishlist';
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(listing),
      headers: {'Content-type': 'application/json'},
      credentials: 'same-origin'
    })
    .then(() => dispatch(rejectListing(listing, blacklist)));
  }
)

export const addToVisited = (listing, blacklist) => (
  dispatch => {
    let url = '/db/uservisited';
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(listing),
      headers: {'Content-type': 'application/json'},
      credentials: 'same-origin'
    })
    .then(data => console.log('statusCode: ', data.status))
  }
)


