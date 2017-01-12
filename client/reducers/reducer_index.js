import { combineReducers } from 'redux';
import { reducer as modal } from 'redux-modal'
import mapReducer from './map_reducer';
import RejectPlacesReducer from './rejected_places_reducer';
import GetPlacesReducer from './get_places_reducer';
import UserPreferenceReducer from './user_preference_reducer';
import AuthReducer from './auth_reducer';

const rootReducer = combineReducers({
  map: mapReducer,
  rejectedList: RejectPlacesReducer,
  currentPlacesList: GetPlacesReducer,
  userPreferences: UserPreferenceReducer,
  user: AuthReducer,
  modal
});

export default rootReducer;
