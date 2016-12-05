<template>
  <div>
    <!-- <router-view></router-view> -->
    <mu-appbar title="Title">
      <mu-icon-button icon='menu' slot="left"/>
      <mu-icon-button icon='expand_more' slot="right"/>
    </mu-appbar>
<mu-paper>
  <!-- 路由出口 -->
 <!-- 路由匹配到的组件将渲染在这里 -->
<!-- <router-view></router-view> -->
<transition>
  <keep-alive>
    <router-view transition="fade" transition-mode="out-in"></router-view>
  </keep-alive>
</transition>


  <mu-bottom-nav :value="bottomNav" @change="bottomNavChanged" id="nav" >
    <mu-bottom-nav-item href="/#home" value="home" title="Home" icon="restore"/>
    <mu-bottom-nav-item href="/#shop" value="shop" title="Shop" icon="favorite"/>
    <mu-bottom-nav-item href="/#cart" value="cart" title="Cart" icon="location_on"/>
    <mu-bottom-nav-item href="/#me" value="me" title="Me" icon="location_on"/>
  </mu-bottom-nav>
</mu-paper>
</div>
</template>

<script>
// import Hello from './components/Hello'

export default {
  name: 'app',
  data () {
    return {
      bottomNav: 'home'
    }
  },
  methods: {
    bottomNavChanged (val) {
      this.bottomNav = val
    }
  },
  components: {
    // Hello
  }
}

</script>

<style>
#app {

}
#nav {


}

</style>
