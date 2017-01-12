import { REJECT_PLACE, UPDATE_LISTING, TOGGLE_DETAILS } from './actions';

let listingIndex = 1;

export const rejectListing = (listing) => ({
  type: REJECT_PLACE,
  idx: listingIndex++,
  listing
})

export const updateListing = (listing) => ({
  type: UPDATE_LISTING,
  listing
})

export const toggleDetails = () => ({
  type: TOGGLE_DETAILS
})

export const addToBlacklist = (listing, user) => (
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

export const addToWishlist = (listing, user) => (
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

export const addToVisited = (listing, user) => (
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



