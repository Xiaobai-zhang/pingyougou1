<template>
  <div>
    <!-- 三级联动全局组件 -->
    <type-nav></type-nav>
    <list-container></list-container>
    <recommend></recommend>
    <rank></rank>
    <like></like>
    <floor v-for="item in floorList"
           :key="item.id"
           :floorList="item"></floor>
    <brand></brand>
  </div>
</template>

<script>
import Brand from '@/pages/Home/Brand'
import Floor from '@/pages/Home/Floor'
import Like from '@/pages/Home/Like'
import ListContainer from '@/pages/Home/ListContainer'
import Rank from '@/pages/Home/Rank'
import Recommend from '@/pages/Home/Recommend'

import { mapState } from 'vuex'

export default {
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand,
  },
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapState({
      floorList: (state) => state.home.floorList,
    }),
  },
  mounted() {
    // 派发action，获取floor组件的数据
    this.$store.dispatch('getFloorList')
  },
}
</script>
<style lang="scss" scoped>
</style>