import fetch from 'isomorphic-fetch'
import { connect } from 'react-redux';
import { fetchPlaces, receivePlaces, filterPlaces } from '../actions/action_get_places';
import FacebookLogin from '../actions/action_login'
import Navigationbar from '../components/NavBar.jsx'




const mapDispatchToProps = (dispatch) => ({
  feelingLucky: () => {
    dispatch(fetchPlaces(''))
    return fetch('/api/places?term=gold+club+entertainment&location=soma+san+francisco')
    .then(response => response.json())
    .then(json => {
      dispatch(receivePlaces('', json));
      browserHistory.push('/recommend')
    })
  },
  facebookLoginButton: () => {dispatch(FacebookLogin)}
})

export default connect(
  null,
  mapDispatchToProps
)(Navigationbar)

