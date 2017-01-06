import React, { Component } from 'react';
//start of testing feel lucky component
import fetch from 'isomorphic-fetch'
import LoginButton from '../components/LoginButton.jsx'
import { connect } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { Button } from 'react-bootstrap';

import Lucky from '../components/Preference_subcomponent/Lucky.jsx';

import { fetchPlaces, receivePlaces, filterPlaces } from '../actions/action_get_places';

const Navbar = ({feelingLucky}) => {
  return (
      <nav className="navbar navbar-default">

      <div className="col-md-1"><Lucky feelingLucky={feelingLucky}/></div>


        <ul>
          <li><LoginButton /></li>
          <li><a href="/dog">Dog</a></li>
          <li><a href="/recommend">Recommend</a></li>
          <li><a href="/search">Search</a></li>
        </ul>
      </nav>
    );
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
  }
})

export default connect(
  null,
  mapDispatchToProps
)(Navbar)

