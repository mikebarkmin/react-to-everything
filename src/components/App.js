import React, { Component, PropTypes } from 'react-native';

const {
  Platform,
  StyleSheet,
  Text,
  View,
} = React;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const App = ({
  instructions,
}) =>
  <View style={styles.container}>
    <Text style={styles.welcome}>
      Welcome to React Native!
    </Text>
    <Text style={styles.instructions}>
      To get started, edit index.{Platform.OS}.js
    </Text>
    <Text style={styles.instructions}>
      {instructions}
    </Text>
  </View>;

App.propTypes = {
  instructions: PropTypes.string,
};

App.defaultProps = {
  ...Component.defaultProps,
  instructions: 'Usage instructions not provided.',
};

export default App;
