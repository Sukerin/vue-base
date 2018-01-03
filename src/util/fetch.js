/**
 * Created by dongrui3 on 2017/10/24.
 *
 */
import axios from 'axios'
import qs from 'qs'

axios.defaults.timeout = 2000                       // 响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencodedcharset=UTF-8'           // 配置请求头
// axios.defaults.baseURL = '你的接口地址'   //配置接口地址
// POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
  // 在发送请求之前做某件事
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  return config
}, function (error) {
  return Promise.reject(error)
})
// 返回状态判断(添加响应拦截器)
axios.interceptors.response.use(function (res) {
  // 对响应数据做些事
  if (!res.data) {
    // _.toast(res.data.msg)
    return Promise.reject(res)
  } else {
    return Promise.resolve(res)
  }
  // return res
}, function (error) {
  return Promise.reject(error)
})

const fetch = {
  byPost: function (url, params) {
    return new Promise((resolve, reject) => {
      axios.post(url, params).then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      }).catch((error) => {
        reject(error)
      })
    })
  },
  byGet: function (url, query) {
    return new Promise((resolve, reject) => {
      axios.get(url, {
        params: query
      }).then(response => {
        resolve(response.data)
      }).catch((error) => {
        reject(error)
      })
    })
  }
}

export default fetch
