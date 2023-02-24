<template>
  <div id="app">
    <Header></Header>
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Footer from './components/Footer'
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  mounted() {
    this.$store.dispatch('categoryList')
  },
}
</script>

<style>
</style>
