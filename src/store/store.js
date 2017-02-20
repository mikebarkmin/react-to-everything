import { applyMiddleware, createStore, combineReducers } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import userReducer from '../reducers/userReducer';

const reducers = combineReducers({
  user: userReducer,
});

const middleware = applyMiddleware(promise(), thunk, logger());

const store = createStore(reducers, middleware);

export default store;
