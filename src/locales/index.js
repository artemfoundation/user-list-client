import i18n from 'i18next';
import { initReactI18next } from 'react-i18next'
import ru from './ru.json'
import en from './en.json'

i18n
  .use(initReactI18next)
  .init({
    lng: 'ru',
    fallbackLng: 'en',
    debug: false,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    react: {
      useSuspense: false
    },

    resources: {
        ru: {
          translation: ru
        },
        en: {
          translation: en
        }
    }
  });


export default i18n;