import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/translation.en.json'
import ua from './locales/ua/translation.ua.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en,ua,
    },
    lng: "en",

    keySeparator: false,

    interpolation: {
      escapeValue: false,
    }
  }); 
export default i18n;