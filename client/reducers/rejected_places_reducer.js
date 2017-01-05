
function addToRejectList (state = [], action) {
  switch(action.type) {
    case 'REJECT_PLACE':
      return [
          ...state,
          action.listing
        ]
    default:
      return state;
  }
}