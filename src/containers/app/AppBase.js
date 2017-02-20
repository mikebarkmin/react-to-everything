import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Header from '../../components/header/Header';
import Navigation from '../../components/navigation/Navigation';

injectTapEventPlugin();

export default class Base extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header />
          <Navigation />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

Base.propTypes = {
  children: React.PropTypes.element,
};
