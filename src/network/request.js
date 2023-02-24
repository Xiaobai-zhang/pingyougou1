import axios from 'axios';
import nProgress from 'nprogress';
import "nprogress/nprogress.css";

// 在当前模块引入store
import store from '@/store';

const requests = axios.create({
  baseURL: '/api',
  timeout: 5000
})

requests.interceptors.request.use((config) => {
  nProgress.start()
  // 每次发送网络请求的时候用拦截器把uuid_token加入进去
  if (store.state.detail.uuid_token) {
    config.headers.userTempId = store.state.detail.uuid_token
  }
  if (sessionStorage.getItem('TOKEN')) {
    config.headers.token = sessionStorage.getItem('TOKEN')
  }
  return config
})

requests.interceptors.response.use((res) => {
  nProgress.done()
  return res.data;
}, (err) => {
  return Promise.reject(new Error('fail'));
})

export default requests;