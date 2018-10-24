import storage from 'good-storage'

const LANGUAGE_KEY = '_lang_'

export function loadLanguage() {
  return storage.get(LANGUAGE_KEY, '')
}

export function saveLanguage(lang) {
  storage.set(LANGUAGE_KEY, lang)
  return lang
}

export function $UGetLocalStorage(key, defaultVal = '') {
  return storage.get(key, defaultVal)
}
