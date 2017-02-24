import React from 'react';
import { connect } from 'react-redux';
import Base from './AppBase';

import Home from '../home/Home';
import Settings from '../settings/Settings';

export class App extends Base {
  renderRoute() {
    const route = this.props.navigation.routes.slice(-1)[0];
    switch (route.path) {
      case 'home': {
        return (
          <Home />
        );
      }
      case 'settings': {
        return (
          <Settings />
        );
      }
      default: {
        return '';
      }
    }
  }
}

function mapStateToProps(state) {
  return {
    navigation: state.navigation,
  };
}

export default connect(mapStateToProps)(App);
