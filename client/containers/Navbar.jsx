import fetch from 'isomorphic-fetch'
import { connect } from 'react-redux';
import {browserHistory } from 'react-router';
import { fetchPlaces, receivePlaces, filterPlaces } from '../actions/action_get_places';
<<<<<<< HEAD
import { checkAuth, logout } from '../actions/action_authentication'
import Navigationbar from '../components/NavBar_Component.jsx'

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn
  }
=======
import FacebookLogin from '../actions/action_login';

const Navigationbar = ({feelingLucky, facebookLoginButton}) => {
  return (
    <Navbar>
      <Nav>
        <NavItem><Lucky feelingLucky={feelingLucky}/></NavItem>
        <NavItem onClick={()=>browserHistory.push("/search")}>Search</NavItem>
        <NavItem onClick={()=>browserHistory.push("/recommend")}>Recommend</NavItem>
        <NavItem onClick={()=>browserHistory.push("/profile")}>Profile</NavItem>
        <NavItem onClick={()=>browserHistory.push("/dog")}>Dog</NavItem>
        <NavItem><LoginButton onClick={() => browserHistory.push("/login")} /></NavItem>
      </Nav>
    </Navbar>

  );
>>>>>>> rebasing, resolving conflicts
}

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
  checkAuth: () => {dispatch(checkAuth())},
  logout: () => {dispatch(logout())}
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigationbar)

