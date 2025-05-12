import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import translationEN from './locales/en/translation.json'
import translationAR from './locales/ar/translation.json'

const resources = {
  en: { translation: translationEN },
  ar: { translation: translationAR }
}

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('language') || 'en',
  fallbackLng: 'en',
  debug: true,
  interpolation: { escapeValue: false }
})

i18n.on('languageChanged', lng => {
  document.documentElement.setAttribute('dir', lng === 'ar' ? 'rtl' : 'ltr')
})

const savedLanguage = localStorage.getItem('language')
document.documentElement.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr'
export default i18n
