import Vue from "vue";
import VueRouter from 'vue-router';

Vue.use(VueRouter)

import store from "@/store";
import routes from './routes';

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savePosition) {
    return { y: 0 }
  }
})

// 防重复点击进入同一个路由进行重定位报错
const originalPush = VueRouter.prototype.push
const originalReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function push(location, resolve, reject) {
  // 这里的this == 调用组件的this.$router == VueRouter函数实例
  if (resolve && reject) {
    originalPush.call(this, location, resolve, reject)
  } else {
    originalPush.call(this, location, () => { }, () => { })
  }
}

VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originalReplace.call(this, location, resolve, reject)
  } else {
    originalReplace.call(this, location, () => { }, () => { })
  }
}

router.beforeEach(async (to, from, next) => {
  let token = store.state.user.token;
  let name = store.state.user.userInfo.name
  if (token) {
    // 用户已经登录
    if (to.path == '/login') {
      next('/')
    } else {
      //在导航跳转之前判断该页面是否有没有加载用户信息
      if (name) {
        next()
      } else {
        try {
          await store.dispatch('getUserInfo')
          next()
        } catch (error) {
          await store.dispatch('userLogout')
          next('/login')
        }
      }
    }
  } else {
    let toPath = to.path
    if (toPath.indexOf('/home') != -1 || toPath.indexOf('/search') != -1 || toPath.indexOf('/detail') != -1 || toPath.indexOf('/login') != -1 || toPath.indexOf('/register') != -1) {
      next()
    } else {
      next('/login?redirect=' + toPath)
    }
  }
})

export default router