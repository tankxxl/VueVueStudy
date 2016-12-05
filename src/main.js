import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
// axios.defaults.baseURL = 'https://api.example.com';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
// axios.defaults.headers.common['Access-Control'] = '*';
Vue.prototype.$http = axios

import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)

// import 'vue-swipe/dist/vue-swipe.css'
// import { Swipe, SwipeItem } from 'vue-swipe'
// Vue.component('swipe', Swipe)
// Vue.component('swipe-item', SwipeItem)

import AwesomeSwiper from 'vue-awesome-swiper'
Vue.use(AwesomeSwiper)


import * as filters from './filters'

import store from './store'

import App from './App'

import Home from './views/Home'
import Shop from './views/Shop'
import Cart from './views/Cart'
import Me from './views/Me'

import Detail from './views/Detail'

// demo
import User from './views/user/User'
import UserHome from './views/user/UserHome'
// import UserPosts from './views/user/UserPosts'
// import UserProfile from './views/user/UserProfile'

// 懒加载
const UserPosts = resolve => {
  require.ensure(['./views/user/UserPosts'], () => {
    resolve(require('./views/user/UserPosts'))
  })
}
// or AMD风格的require
const UserProfile = resolve => require(['./views/user/UserProfile'], resolve)



const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.use(VueRouter)



// scrollBehavior:
// - only available in html5 history mode
// - defaults to no scroll behavior
// - return false to prevent scroll
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition
  } else {
    const position = {}
    // new navigation.
    // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash
    }
    // check if any matched route config has meta that requires scrolling to top
    if (to.matched.some(m => m.meta.scrollToTop)) {
      // cords will be used if no selector is provided,
      // or if the selector didn't match any element.
      position.x = 0
      position.y = 0
    }
    // if the returned position is falsy or an empty object,
    // will retain current scroll position.
    return position
  }
}

import {toast} from './utils/util'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    name: 'orderconfirm',
    path: 'order/confirm',
    beforeEnter: function (from, to, next) {
      toast('这只是demo演示')
    },
    component: require('./views/Order.vue')
  },
  {
    name: 'home',
    path: '/home',
    component: Home
  },
  {
    name: 'shop',
    path: '/shop',
    component: Shop
  },
  {
    name: 'cart',
    path: '/cart',
    component: Cart,
    // a meta field indicate scroll to top.
    meta: { scrollToTop: true }
  },
  {
    name: 'me',
    path: '/me',
    component: Me,
    // a meta field
    meta: { requireAuth: true }
  },
  {
    // 动态路由，路径参数以冒号开头。/detail/foo和/detail/bar都将映射到相同的路由
    name: 'detail',
    path: '/detail/:id',
    component: Detail
  },

  {
    name: 'user',
    path: '/user/:id',
    component: User,
    // 嵌套路由
    children: [
      {
        // 当 /user/:id 匹配成功，UserHome会被渲染在User的<router-view>中
        path: '',
        component: UserHome
      },
      {
        // 当 /user/:id/profile 匹配成功，UserProfile会被渲染在User的<router-view>中
        path: 'profile',
        component: UserProfile
      },
      {
        // 当 /user/:id/posts 匹配成功， UserPosts会被渲染在User的<router-view>中
        path: 'posts',
        component: UserPosts
      }
    ]
  }
]

const router = new VueRouter({
  routes  // routes: routes
})

router.beforeEach( (to, from, next) => {
  // to 和 from 都是路由信息对象
  console.log(`to: ${to.path} from: ${from.path}`)

  // if (to.matched.some(record => record.meta.requireAuth)) {
  //   // this route requires auth, check if logged in
  //   // if not, redirect to login page.
  //   if (!auth.loggedIn()) {
  //     next({
  //       path: '/login',
  //       query: {redirect: to.fullPath }
  //     })
  //   } else {
  //     next()
  //   }
  // } else {
  //   next() // 确保一定要调用next()
  // }

  // next('/') 或者 next({ path: '/' }): 跳转到一个不同的地址。
  // next(false): 中断当前的导航。
  next()
})

router.afterEach(route => {
  console.log(`成功浏览到: ${route.path}`)
})

/*---------------
 Custom filters
-----------------*/
// Filter that transform text to uppercase.
Vue.filter('uppercase', function(value) {
  return value.toUpperCase()
})

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

import * as filters1 from './utils/filters'
Object.keys(filters1).forEach(key => Vue.filter(key, filters1[key]))






/* eslint-disable no-new */
// el: '#app',
// template: '<App/>',
// components: { App }
// here we inject the router and store to all child components,
// making them available everywhere as 'this.$router' and 'this.$store'.
new Vue({
  router,
  store,
  el: '#app',
  template: '<App/>',
components: { App }

})

// this.$router.replace()
// or
// window.router = router
// router.replace()

// .$mount('#app')
