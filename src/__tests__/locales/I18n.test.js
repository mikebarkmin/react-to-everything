import I18n from '../../locales/I18n';

describe('i18n', () => {
  describe('fallbacks', () => {
    it('should be set to true', () => {
      expect(I18n.fallbacks).toBe(true);
    });
  });
  describe('translation', () => {
    it('de - should translate greeting', () => {
      expect(I18n.t('greeting', { locale: 'de' })).toBe('Hallo!');
    });
    it('en - should translate greeting', () => {
      expect(I18n.t('greeting', { locale: 'en' })).toBe('Hi!');
    });
    it('fr - should translate greeting (fallback)', () => {
      expect(I18n.t('greeting', { locale: 'fr' })).toBe('Hi!');
    });
  });
});
