import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import fr from '../lang/fr';
import en from '../lang/en';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
      },
      fr: {
        translation: fr,
      },
    },
    lng: 'fr',
    fallbackLng: 'en',
  });

export default i18n;
