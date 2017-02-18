import React from 'react';
import I18n from '../../config/I18n';

export default class Base extends React.Component {
  constructor() {
    super();
    this.name = 'test';
  }
  render() {
    return (
      <div className="main">
        <p>
          {this.name}
          {I18n.t('greeting')} Welcome to React Native!
        </p>
        <p>
          To get started, edit main.js.
        </p>
      </div>
    );
  }
}
