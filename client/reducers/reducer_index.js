import { combineReducers } from 'redux';
import SinglePlaceReducer from './single_place_reducer'

const rootReducer = combineReducers({
  singleListing = SinglePlaceReducer;
});

export default rootReducer;