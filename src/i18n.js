import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
// const resources = {
//  tr: {
//   translation: {
//    welcome: 'Hoşgeldin!',
//    Price: 'Fiyat'
//   }
//  },
//  en: {
//   translation: {
//    welcome: 'Welcome!',
//    Price: 'Price'

//   }
//  }
// }

i18n
 .use(initReactI18next)
 .use(Backend)
 .init({
  lng: 'en',
  // resources
 })

export default i18n;