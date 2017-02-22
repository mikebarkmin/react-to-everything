import React from 'react';
import { Header, Title, Body } from 'native-base';

export default class NativeBase extends React.Component {
  render() {
    return (
      <Header>
        <Body>
          <Title>
            React to Everything
          </Title>
        </Body>
      </Header>
    );
  }
}
