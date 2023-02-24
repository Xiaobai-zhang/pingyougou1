import { reqCategoryList, reqGetBannerList, reqGetFloorList } from '@/network';
const state = {
  categoryList: [],
  bannerList: [],
  floorList: []
};
const mutations = {
  CATEGORIYLIST(state, categoryList) {
    state.categoryList = categoryList
  },
  GETBANNERLIST(state, bannerList) {
    state.bannerList = bannerList
  },
  GETFLOORLIST(state, floorList) {
    state.floorList = floorList
  }
};
const actions = {
  async categoryList({ commit }) {
    let result = await reqCategoryList();
    if (result.code == 200) {
      commit('CATEGORIYLIST', result.data)
    }
  },
  async getBannerList(context) {
    let result = await reqGetBannerList()
    if (result.code == 200) {
      context.commit('GETBANNERLIST', result.data)
    }
  },
  async getFloorList(context) {
    let result = await reqGetFloorList()
    if (result.code == 200) {
      context.commit('GETFLOORLIST', result.data)
    }
  }
};
const getters = {

}
export default {
  state,
  mutations,
  actions,
  getters
}