import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Header from '../../components/header/Header';
import Navigation from '../../components/navigation/Navigation';

injectTapEventPlugin();

const styles = {
  content: {
    maxWidth: 800,
    margin: '0 auto',
  },
};

export default class Base extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header />
          <Navigation />
          <div style={styles.content}>
            {this.renderRoute()}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

Base.propTypes = {
  children: React.PropTypes.element,
};
