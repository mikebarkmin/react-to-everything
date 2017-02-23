import React from 'react';
import { FooterTab, Footer, Button, Text, Icon } from 'native-base';

import I18n from '../../locales/I18n';

export default class NativeBase extends React.Component {
  render() {
    const path = this.props.navigation.routes.slice(-1)[0].path;
    return (
      <Footer>
        <FooterTab>
          <Button
              active={(path === 'home')}
              onPress={this.goToHome}
          >
            <Icon name="home" />
            <Text>{I18n.t('tabs.home')}</Text>
          </Button>
          <Button
              active={(path === 'settings')}
              onPress={this.goToSettings}
          >
            <Icon name="settings" />
            <Text>{I18n.t('tabs.settings')}</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
