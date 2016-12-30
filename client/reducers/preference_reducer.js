const cuisines = ['Chinese', 'Japanese', 'Italian', 'Spanish', 'Thai', 'Mexican', 'Mediterranean', 'Indian', 'Greek', 'French', 'Caribbean'].sort();

let cuisineInitialStatus = {};
cuisines.map((item,index) => {
  cuisineInitialStatus[item] = false;
});

const neighborhoods = ['Castro District', 'Chinatown', 'Cole Valley', 'Financial District', 'Fisherman\'s Wharf', 'Haight-Ashbury', 'Hayes Valley', 'Japantown', 'Lower Haight', 'Marina', 'Mission District', 'Nob Hill', 'Noe Valley', 'North Beach', 'Pacific Heights', 'Panhandle', 'Potrero Hill', 'Presidio', 'Richmond', 'Russian Hill', 'Sea Cliff', 'Sixth Street', 'SOMA', 'Sunset', 'Tenderloin', 'Union Square', 'Upper Market'].sort();

let neighborhoodInitialStatus = {};
neighborhoods.map((item,index) => {
  neighborhoodInitialStatus[item] = false;
});


const initialPrefState = {
  cuisineStatus: cuisineInitialStatus,
  neighborhoodStatus: neighborhoodInitialStatus,
  timeStatus: {
    'Now': false,
    'Later': false
  },
  priceStatus: {
    '$': false,
    '$$': false,
    '$$$': false,
    '$$$$': false,
  }
}

export default (state = initialPrefState, action) => {
  switch(action.type) {
    case 'CHANGE_TIME':
      let allTStatus = state.timeStatus;
      let currTStatus = state.timeStatus[action.timeChosen];
      allTStatus[action.timeChosen] = !currTStatus;
      return {
        ...state,
        timeStatus: allTStatus
      };
      //... only works for [], not {} in ES6. but in ES7 in works for both.
      //in order to get around that, we can do either the below 3-line code using Object.assign(), or install babel-plugin-transform-object-rest-spread, and add a plugin in webpack config.
      //http://redux.js.org/docs/recipes/UsingObjectSpreadOperator.html

      // const newState = Object.assign({}, state)
      // newState.timeStatus = allTStatus;
      // return newState;

    case 'CHANGE_PRICE':
      let allPStatus = state.priceStatus;
      let currPStatus = state.priceStatus[action.priceChosen];
      allPStatus[action.priceChosen] = !currPStatus;
      return {
        ...state,
        priceStatus: allPStatus
      };

    case 'CHANGE_NEIGHBORHOOD':
      let allNStatus = state.neighborhoodStatus;
      let currNStatus = state.neighborhoodStatus[action.neighborhoodChosen];
      allNStatus[action.neighborhoodChosen] = !currNStatus;
      return {
        ...state,
        neighborhoodStatus: allNStatus
      };

    case 'CHANGE_CUISINE':
      let allCStatus = state.cuisineStatus;
      let currCStatus = state.cuisineStatus[action.cuisineChosen];
      allCStatus[action.cuisineChosen]=!currCStatus;
      return {
        ...state,
        cuisineStatus: allCStatus
      };

    default:
      return state;
  }
}

