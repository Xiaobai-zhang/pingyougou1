import { reqGetSearchInfo } from "@/network";
const state = {
  searchInfo: []
};
const mutations = {
  GETSEARCHINFO(state, data) {
    state.searchInfo = data
  }
};
const actions = {
  async getSearchInfo({ commit }, params = {}) {
    let result = await reqGetSearchInfo(params)
    if (result.code == 200) {
      commit('GETSEARCHINFO', result.data)
    }
  }
};
const getters = {
  goodsList(state) {
    return state.searchInfo.goodsList || []
  },
  trademarkList(state) {
    return state.searchInfo.trademarkList || []
  },
  attrsList(state) {
    return state.searchInfo.attrsList || []
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}