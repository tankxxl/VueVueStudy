<template>
  <div>
    <h2>UserProfile</h2>
    <p>{{ data | currency }}</p>
    <mu-raised-button label="Primary" class="demo-raised-button" primary @click="fetchData" />

    <div class="loading" v-if="loading">
      Loading...
    </div>

    <div class="error" v-if="error">
      {{ error }}
    </div>

    <div class="content" v-for="(customer, index) in customers">
      <h2>{{ index }} -- {{ customer.id }}</h2>
      <p>{{ customer.firstName }}</p>
      <p>{{ customer.lastName }}</p>
      <p>{{ customer.email }}</p>
      <p>{{ customer.mobile }}</p>
      <p>{{ customer.dateOfBirth }}</p>
    </div>

    <p>
      Ask a yes/no question:
      <input v-model="question">
    </p>
    <p>{{ answer }}</p>
    <img v-bind:src="imgSrc" />

  </div>
</template>

<script>

// import lodash from 'lodash'
import axios from 'axios'

export default {
  data () {
    return {
      data: 1234,
      customers: [],
      loading: false,
      error: null,
      question: '',
      answer: 'I cannot give you an answer until you ask a question!',
      imgSrc: ''
    }
  },
  watch: {
    // 如果 question 发生改变，这个函数就会运行
    question: function (newQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.getAnswer()
    }
  },
  components: {

  },
  methods: {

    getAnswer: _.debounce(function () {
      var vm = this
      if (this.question.indexOf('?') === -1) {
        vm.answer = 'Question usually contain a question mark. ;-)'
        return
      }
      vm.answer = 'Thinking...'
      axios.get('https://yesno.wtf/api')
      .then(function (response) {
        console.log(response)
        vm.answer = _.capitalize(response.data.answer)
        vm.imgSrc = response.data.image
      })
      .catch(function (error) {
        vm.answer = 'Error! Could not reach the API. ' + error
      })
    },
    // 这里我们为用户停止输入等待的毫秒数
    500
  ),

    fetchData() {
      var vm = this
      vm.loading = true
      // http://localhost:8081/spring4ajax/customers
      // http://localhost:8081/spring4ajax/user/2
      this.$http.get('http://localhost:8081/spring4ajax/customers')
      .then(function (response) {
        console.log(response)
        console.log(response.data)
        vm.loading = false
        vm.customers = response.data
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

<style>
.demo-raised-button {
    margin: 12px;
  }
  .content {
    margin: 12px;
  }
</style>
