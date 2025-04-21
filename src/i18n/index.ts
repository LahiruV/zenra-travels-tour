import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { en } from './locales/en/index';
import { ru } from './locales/ru/index';

const russianCountries = ['RU', 'BY', 'KZ', 'KG', 'TJ', 'UZ'];

const languageDetector = new LanguageDetector();
languageDetector.addDetector({
  name: 'countryBasedDetector',
  lookup() {
    const countryCode = navigator.language.split('-')[1]?.toUpperCase();
    return russianCountries.includes(countryCode) ? 'ru' : 'en';
  },
  cacheUserLanguage(lng) {
    localStorage.setItem('i18nextLng', lng);
  }
});

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ru: { translation: ru }
    },
    detection: {
      order: ['countryBasedDetector', 'localStorage', 'navigator'],
      caches: ['localStorage']
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;