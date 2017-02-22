import React from 'react';
import { Container, Content } from 'native-base';

import Header from '../../components/header/Header';
import Navigation from '../../components/navigation/Navigation';

export default class NativeBase extends React.Component {
  render() {
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
