<template>
  <div>
    <swiper :options="moduleSwiperOption" class="moduleSwiper">
      <swiper-slide v-for="(slide, $index) in modules">
        <!-- <div class="navpic1">
          <a href="#">{{ slide.title }}</a>
        </div> -->
        <div class="slide">{{ slide.title }}</div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  data () {
    return {
      param: this.$route.params.id,
      modules: [
        {title:'新品', desc: 'desc 1', img: require('../assets/nav1.1.png'), url: 'url1'},
        {title:'热卖', desc: 'desc 2', img: require('../assets/nav2.1.png'), url: 'url2'},
        {title:'蛋糕', desc: 'desc 3', img: require('../assets/nav3.1.png'), url: 'url3'},
        {title:'面包', desc: 'desc 4', img: require('../assets/nav4.1.png'), url: 'url4'},
        {title:'礼品', desc: 'desc 5', img: require('../assets/nav5.1.png'), url: 'url5'},
        {title:'附近', desc: 'desc 4', img: require('../assets/nav6.1.png'), url: 'url6'},
      ],
      moduleSwiperOption: {
        // 如果你后续需要找到当前实例化后的swiper对象以对其进行一些操作的话，可以自定义配置一个名字
        name: 'moduleSwiper',
        // 所有配置均为可选（同Swiper配置）
        // autoplay: 3000,
        direction : 'horizontal',
        grabCursor : true,
        setWrapperSize :true,
        // autoHeight: true,
        spaceBetween: 30,
        slidesPerView: 6,
        mousewheelControl : true,
        observeParents:true,
        // if you need use plugins in the swiper, you can config in here like this
        debugger: true,
        // swiper callbacks
        onTransitionStart: function(swiper){
          // console.log(swiper)
          console.log('onTransitionStart...')
        }
        ,
        onClick: (swiper, event) => {
          console.log('Swiper-onClick.activeIndex:' + swiper.activeIndex)
        }
      }
    }
  },
  methods: {

  },
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应
      console.log(to)
      console.log(from)
    }
  }
}
</script>

<style>
.moduleSwiper {
  height: 300px;
}
.slide {
  height: 30px;
  background: red;
}
</style>
