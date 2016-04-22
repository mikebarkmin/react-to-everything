import I18n from 'react-native-i18n';
import de from './locales/de';
import en from './locales/en';

I18n.fallbacks = true;

I18n.translations = {
  en,
  de,
};

export default I18n;
