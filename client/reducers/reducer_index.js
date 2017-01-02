import { combineReducers } from 'redux';
<<<<<<< HEAD
import SinglePlaceReducer from './single_place_reducer.js';
import preferenceReducer from './preference_reducer';
import mapReducer from './map_reducer';

=======
import SinglePlaceReducer from './single_place_reducer';
import preferenceReducer from './preference_reducer';
import RejectPlacesReducer from './rejected_places_reducer';
import GetPlacesReducer from './get_places_reducer';
>>>>>>> [MODIFY](Client): Frame action creators and reducers for yelp API request {VE}

const rootReducer = combineReducers({
  singleListing: SinglePlaceReducer,
  preference: preferenceReducer,
  map: mapReducer,
  rejectedList: RejectPlacesReducer,
  currentPlacesList: GetPlacesReducer
});

export default rootReducer;
