<template>
  <div class="post">
    <h2>UserPosts</h2>

    <div class="loading" v-if="loading">
      Loading...
    </div>

    <div class="error" v-if="error">
      {{ error }}
    </div>

    <div class="content" v-if="post">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>

  </div>
</template>

<script>

import { getPost } from './api'

export default {
  data () {
    return {
      loading: false,
      post: null,
      error: null
    }
  },
  // beforeRouteEnter (to, from, next) {
  //   getPost(to.params.id, (err, post) => {
  //     if (err) {
  //       // display some global error message
  //       next(false)
  //     } else {
  //       next(vm => {
  //         vm.post = post
  //       })
  //     }
  //   })
  //   next()
  //
  // },
  // 组件创建时的钩子
  created () {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    this.fetchData()
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'fetchData'
  },
  components: {

  },
  methods: {
    fetchData () {
      this.error = this.post = null
      this.loading = true
      // replace getPost with your data fetching util / API wrapper
      getPost(this.$route.params.id, (err, post) => {
        this.loading = false
        if (err) {
          this.error = err.toString()
        } else {
          this.post = post
        }
      })
    }

  }
}
</script>
