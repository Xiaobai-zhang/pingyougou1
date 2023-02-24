import axios from 'axios';
import nProgress from 'nprogress';
import "nprogress/nprogress.css";

const mokeRequsts = axios.create({
  baseURL: '/mock',
  timeout: 5000
})

mokeRequsts.interceptors.request.use((config) => {
  nProgress.start()
  return config
})

mokeRequsts.interceptors.response.use((res) => {
  nProgress.done()
  return res.data;
}, (err) => {
  return Promise.reject(new Error('fail'));
})

export default mokeRequsts;