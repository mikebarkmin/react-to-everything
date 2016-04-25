import React from 'react';
import I18n from '../../config/I18n';

export default function () {
  return (
    <div className="main">
      <p>
        {I18n.t('greeting')} Welcome to React Native!
      </p>
      <p>
        To get started, edit main.js.
      </p>
    </div>
  );
}
