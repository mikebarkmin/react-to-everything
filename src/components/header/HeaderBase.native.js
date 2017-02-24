import React from 'react';
import { Header, Title, Body } from 'native-base';

import I18n from '../../locales/I18n';

export default class NativeBase extends React.Component {
  render() {
    return (
      <Header>
        <Body>
          <Title>
            {I18n.t('reactToEverything')}
          </Title>
        </Body>
      </Header>
    );
  }
}
