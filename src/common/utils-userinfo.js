/* 
* 用户信息
*/

import {
  $UGetCacheItem,
  $URemoveCacheAll,
  USER_INFO_KEY
} from './utils-storage'

/**
 * 验证用户信息
 * session过期时间:1小时
 */
export function $UserValidate() {
  let userInfo = $UGetCacheItem(USER_INFO_KEY)
  let loginDate = userInfo && (userInfo.logindate || userInfo.loginDate) || ''
  loginDate = loginDate && loginDate.replace(/-/g,'/')
  let logout = !userInfo || !userInfo.userID || !loginDate || (Date.now() - new Date(loginDate) > 3600000)
  if(logout) {
    let 
  }
}