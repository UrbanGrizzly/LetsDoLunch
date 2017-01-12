import { REJECT_PLACE, UPDATE_LISTING, TOGGLE_DETAILS } from './actions';

export const rejectListing = (listing) => ({
  type: REJECT_PLACE,
  listing
})

export const updateListing = (listing) => ({
  type: UPDATE_LISTING,
  listing
})

export const toggleDetails = () => ({
  type: TOGGLE_DETAILS
})

export const addToBlacklist = (listing) => (
  dispatch => {
    let url = '/db/userblacklist';
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(listing),
      headers: {'Content-type': 'application/json'},
      credentials: 'same-origin'
    })
    .then(data => console.log('statusCode: ', data.status))
    .then(() => dispatch(rejectListing(listing)));
  }
)

export const addToWishlist = (listing) => (
  dispatch => {
    let url = '/db/userwishlist';
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(listing),
      headers: {'Content-type': 'application/json'},
      credentials: 'same-origin'
    })
    .then(data => console.log('statusCode: ', data.status))
    .then(() => dispatch(rejectListing(listing)));
  }
)

export const addToVisited = (listing) => (
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



