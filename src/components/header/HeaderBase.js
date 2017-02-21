import React from 'react';
import AppBar from 'material-ui/AppBar';
import { connect } from 'react-redux';

import { toggleDrawer } from '../../actions/navigationActions';

@connect()
export default class Base extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle() {
    this.props.dispatch(toggleDrawer());
  }
  render() {
    return (
      <AppBar
          onLeftIconButtonTouchTap={this.handleToggle}
          title="ReactToEverything"
      />
    );
  }
}

Base.propTypes = {
  dispatch: React.PropTypes.func,
};
