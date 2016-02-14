import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';
import configureStore from './store/configureStore';
import 'bootswatch/simplex/bootstrap.css';

const store = configureStore(window.initialState);

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('body')
);
