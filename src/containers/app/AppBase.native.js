import React from 'react';
import { LayoutAnimation } from 'react-native';
import { Container, Content } from 'native-base';

import Header from '../../components/header/Header';
import Navigation from '../../components/navigation/Navigation';

export default class NativeBase extends React.Component {
  render() {
    LayoutAnimation.easeInEaseOut();
    return (
      <Container>
        <Header />
          <Content>
            {this.renderRoute()}
          </Content>
        <Navigation/>
      </Container>
    );
  }
}
