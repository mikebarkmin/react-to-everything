import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionSettings from 'material-ui/svg-icons/action/settings';

import { closeDrawer } from '../../actions/navigationActions';

export default class Base extends React.Component {
  goToHome() {
    this.props.dispatch(closeDrawer());
  }
  goToSettings() {
    this.props.dispatch(closeDrawer());
  }
  render() {
    return (
      <Drawer
          docked={false}
          open={this.props.navigation.openDrawer}
      >
        <MenuItem
            leftIcon={<ActionHome />}
            onTouchTap={this.goToHome}
            primaryText="Home"
        />
        <MenuItem
            leftIcon={<ActionSettings />}
            onTouchTap={this.goToSettings}
            primaryText="Settings"
        />
      </Drawer>
    );
  }
}

Base.propTypes = {
  dispatch: React.PropTypes.func,
  navigation: React.PropTypes.object,
  router: React.PropTypes.object,
};
