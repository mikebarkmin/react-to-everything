import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Toggle from 'material-ui/Toggle';

import I18n from '../../locales/I18n';

export default class Base extends React.Component {
  render() {
    return (
      <div>
        <List>
          <ListItem
              primaryText={I18n.t('settings.settings1')}
              rightToggle={
                <Toggle
                    onToggle={(e, value) => this.onSettings1Change(value)}
                    value={this.props.settings.settings1}
                />
              }
          />
          <ListItem
              primaryText={I18n.t('settings.settings2')}
              rightToggle={
                <Toggle
                    onToggle={(e, value) => this.onSettings2Change(value)}
                    value={this.props.settings.settings2}
                />
              }
          />
        </List>
      </div>
    );
  }
}
