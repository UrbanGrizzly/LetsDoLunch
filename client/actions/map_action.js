import { SET_MAP, CHANGE_BOUNDS, CHANGE_ORIGIN, CHANGE_HOME } from './actions';

//this is when the user clicks the button that says the map is set
export const setMap = (mapClass, mapSet) => ({
  type: SET_MAP,
  mapClass,
  mapSet
})

export const changeBounds = (newBounds) => ({
  type: CHANGE_BOUNDS,
  newBounds
})

export const changeOrigin = (newOrigin) => ({
  type:CHANGE_ORIGIN,
  newOrigin
})

export const changeHome = (newHome) => ({
  type:CHANGE_HOME,
  newHome
})
