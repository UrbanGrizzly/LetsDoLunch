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

export const addToBlacklist = (listing) => (
  dispatch => {
    let listingName = listing.name
    let url = '/db/userblacklist';
    let qs = `?name=${listingName}&username=Valerie`;
    return fetch(url + qs, {
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
    let listingName = listing.name
    let url = '/db/userwishlist';
    let qs = `?name=${listingName}&username=Valerie`;
    return fetch(url + qs, {
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
    let listingName = listing.name
    let url = '/db/uservisited';
    let qs = `?name=${listingName}&username=Valerie`;
    return fetch(url + qs, {
      method: 'POST',
      body: JSON.stringify(listing),
      headers: {'Content-type': 'application/json'},
      credentials: 'same-origin'
    })
    .then(data => console.log('statusCode: ', data.status))
  }
)
