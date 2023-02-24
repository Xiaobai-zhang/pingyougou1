import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex)

import detail from "./detail";
import home from './home';
import search from "./search";
import shopcart from "./shopcart";
import trade from "./trade";
import user from './user';

export default new Vuex.Store({
  modules: {
    home,
    search,
    detail,
    shopcart,
    user,
    trade
  }
})