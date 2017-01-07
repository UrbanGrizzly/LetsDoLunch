import fetch from 'isomorphic-fetch'
import { connect } from 'react-redux';
import { fetchPlaces, receivePlaces, filterPlaces } from '../actions/action_get_places';
import { checkAuth } from '../actions/action_authentication'
import Navigationbar from '../components/NavBar_Component.jsx'




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
  checkAuth: () => {dispatch(checkAuth())}
})

export default connect(
  null,
  mapDispatchToProps
)(Navigationbar)

