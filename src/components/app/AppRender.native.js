import React, {
  StyleSheet,
  View,
  Platform,
  Text,
} from 'react-native';

import I18n from '../../config/i18n';

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

export default class NativeRender extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {I18n.t('greeting')}
        </Text>
        <Text style={styles.instructions}>
          To get started, edit main.{Platform.OS}.js
        </Text>
      </View>
    );
  }
}
