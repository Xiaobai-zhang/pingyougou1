import { reqDeleteCart, reqShopCart, reqUpdateChecked } from "@/network";
const state = {
  shopCartInfo: [],
};
const mutations = {
  GETSHOPCAR(state, data) {
    state.shopCartInfo = data
  }
};
const actions = {
  async getShopCart({ commit }) {
    let result = await reqShopCart();
    if (result.code == 200) {
      commit('GETSHOPCAR', result.data)
    }
  },
  async deleteCart({ commit }, skuId) {
    let result = await reqDeleteCart(skuId)
    if (result.code == 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }
  },
  async updateChecked({ commit }, { skuID, isChecked }) {
    let result = await reqUpdateChecked(skuID, isChecked)
    if (result.code == 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }
  },
  deleteAllCheckedCart({ dispatch, getters }) {
    return Promise.all(getters.cartList.filter(element => {
      if (element.isChecked == 1) {
        return true
      }
      return false
    }).map(item => {
      return dispatch('deleteCart', item.skuId)
    }))
  }
};
const getters = {
  shopCartList(state) {
    return state.shopCartInfo[0] || {}
  },
  cartList(state, getters) {
    if (state.shopCartInfo != {}) {
      return getters.shopCartList.cartInfoList
    }
    return []
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}