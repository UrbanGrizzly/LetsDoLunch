
let listingIndex = 1;

const rejectListing = (listing) => ({
  type: 'REJECT_PLACE',
  idx: listingIndex++,
  listing
});

export default rejectListing;
