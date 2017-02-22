import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/app/App';
import store from './store/store';

const content = window.document.getElementById('content');

export default render((
  <Provider store={store}>
    <App />
  </Provider>
), content);
