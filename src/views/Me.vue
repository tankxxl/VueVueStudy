<template>
  <div>
    <mu-list>
      <mu-list-item disabled title="通知与信息设置" describeText="总是中断"/>
    </mu-list>
    <mu-divider />
    <mu-list>
      <mu-sub-header>声音开启设置</mu-sub-header>
      <mu-list-item disabledRipple @click="handleToggle('events')" title="事件和提醒">
        <mu-switch v-model="events"  slot="right"/>
      </mu-list-item>
      <mu-list-item disabledRipple @click="handleToggle('calls')" title="电话">
        <mu-switch v-model="calls" slot="right"/>
      </mu-list-item>
      <mu-list-item disabledRipple @click="handleToggle('messages')" title="信息">
        <mu-switch v-model="messages" slot="right"/>
      </mu-list-item>
    </mu-list>
    <mu-list>
      <mu-sub-header>通知设置</mu-sub-header>
      <mu-list-item disabledRipple @click="handleToggle('notifications')"  title="通知">
        <mu-checkbox v-model="notifications" slot="left"/>
      </mu-list-item>
      <mu-list-item disabledRipple @click="handleToggle('sounds')"  title="声音">
        <mu-checkbox v-model="sounds" slot="left"/>
      </mu-list-item>
      <mu-list-item disabledRipple @click="handleToggle('videoSounds')" title="视频的声音">
        <mu-checkbox v-model="videoSounds" slot="left"/>
      </mu-list-item>
    </mu-list>
  </div>
</template>

<script>
export default {
  data () {
    return {
      events: false,
      calls: false,
      messages: false,
      notifications: false,
      sounds: false,
      videoSounds: false
    }
  },
  methods: {
    handleToggle (key) {
      console.log('toggle')
      this[key] = !this[key]
    }
  },
  components: {
  }
}</script>
<style scoped>
</style>
