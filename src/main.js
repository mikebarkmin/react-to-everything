import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './components/app/App';

// CSS
// require('normalize.css');
// require('./styles/main.css');

const content = document.getElementById('content');

ReactDOM.render((
  <Router history={hashHistory}>
    <Route
        component={App}
        path="/"
    />
  </Router>
), content);
