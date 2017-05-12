import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (reducer) => {
  return createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk, logger))
    );
}

export default configureStore;