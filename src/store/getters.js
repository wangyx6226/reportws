
const getters = {
  userName: state => state.userInfo.username || '',
  langrage: state => state.langrage,
  userInfo: state => state.userInfo,
  cpList:  state => state.cpList,
  channelList:  state => state.channelList,
  spList:  state => state.spList,
  emails:  state => state.emails,
  accessRouters: state => state.permission.accessRouters,
  accessTabs: state => state.permission.accessTabs,
}

export default getters