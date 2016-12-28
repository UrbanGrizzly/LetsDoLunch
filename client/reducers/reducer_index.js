import { combineReducers } from 'redux';
import SinglePlaceReducer from './single_place_reducer.js';

const rootReducer = combineReducers({
  singleListing: SinglePlaceReducer
});

export default rootReducer;
