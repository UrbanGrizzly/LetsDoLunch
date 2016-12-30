import { combineReducers } from 'redux';
import SinglePlaceReducer from './single_place_reducer.js';
import preferenceReducer from './preference_reducer'

const rootReducer = combineReducers({
  singleListing: SinglePlaceReducer,
  preference: preferenceReducer
});

export default rootReducer;
