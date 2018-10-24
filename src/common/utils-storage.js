/*
  h5.sessionstorage 存储
*/

const sessionStorage = window.sessionStorage

//keys
export const LANGRAGE_KEY = 'lang'
export const USER_INFO_KEY = 'userinfo'
export const SP_LIST_KEY = 'splist'
export const CP_LIST_KEY = 'cplist'
export const CHANNEL_LIST_KEY = 'channellist'
export const EMAIL_KEY = 'email'


export function $USetCacheItem(key, value) {
  if(!sessionStorage || typeof sessionStorage.setItem != 'function') {
    return false
  }
  if(typeof value == 'object') {
    value = JSON.stringify(value)
  }
  return  sessionStorage.setItem(key, value)
}


export function $UGetCacheItem(key) {
  if (!sessionStorage || typeof sessionStorage.getItem != 'function') {
    return false
  }
  let result = null
  try {
    result = JSON.parse(sessionStorage.getItem(key))
  } catch(e) {
    result = sessionStorage.getItem(key) || null
  }
  return result
}

export function $URemoveCacheItem(key) {
  if(!sessionStorage || typeof sessionStorage.removeItem != 'function') {
    return false
  }
  return sessionStorage.removeItem(key)
}

export function $URemoveCacheAll() {
  if(!sessionStorage || typeof sessionStorage.clear != 'function') {
    console.log(2222)
    return false
  }
  return sessionStorage.clear()
}