import { combineReducers } from 'redux';
import SinglePlaceReducer from './single_place_reducer.js';
import preferenceReducer from './preference_reducer';
import mapReducer from './map_reducer';


const rootReducer = combineReducers({
  singleListing: SinglePlaceReducer,
  preference: preferenceReducer,
  map: mapReducer
});

export default rootReducer;
