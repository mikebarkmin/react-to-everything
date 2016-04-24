import I18n from './I18n';

import { describe, it } from 'mocha';
import assert from 'assert';

describe('i18n', () => {
  describe('fallbacks', () => {
    it('should be set to true', () => {
      assert.equal(true, I18n.fallbacks);
    });
  });
  describe('translation', () => {
    it('de - should translate greeting', () => {
      assert.equal('Hallo!', I18n.t('greeting', { locale: 'de' }));
    });
    it('en - should translate greeting', () => {
      assert.equal('Hi!', I18n.t('greeting', { locale: 'en' }));
    });
    it('fr - should translate greeting (fallback)', () => {
      assert.equal('Hi!', I18n.t('greeting', { locale: 'fr' }));
    });
  });
});
