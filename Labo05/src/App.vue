<template>
  <div id="app">
    <h1>📝 TODO 📝</h1>
    <todo-list></todo-list>
  </div>
</template>

<script>
import helpers from '@/helpers'
import TodoList from '@/components/TodoList'

export default {
  name: 'app',
  components: {
    TodoList
  },
  async mounted() {
    helpers.createUser()
  }
}
</script>

<style>
body {
  margin: 0;
  box-sizing: border-box;
  width: 100%;
  min-height: 100%;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
}

h1 {
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  display: block;
}

#app {
  box-sizing: border-box;
  width: 100%;
  max-width: 400px;
  padding: 64px 16px;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
