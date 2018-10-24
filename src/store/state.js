import { $UGetCacheItem, LANGRAGE_KEY } from '../common/utils-storage'

const state =  {
  langrage: $UGetCacheItem(LANGRAGE_KEY) || 'CN',
  userInfo: {
    username: 'super_user',
    userid: 1
  },
  cpList: {},
  channelList:{},
  spList: {},
  emails: []
}

export default state