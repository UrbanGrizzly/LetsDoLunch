import { REJECT_PLACE, SHOW_DETAIL, UPDATE_ROUTE_INFO } from './actions';

let listingIndex = 1;

export const rejectListing = (listing) => ({
  type: REJECT_PLACE,
  idx: listingIndex++,
  listing
})

export const updateRouteInfo = (distance, duration) => ({
  type: UPDATE_ROUTE_INFO,
  routeInfo: {distance, duration}
})

export const toggleDetails = () => ({
  type: SHOW_DETAIL
})
