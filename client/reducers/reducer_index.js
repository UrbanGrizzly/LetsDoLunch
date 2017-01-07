import { combineReducers } from 'redux';
import preferenceReducer from './preference_reducer';
import mapReducer from './map_reducer';
import RejectPlacesReducer from './rejected_places_reducer';
import GetPlacesReducer from './get_places_reducer';
import UserPreferenceReducer from './user_preference_reducer';

const rootReducer = combineReducers({
  preference: preferenceReducer,
  map: mapReducer,
  rejectedList: RejectPlacesReducer,
  currentPlacesList: GetPlacesReducer,
  userPreferences: UserPreferenceReducer
});

export default rootReducer;
