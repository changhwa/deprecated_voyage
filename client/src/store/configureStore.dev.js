import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistory } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/';

const finalCreateStore = compose(
  applyMiddleware(thunk, syncHistory(browserHistory)),
  window.devToolsExtension ? window.devToolsExtension() : undefined
)(createStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);
  if (module.hot) {
    module.hot.accept('../reducers/', () =>
      store.replaceReducer(require('../reducers/').default)
    );
  }
  return store;
}
