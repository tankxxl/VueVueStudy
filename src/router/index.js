import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

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


export default new Router({

})
