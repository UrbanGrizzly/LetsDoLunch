const initialMapState = {
  zoom: 16,
  center: {lat: 37.787596, lng: -122.4001153},
  origin: {lat: 37.787596, lng: -122.4001153}
};

export default (state = initialMapState, action) => {
  switch(action.type) {
    case 'CHANGE_ZOOM':
      return {...state, zoom: action.newZoom};
    case 'CHANGE_CENTER':
      return {...state, center: action.newCenter};
    case 'CHANGE_ORIGIN':
      return {...state, origin: action.newOrigin};
    default:
      return state;
  }
}
