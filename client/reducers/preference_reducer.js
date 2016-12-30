const initialPrefState = {
  // cuisineStatus: cuisineInitialStatus,
  // neighborhoodStatus: neighborhoodInitialStatus,
  timeStatus: {
    'Now': false,
    'Later': false
  }
  // priceStatus: {
  //   '$': false,
  //   '$$': false,
  //   '$$$': false,
  //   '$$$$': false,
  // }
}


export default (state = initialPrefState, action) => {
  switch(action.type) {
    case 'CHANGE_TIME':
      let allTStatus = state.timeStatus
      let currTStatus = state.timeStatus[action.timeChosen]
      allTStatus[action.timeChosen] = !currTStatus
      const newState = Object.assign({}, state)
      newState.timeStatus = allTStatus;
      return newState;
      // return {
      //   ...state,
      //   timeStatus: allTStatus
      // }
    default:
      return state;
  }
}

