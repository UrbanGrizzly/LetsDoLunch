import { REJECT_PLACE, BAN_PLACE, DEFER_PLACE, UPDATE_LISTING, TOGGLE_DETAILS } from './actions';

let listingIndex = 1;

export const rejectListing = (listing) => ({
  type: REJECT_PLACE,
  idx: listingIndex++,
  listing
})

export const banListing = (listing) => ({
  type: BAN_PLACE,
  idx: listingIndex++,
  listing
})

export const deferListing = (listing) => ({
  type: BAN_PLACE,
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
