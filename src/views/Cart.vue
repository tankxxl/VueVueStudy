<template>
  <transition name="fade">
    <div>
      <p>Cart.vue</p>

      <div id="todo-list-example">
        <input
          v-model="newTodoText"
          v-on:keyup.enter="addNewTodo"
          placeholder="Add a todo"
        />

        <ul>
          <!-- 使用一个组件 -->
          <li
            is="todo-item"
            v-for="(todo, index) in todos"
            v-bind:title="todo"
            v-on:remove="todos.splice(index, 1)">
          </li>
        </ul>
      </div>

    </div>
  </transition>
</template>

<script>
import Vue from 'vue'

// 注册一个组件
Vue.component('todo-item', {
  template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">X</button>\
    </li>\
  ',
  props: ['title']
})


export default {
  components: {

  },
  data () {
    return {
      newTodoText: '',
      todos: [
        'Do the dishes',
        'Take out the trash',
        'Mow the lawn'
      ]
    }
  },
  methods: {
    addNewTodo: function () {
      this.todos.push(this.newTodoText)
      this.newTodoText = ''
    }
  }
}
</script>

<style scoped>

</style>
