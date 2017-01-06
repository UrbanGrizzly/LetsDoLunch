import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import routes from './Routes.jsx';
import reducers from './reducers/reducer_index';
import thunkMiddleware from 'redux-thunk';

const appStore = createStore(reducers,
  applyMiddleware(thunkMiddleware)
);

ReactDOM.render(
  <Provider store={appStore}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));

