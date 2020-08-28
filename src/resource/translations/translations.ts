import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { en, pl } from './languages';

i18n
  .use(LanguageDetector)
  .init({
    resources: {
      ...en,
      ...pl,
    },
    fallbackLng: 'en',

    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: false,

    interpolation: {
      escapeValue: false,
      formatSeparator: ',',
    },

    react: {
      wait: true,
    },
  })
  .catch((e: string) => {
    console.error(e);
  });

export default i18n;
