import Vue from 'vue'
import App from './App.vue'

import '@/mock/mockServe.js'
import 'element-ui/lib/theme-chalk/index.css'
// 三级联动组件---全局组件
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
import TypeNav from '@/pages/Home/TypeNav'
import { Button, MessageBox } from 'element-ui'
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
Vue.component(Pagination.name, Pagination)
Vue.component(Button.name, Button)

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

// 引入路由
import router from '@/router'
// 引入仓库
import store from '@/store'

// 引入swiper
import "swiper/css/swiper.css"
// 引入懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)

Vue.config.productionTip = false

// 引入统一接口函数
import * as API from '@/network/index'

// 引入表单验证插件
import '@/plugins/validate'

new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  // 注册路由
  router,
  store
}).$mount('#app')


