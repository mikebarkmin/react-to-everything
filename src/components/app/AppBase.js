import React from 'react';
import I18n from '../../config/I18n';

export default class Base extends React.Component {
  render() {
    return (
      <div className="main">
        <p>
          {I18n.t('greeting')} Welcome to React to everything!
        </p>
        <p>
          To get started, edit main.js.
        </p>
      </div>
    );
  }
}
