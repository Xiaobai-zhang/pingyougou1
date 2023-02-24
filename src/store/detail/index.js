import { reqAddOrUpdateShopCart, reqGoodInfo } from "@/network";
import { getUUID } from '@/utlis/uuid_token';
const state = {
  goodInfo: {},
  currentIndex: 0,
  // 游客临时身份
  uuid_token: getUUID()
};
const mutations = {
  GETGOODINFO(state, goodInfo) {
    state.goodInfo = goodInfo
  },
  CHANGEINDEX(state, currentIndex) {
    state.currentIndex = currentIndex
  }
};
const actions = {
  async getGoodInfo({ commit }, skuId) {
    let result = await reqGoodInfo(skuId)
    if (result.code == 200) {
      commit('GETGOODINFO', result.data)
    }
  },
  async AddOrUpdateShopCart({ commit }, { skuId, skuNum }) {
    let result = await reqAddOrUpdateShopCart(skuId, skuNum)
    return result.code
  }
};
const getters = {
  categoryView(state) {
    return state.goodInfo.categoryView || {}
  },
  skuInfo(state) {
    return state.goodInfo.skuInfo || {}
  },
  spuSaleAttrList(state) {
    return state.goodInfo.spuSaleAttrList || []
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}