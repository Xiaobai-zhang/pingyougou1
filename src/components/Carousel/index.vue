<template>
  <div class="swiper-container"
       ref="floor1Swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide"
           v-for="(banner,index) in list"
           :key="banner.id">
        <img :src="banner.imgUrl">
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  name: 'Carousel',
  components: {},
  props: {
    list: {
      type: Array,
    },
  },
  data() {
    return {}
  },
  watch: {
    list: {
      immediate: true,
      handler(newValue, oldValue) {
        this.$nextTick(() => {
          var mySwiper = new Swiper(this.$refs.floor1Swiper, {
            loop: true,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            navigation: {
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            },
            autoplay: true,
          })
        })
      },
    },
  },
}
</script>
<style lang="scss" scoped>
</style>