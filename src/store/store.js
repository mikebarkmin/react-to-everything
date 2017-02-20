import { applyMiddleware, createStore, combineReducers } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { routerReducer } from 'react-router-redux';


import userReducer from '../reducers/userReducer';
import navigationReducer from '../reducers/navigationReducer';

const reducers = combineReducers({
  user: userReducer,
  navigation: navigationReducer,
  routing: routerReducer,
});

const middleware = applyMiddleware(promise(), thunk, logger());

const store = createStore(reducers, middleware);

export default store;
