import { 
  $USetCacheItem,
  $URemoveCacheAll,
  LANGRAGE_KEY,
  USER_INFO_KEY
} from '../common/utils-storage'

const actions = {

  setLangrage({commit, state}, lang) {
    if(state.langrage === lang) return
    //修改state.langrage
    commit('SET_LANGRAGE', lang)
    //修改session.lang
    $USetCacheItem(LANGRAGE_KEY, lang)
  },

  setUserInfo({commit}, userInfo) {
    commit('SET_USER_INFO', userInfo)
    $USetCacheItem(USER_INFO_KEY, userInfo)
  },

  logOut({commit}) {
    //清空state.userinfo
    commit('SET_USER_INFO', null)
    //清空缓存
    $URemoveCacheAll()
  }
}
export default actions