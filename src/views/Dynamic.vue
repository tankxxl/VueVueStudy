<template>
  <div>Dynamic View
    {{ $route.params.id }}
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },

  mounted () {
    console.log(this.$route.params.id)
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
