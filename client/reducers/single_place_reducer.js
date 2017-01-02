import request from 'superagent';
import sampleData from '../examplePlaceData';

//Right now, this is just going through the array of dummy data in order
const initialSingleListingState = sampleData.businesses[0]

//starting state will be {}, but dummy data for now
export default (state = initialSingleListingState, action) => {
  switch(action.type) {
    case 'REJECT_PLACE':
      return sampleData.businesses[action.idx] //there's no error handling if we hit the end of the list!

    case 'SUBMIT_PREFERENCES':
      return sampleData.businesses[0]

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

