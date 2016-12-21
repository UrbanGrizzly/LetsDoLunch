import React from 'react';
import ReactDOM from 'react-dom';

import Test from './navbar/navbar';

const App = () => {
  return <div> <Test /></div>
};

ReactDOM.render(<App />, document.querySelector('.container'));