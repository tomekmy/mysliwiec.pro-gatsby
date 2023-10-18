import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Polish translation file
import { pl } from './lang/pl';
// English translation file
import { en } from './lang/en';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'pl',
    resources: {
      en: {
        translation: en,
      },
      pl: {
        translation: pl,
      },
    },
    react: {
      wait: true,
    },
  });

// You can change language by e.g. onClick={() => i18next.changeLanguage('en')}

export default i18n;
