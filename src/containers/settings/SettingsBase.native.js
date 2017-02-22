import React from 'react';
import { Content, Text, ListItem, Left, Right, Switch } from 'native-base';

export default class NativeBase extends React.Component {
  render() {
    return (
      <Content>
        <ListItem>
          <Left><Text>Settings 1</Text></Left>
          <Right><Switch /></Right>
        </ListItem>
        <ListItem>
          <Left><Text>Settings 2</Text></Left>
          <Right><Switch /></Right>
        </ListItem>
      </Content>
    );
  }
}
