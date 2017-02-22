import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Toggle from 'material-ui/Toggle';

export default class Base extends React.Component {
  render() {
    return (
      <div>
        <List>
          <ListItem
              primaryText="Settings 1"
              rightToggle={<Toggle />}
          />
          <ListItem
              primaryText="Settings 2"
              rightToggle={<Toggle />}
          />
        </List>
      </div>
    );
  }
}
