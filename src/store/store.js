import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import navigationReducer from '../reducers/navigationReducer';
import settingsReducer from '../reducers/settingsReducer';

const reducers = combineReducers({
  navigation: navigationReducer,
  settings: settingsReducer,
});

const middleware = applyMiddleware(promise(), thunk, logger());

/* eslint-disable no-underscore-dangle */
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ?
  window.__REDUX_DEVTOOLS_EXTENSION__() : f => f;

const store = createStore(
  reducers,
  compose(middleware, devTools),
);

export default store;
