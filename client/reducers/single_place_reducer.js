import request from 'superagent';
import sampleData from '../examplePlaceData';

const data = sampleData.businesses[0]


export default (state = data, action) => {
  switch(action.type) {
    case 'REJECT_PLACE':
    return object.assign({}, state, {
      singleListing: sampleData.businesses[1]
    });
  
  default:
    return state;
  };
}








//------------currently not using this!--------------------

//must call google's place photo API to get photos
//since that is a part of single rec state and triggered by same even, made sense to do it here
function getPhoto(photoReference, data) {
  request
    .get('/api/photo')
    .query({photoreference: photoReference})
    .end(function(err, photo) {
      if(err) {
        console.log('Error getting photo from google', err);
      }
      console.log(photo);
    });
}

