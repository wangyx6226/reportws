/* 
  url config
*/
export const BASEURL = '/ReportWS'
const API = {
  login: '/system/user/login.do',
  logout: '/system/user/logout.do',
  
  channelList: '/system/getchannel.do',
  cpList: '/system/getcp.do',
}

const exportApi = {

}

export function $UConfApi(name) {
  if(API[name]) {
    return `${BASEURL}${API[name]}`
  }
  return
}

export function $UConfUrl(path) {
  //处理传进来的url
  // path = `/${path.replace(/^\/ReportWS/,'').replace(/^\//),''}`
  //返回base+path
  return BASEURL + path
}

export function $UConfExpApi(name) {
  if(exportAPI[name]) {
    return `${BASEURL}${exportApi[name]}`
  }
  return ''
}

