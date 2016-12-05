<template>
  <div>
    <h2>UserHome</h2>
    <p> this.$route.params: {{ this.$route.params }} </p>
    <p> $route.params.id = {{ $route.params.id }} </p>
    <p> param in data: {{ param }} </p>
    <p>{{ data | currency }}</p>

  </div>
</template>

<script>
export default {
  data () {
    return {
      data: 123
    }
  },
  components: {

  },
  methods: {

  }
}
</script>
