import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App.jsx';
import Search from './components/Search.jsx';
import Recommend from './components/Recommend.jsx';
import Navbar from './containers/Navbar.jsx';

const Dog = () => {
  return <div><img height={200} width={300} src="http://i2.kym-cdn.com/photos/images/newsfeed/000/217/040/48ACD.png" /></div>;
}

export default (
  <Route path='/' component={App}>
    <Route path="search" component={Search} />
    <Route path="recommend" component={Recommend} />
    <Route path="dog" component={Dog} />
  </Route>
);
