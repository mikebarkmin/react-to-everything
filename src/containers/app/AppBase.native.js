import React from 'react';
import { LayoutAnimation } from 'react-native';
import { getTheme, StyleProvider, Container, Content } from 'native-base';

import theme from '../../theme/theme.native';
import Header from '../../components/header/Header';
import Navigation from '../../components/navigation/Navigation';

export default class NativeBase extends React.Component {
  render() {
    LayoutAnimation.easeInEaseOut();
    return (
      <StyleProvider style={getTheme(theme)}>
        <Container>
          <Header />
            <Content>
              {this.renderRoute()}
            </Content>
          <Navigation/>
        </Container>
      </StyleProvider>
    );
  }
}
