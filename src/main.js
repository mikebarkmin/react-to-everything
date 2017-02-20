import React from 'react';
import { render } from 'react-dom';
import { hashHistory, Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import App from './containers/app/App';
import Home from './containers/home/Home';
import Settings from './containers/settings/Settings';
import store from './store/store';

const content = window.document.getElementById('content');

const history = syncHistoryWithStore(hashHistory, store);

export default render((
  <Provider store={store}>
    <Router history={history} >
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="settings" component={Settings} />
      </Route>
    </Router>
  </Provider>
), content);
