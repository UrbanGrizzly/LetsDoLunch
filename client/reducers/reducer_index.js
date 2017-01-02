import { combineReducers } from 'redux';
import SinglePlaceReducer from './single_place_reducer.js';
import preferenceReducer from './preference_reducer';
import mapReducer from './map_reducer';
import preferenceReducer from './preference_reducer';
import RejectPlacesReducer from './rejected_places_reducer';
import GetPlacesReducer from './get_places_reducer';

const rootReducer = combineReducers({
  preference: preferenceReducer,
  map: mapReducer,
  rejectedList: RejectPlacesReducer,
  currentPlacesList: GetPlacesReducer
});

export default rootReducer;
