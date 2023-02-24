import { reqGetCode, reqLogout, reqRegister, reqUserInfo, reqUserLogin } from "@/network";
import { removeToken, setToken } from '@/utlis/token';
const state = {
  // 验证码
  code: '',
  // 后台返回的唯一标识符
  token: sessionStorage.getItem('TOKEN'),
  userInfo: {}
};
const mutations = {
  GETCODE(state, phone) {
    state.code = phone
  },
  USERLOGIN(state, token) {
    state.token = token
  },
  GETUSERINFO(state, userInfo) {
    state.userInfo = userInfo
  },
  CLEAR(state) {
    // 帮仓库中先关用户信息清空
    state.token = ''
    state.userInfo = {}
    // 本地存储数据清空
    removeToken()
  }
};
const actions = {
  // 获取验证码
  async getCode({ commit }, phone) {
    let result = await reqGetCode(phone)
    if (result.code == 200) {
      commit('GETCODE', result.data)
      return 'ok'
    } else {
      return Promise.reject(new Error(result.message))
    }
  },
  // 用户注册
  async userRegister({ commit }, data) {
    let result = await reqRegister(data)
    if (result.code == 200 && result.message == '成功') {
      return 'ok'
    } else {
      return Promise.reject('fail')
    }
  },
  // 登录业务
  async userLogin({ commit }, data) {
    let result = await reqUserLogin(data)
    if (result.code == 200) {
      commit('USERLOGIN', result.data.token)
      setToken(result.data.token)
      return 'ok'
    } else {
      return Promise.reject(new Error(result.message))
    }
  },
  // 获取用户信息
  async getUserInfo({ commit }) {
    let result = await reqUserInfo()
    if (result.code == 200) {
      commit('GETUSERINFO', result.data)
      return 'ok'
    } else {
      console.log(result);
      return Promise.reject(new Error('fail'))
    }
  },
  // 退出登录
  async userLogout({ commit }) {
    // 向服务器发起请求，通知服务器清除token
    let result = await reqLogout()
    console.log(result);
    if (result.code == 200) {
      commit('CLEAR');
    }
  }
}
const getters = {

}
const modules = {

}
export default {
  state,
  mutations,
  actions,
  getters,
  modules
}
