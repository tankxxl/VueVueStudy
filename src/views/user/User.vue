<template>
  <div>
    <h2>User-User.id={{$route.params.id}}</h2>
    <p> this.$route.params: {{ this.$route.params }} </p>
    <p> $route.params.id = {{ $route.params.id }} </p>
    <p> param in data: {{ param }} </p>
    <!-- <p>Route context</p> -->
    <!-- <pre>{{ JSON.stringify($route, null, 2) }}</pre> -->

    <router-link to="/user/1/profile">Go to Profile</router-link>
    <router-link to="/user/2/posts">Go to Posts</router-link>
    <router-link to="/">Go to Home</router-link>

    <!-- 使用动态的 transition name -->
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      param: this.$route.params.id,
      transitionName: 'slide-left'
    }
  },
  components: {

  },
  methods: {

    getLocation() {
      if (navigator.geolocation) {
        // geolocation is available
        navigator.geolocation.getCurrentPosition(
          // Success callback
          function(position) {
            /*
            position is an object containing various information about the acquired device location:

            position = {
              coords: {
                latitude - Geographical latitude in decimal degrees.
                longitude - Geographical longitude in decimal degrees.
                altitude - Height in meters relative to sea level.
                accuracy - Possible error margin for the coordinates in meters.
                altitudeAccuracy - Possible error margin for the altitude in meters.
                heading - The direction of the device in degrees relative to north.
                speed - The velocity of the device in meters per second.
              }
              timestamp - The time at which the location was retrieved.
            }
            */
          },
          // Optional error callback
          function(error) {
            /*
            In the error object is stored the reason for the failed attempt:

            error = {
              code - Error code representing the type of error
                1 - permission_denied
                2 - position_unavailable
                3 - timeout
              message - Details about the error in human-readable format.
            }
            */
          }
        )
      } else {
        // geolocation is not supported
      }
    }

  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  }
}
</script>
