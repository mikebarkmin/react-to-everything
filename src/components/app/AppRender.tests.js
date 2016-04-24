import Render from './AppRender';

import { describe, it } from 'mocha';
import { expect } from 'chai';
import React from 'react';
import { mount } from 'enzyme';

describe('AppRender', () => {
  describe('Desktop', () => {
    it('Component is rendered', () => {
      expect(mount(<Render />).find('.main').length).to.equal(1);
    });
  });
});
