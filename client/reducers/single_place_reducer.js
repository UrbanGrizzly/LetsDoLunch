import request from 'superagent';

export default (state, action) => {
  //will need to set this with an action creator
  //for now, dummy data
  const data = {
    "geometry": {
      "location": {
        "lat": 37.7873946,
        "lng": -122.4220479
      },
      "viewport": {
        "northeast": {
          "lat": 37.7874309,
          "lng": -122.42168865
        },
        "southwest": {
          "lat": 37.7873825,
          "lng": -122.42216765
        }
      }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
    "id": "d5cfadfbaf792ef2d397d90fb83fc1a3683f2033",
    "name": "Alborz Restaurant",
    "opening_hours": {
      "open_now": true,
      "weekday_text": []
    },
    "photos": [
      {
        "height": 1536,
        "html_attributions": [
          "<a href=\"https://maps.google.com/maps/contrib/107602328530544278868/photos\">Raymond Hamilton</a>"
        ],
        "photo_reference": "CoQBdwAAADGJGI30EtiW06OcXXFQa9Z5xhJygLTefVUUlSYShxjZ5IRFPs52Rru-pKNa-8poDV-cdVcCakMxO1C0wGIJZUnpc2LD2q2CSroKcMy3QuLFJ1No0eKN3_CE_c6gxQx3Ply1zk7Khb1W-LamKcyJoP8i2BIdaeX-r0lWX52v8boqEhCkSAGe8Pi9_1Hy-uzNT7-qGhQQ_JOEVGNrR12N69WfkA6wNLVRBw",
        "width": 2048
      }
    ],
    "place_id": "ChIJXTmvupWAhYARo8OUHkPsgPk",
    "price_level": 2,
    "rating": 3.6,
    "reference": "CmRSAAAAcDNK2SusoZYsQFzM6R1tpFZwvUA84aWuWrheByZcezvmv8H22Ihxo3FIdIOK5yJnGswKYAOd49BFo83JvZiWZXTMyOAaiYasUU-_N4DjZ79iQYEIUFDzP6mCAOsEniPcEhDFHtBDOaMIeKA7yuF5Yl-4GhR7e940VWDwQ6bREFVDujD57N1XxQ",
    "scope": "GOOGLE",
    "types": [
      "restaurant",
      "food",
      "point_of_interest",
      "establishment"
    ],
    "vicinity": "1245 Van Ness Avenue, San Francisco"
  };


  return data;
}

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

