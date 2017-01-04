const initialMapState = {
  zoom: 16,
  center: {lat: 37.787596, lng: -122.4001153},
  origin: {lat: 37.787596, lng: -122.4001153}
};

export default (state = initialMapState, action) => {
  switch(action.type) {
    case 'CHANGE_BOUNDS':
      return {...state, zoom: action.newBounds.zoom, center: action.newBounds.center};
    case 'CHANGE_ORIGIN':
      return {...state, origin: action.newOrigin};
    default:
      return state;
  }
}
