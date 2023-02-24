import { reqAddressInfo, reqOrderInfo } from "@/network";
const state = {
  addressInfo: [],
  orderInfo: []
};
const mutations = {
  GETADDRESS(state, data) {
    state.addressInfo = data
  },
  GETORDERINFO(state, data) {
    state.orderInfo = data
  }
};
const actions = {
  async getAddress({ commit }) {
    let result = await reqAddressInfo()
    if (result.code == 200) {
      commit('GETADDRESS', result.data)
      return 'ok'
    } else {
      throw new Error(result.code)
    }
  },
  // 获取用户清单信息
  async getOrderInfo({ commit }) {
    let result = await reqOrderInfo()
    if (result.code == 200) {
      commit('GETORDERINFO', result.data)
    }
  }
};
const getters = {};
const modules = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
  modules
}