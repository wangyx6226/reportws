import axios from 'axios'
import { $UConfApi } from './config'

//正常接口
export function $UPost(type, params = '') {
  return axios.post($UConfApi('login'), params).then( response => {
    return response.data
  }).catch( err => {
    console.log(err)
  })
}

export function $UGet(type, params = '') { 
  console.log($UConfApi(type))
  return axios.get($UConfApi(type), params).then( response => {
    return response
  }).catch( err => {
    console.log(err)
  })
}
//导出接口
