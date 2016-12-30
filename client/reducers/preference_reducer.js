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
      // const newState = Object.assign({}, state)
      // newState.timeStatus = allTStatus;
      // return newState;

      //... only works for [], not {} in ES6.
      //in order to get around that, we can do either line 22-24, or install babel-plugin-transform-object-rest-spread, and add a plugin in webpack config.
      //http://redux.js.org/docs/recipes/UsingObjectSpreadOperator.html

      return {
        ...state,
        timeStatus: allTStatus
      }

    default:
      return state;
  }
}

