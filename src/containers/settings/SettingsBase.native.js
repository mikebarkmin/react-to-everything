import React from 'react';
import { Content, Text, ListItem, Left, Right, Switch } from 'native-base';

import I18n from '../../locales/I18n';

export default class NativeBase extends React.Component {
  render() {
    return (
      <Content>
        <ListItem>
          <Left><Text>{I18n.t('settings.settings1')}</Text></Left>
          <Right>
            <Switch
                onValueChange={value => this.onSettings1Change(value)}
                value={this.props.settings.settings1}
            />
          </Right>
        </ListItem>
        <ListItem>
          <Left><Text>{I18n.t('settings.settings2')}</Text></Left>
          <Right>
            <Switch
                onValueChange={value => this.onSettings2Change(value)}
                value={this.props.settings.settings2}
            />
          </Right>
        </ListItem>
      </Content>
    );
  }
}
