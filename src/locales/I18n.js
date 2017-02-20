import I18n from 'i18n-js';
import de from './locales/de';
import en from './locales/en';

I18n.fallbacks = true;

I18n.translations = {
  en,
  de,
};

export default I18n;
