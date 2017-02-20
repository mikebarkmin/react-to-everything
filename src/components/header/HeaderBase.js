import React from 'react';
import AppBar from 'material-ui/AppBar';
import { connect } from 'react-redux';

import { toggleDrawer } from '../../actions/navigationActions';

@connect()
export default class Base extends React.Component {
  handleToggle() {
    this.props.dispatch(toggleDrawer());
  }
  render() {
    return (
      <AppBar
          onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
          title="ReactToEverything"
      />
    );
  }
}
