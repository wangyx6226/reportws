/*

  国际化

*/
import Vue from 'vue'
import VueI18n from 'vue-i18n';
import languageZh from './languageZh'
import languageEn from './languageEn'
import { $UGetCacheItem, LANGRAGE_KEY } from '../utils-storage'

Vue.use(VueI18n)

let i18n = new VueI18n({
  locale: $UGetCacheItem(LANGRAGE_KEY) || 'CN', //语言标识
  messages: {
    'CN': languageZh,
    'EN': languageEn
  }
})

export default i18n