import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';

import App from './containers/app/App';

export default class Main extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
