import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, hashHistory } from 'react-router';
import routes from './Routes.jsx';
import reducers from './reducers/reducer_index';

const appStore = createStore(reducers);

ReactDOM.render(
  <Provider store={appStore}>
    <Router history={hashHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));
  