<template>
   <transition name="slide">
     <div>
       <!-- banner slider -->
      <swiper :options="bannerSwiperOption" class="bannerSwiper">
        <swiper-slide v-for="slide in banners">
            <div class="bannerSlide">
                <img :src='slide.img' class="img"/>
            </div>
        </swiper-slide>
        <!-- ... -->
        <!-- 以下配置均为可选（使用具名slot来确定并应用一些操作控件元素） -->
        <div class="swiper-pagination"  slot="pagination"></div>
        <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
        <!-- <div class="swiper-button-next" slot="button-next"></div> -->
        <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
      </swiper>

      <!-- module slider -->
      <swiper :options="moduleSwiperOption" class="moduleSwiper">
        <swiper-slide v-for="(slide, $index) in modules"
          :class="{ 'is-active': $index === moduleIndex }">
          <div class="moduleSlide">
              <img :src="slide.img" />
            <a href="#">{{ slide.title }}</a>
          </div>
        </swiper-slide>
      </swiper>

      <!-- special slider -->
      <swiper :options="specialSwiperOption" class="specialSwiper">
        <swiper-slide v-for="slide in specials">
          <div class="specialSlide">
            <!-- <a href="#">{{ slide.title }}</a> -->
            <img :src='slide.img' class="img"/>
          </div>
        </swiper-slide>
      </swiper>

      <div class="hlist_tit">
			<span>
        新品
				<font>新品</font>
			</span>
		</div>

    <mu-grid-list class="gridlist-demo">
    <mu-sub-header>爆款单品</mu-sub-header>
    <mu-grid-tile v-for="tile in list">
      <img :src="tile.image"/>
      <span slot="title">{{tile.title}}</span>
      <span slot="subTitle">by <b>{{tile.author}}</b></span>
      <mu-icon-button icon="star_border" slot="action"/>
    </mu-grid-tile>
  </mu-grid-list>

    </div>
  </transition>
</template>
<script>
export default {
  components: {

  },
  data () {
    return {
      loading: false,
      moduleIndex: 0,
      banners: [
        {title:'slide title 1', desc: 'slide desc 1', img: require('../assets/banner1.jpg'), url: 'url1'},
        {title:'slide title 2', desc: 'slide desc 2', img: require('../assets/banner2.jpg'), url: 'url2'},
        {title:'slide title 3', desc: 'slide desc 3', img: require('../assets/banner3.jpg'), url: 'url3'},
        {title:'slide title 4', desc: 'slide desc 4', img: require('../assets/banner2.jpg'), url: 'url4'},
        {title:'slide title 5', desc: 'slide desc 5', img: require('../assets/banner1.jpg'), url: 'url5'}
      ],
      modules: [
        {title:'新品', desc: 'desc 1', img: require('../assets/nav1.1.png'), url: 'url1'},
        {title:'热卖', desc: 'desc 2', img: require('../assets/nav2.1.png'), url: 'url2'},
        {title:'蛋糕', desc: 'desc 3', img: require('../assets/nav3.1.png'), url: 'url3'},
        {title:'面包', desc: 'desc 4', img: require('../assets/nav4.1.png'), url: 'url4'},
        {title:'礼品', desc: 'desc 5', img: require('../assets/nav5.1.png'), url: 'url5'},
        {title:'附近', desc: 'desc 4', img: require('../assets/nav6.1.png'), url: 'url6'},
      ],

      specials: [
        {title:'生日专题', desc: 'desc 1', img: require('../assets/zhuanti1.png'), url: 'url1'},
        {title:'结婚专题', desc: 'desc 2', img: require('../assets/zhuanti2.png'), url: 'url2'}
      ],

      bannerSwiperOption: {
        // 如果你后续需要找到当前实例化后的swiper对象以对其进行一些操作的话，可以自定义配置一个名字
        name: 'bannerSwiper',
        // 所有配置均为可选（同Swiper配置）
        autoplay: 3000,
        direction : 'horizontal',
        grabCursor : true,
        setWrapperSize :true,
        autoHeight: true,
        pagination : '.swiper-pagination',
        paginationClickable :true,
        // prevButton:'.swiper-button-prev',
        // nextButton:'.swiper-button-next',
        // scrollbar:'.swiper-scrollbar',
        mousewheelControl : false,
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
          console.log('bannerSwiper-onClick...activeIndex:' + swiper.activeIndex)
          // this.moduleIndex = swiper.activeIndex
        }
        // more Swiper config ...
        // ...
      },

        moduleSwiperOption: {
            // 如果你后续需要找到当前实例化后的swiper对象以对其进行一些操作的话，可以自定义配置一个名字
            name: 'moduleSwiper',
            // 所有配置均为可选（同Swiper配置）
            // autoplay: 3000,
            direction : 'horizontal',
            grabCursor : true,
//            setWrapperSize :true,
//             autoHeight: true,
            spaceBetween: 30,
            slidesPerView: 6,
            // pagination : '.swiper-pagination',
            // paginationClickable :true,
            // prevButton:'.swiper-button-prev',
            // nextButton:'.swiper-button-next',
            // scrollbar:'.swiper-scrollbar',
            mousewheelControl : false,
            observeParents:true,
            // if you need use plugins in the swiper, you can config in here like this
            debugger: true,
            // swiper callbacks
            onTransitionStart: function(swiper){
//              此函数是moduleSwiperOption对象的一个函数，所以此函数内的this为moduleSwiperOption对象，
//              而不是Vue模块对象，所以用this取不到data中的值
                // console.log(swiper)
                console.log('onTransitionStart...')
            },
            onClick: (swiper, event) => {
                console.log(swiper.activeIndex)
                console.log('=moduleSwiper-onClick...activeIndex:' + swiper.activeIndex)
                console.log('Swiper-onClick.current Page activeItemIndex:', swiper.clickedIndex)
                this.moduleIndex = swiper.clickedIndex
            }
            // more Swiper config ...
            // ...
        },

        specialSwiperOption: {
            // 如果你后续需要找到当前实例化后的swiper对象以对其进行一些操作的话，可以自定义配置一个名字
            name: 'specialSwiper',
            // 所有配置均为可选（同Swiper配置）
            // autoplay: 3000,
            direction : 'horizontal',
            grabCursor : true,
            setWrapperSize :true,
            // autoHeight: true,
            spaceBetween: 15,
            // 多列
            slidesPerView: 2,
            // 多行
            // slidesPerColumn: 2,
            mousewheelControl : false,
            observeParents:true,
            onClick: (swiper, event) => {
                console.log('=specialSwiper-onClick...activeIndex:' + swiper.activeIndex)
                // this.moduleIndex = swiper.activeIndex
            }
        },

        list: [{
        image: require('../assets/cake1.jpg'),
        title: '缤纷盛果蛋糕',
        author: 'Myron'
      }, {
        image: require('../assets/cake2.jpg'),
        title: '华尔兹蛋糕',
        author: 'Waltz Almond'
      }, {
        image: require('../assets/cake3.jpg'),
        title: '俏皮萌宝蛋糕',
        author: 'Cute Bears'
      }, {
        image: require('../assets/cake4.jpg'),
        title: '聚福蛋糕',
        author: 'Good Fortune'
      }, {
        image: require('../assets/cake5.jpg'),
        title: '经典黑森林蛋糕',
        author: 'Black Forest'
      }, {
        image: require('../assets/cake1.jpg'),
        title: '白色恋人蛋糕 White Love',
        author: 'mokayi'
      }, {
        image: require('../assets/cake2.jpg'),
        title: '富贵天喜蛋糕 Riches&Honour',
        author: 'NUyyyyyyy'
      }, {
        image: require('../assets/cake3.jpg'),
        title: '提拉米苏蛋糕 Tiramisu Mousse',
        author: 'TDDyyyyyyy'
      }]
    }
  },

  // example code (if you need to get the current swiper object, find the swiper object in current component(vm) childrens)
  // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象
  computed: {
    bannerSwiper() {
      return (this.$children.find(children => children.options.name == 'bannerSwiper').swiper)
    },
    moduleSwiper() {
      return (this.$children.find(children => children.options.name == 'moduleSwiper').swiper)
    }
  },

  mounted() {
    // you can use current swiper object to do something(swiper methods)
    console.log('this is current swiper object', this.bannerSwiper)
    // this.bannerSwiper.onClick = this.onSwiperClicked
    this.bannerSwiper.slideTo(0, 1000, false)
    console.log('moduleSwiper1=', this.moduleSwiper)
    console.log('moduleSwiper2=', this.moduleSwiper)
    // http request
//    this.fetchData()

  },

  methods: {
    onSwiperClicked (swiper, event) {
      console.log('==onSwiperClicked..activeIndex=' + swiper.activeIndex)
    },

    fetchData() {
      var vm = this
      vm.loading = true
      // http://localhost:8081/spring4ajax/customers
      // http://localhost:8081/spring4ajax/user/2
      this.$http.get('http://localhost:8080/')
      .then(function (response) {
        console.log(response)
        console.log(response.data)
        vm.loading = false
        // vm.customers = response.data
      })
      .catch(function (error) {
        vm.loading = false
        vm.error = error.message
        console.log(error)
        console.log(error.message)
      })
    }
  }
}
</script>

<style scoped>

.bannerSwiper {
  height: 300px;
}

.moduleSwiper {
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  height: 80px;
}
.specialSwiper {
  margin-left: 10px;
  margin-right: 10px;
  height: 150px;
}

.bannerSlide {
    text-align: center;
}

.moduleSlide {
  /*background:url(../assets/nav3.1.png) center top no-repeat;*/
  text-align: center;
}

.specialSlide {
  /*background:url(../assets/cake1.jpg) center top no-repeat;*/
    text-align: center;
}

.img {
    /*width: 100%;*/
    /*height: 100%;*/
    vertical-align:middle;
}



.hlist_tit{
        font-size:1.2rem ;
        color: #888;
        text-align: center;
        padding-top: 0.6rem;
        padding-bottom: 1.62rem;
}
.hlist_tit span{
        display: inline-block;
        width: 46%;
        border-bottom: 1px solid #e6e6e6;
        height: 1.1rem;
}
.hlist_tit span font{
        position: relative;
        top: 0.5rem;
        background-color: #fff;
        padding: 0 0.5rem;
}

.is-active {
  font-style: italic;
    /*color: #00F;*/
  /*font-size: 23px;*/
}


.gridlist-demo {
  /*width: 500px;*/
  /*height: 450px;*/
  /*overflow-y: auto;*/
}


</style>
