
let listingIndex = 1;

export const rejectListing = (listing) => ({
  type: 'REJECT_PLACE',
  idx: listingIndex++,
  listing
});

export const toggleDetail = () => ({
  type: 'SHOW_DETAIL'
})


