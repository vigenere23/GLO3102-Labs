<template>
  <div id="todo-list">
    <ul>
      <todo-item
        v-for="todo in todos"
        :key="todo.id"
        :todoId="todo.id"
        :text="todo.name"
        @removedTodoEvent="removeTodo"
        @replacedTodoEvent="replaceTodo"
      />
    </ul>
  
    <todo-adder
      @addedTodoEvent="addTodo"
    />
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem'
import TodoAdder from '@/components/TodoAdder'

export default {
  name: 'todo-list',
  components: {
    TodoItem,
    TodoAdder
  },
  data() {
    return {
      todos: []
    }
  },
  methods: {
    addTodo(todo) {
      this.todos.push(todo)
    },
    replaceTodo(todoId, todoText) {
      const todo = this.todos.find(todo => todo.id == todoId)
      if (todo) todo.name = todoText
    },
    removeTodo(todoId) {
      const index = this.todos.findIndex(todo => todo.id == todoId)
      this.todos.splice(index, 1)
    }
  }
}
</script>

<style>
#todo-list ul {
  width: 100%;
  box-sizing: border-box;
  padding: 0;
  list-style: none;
}
</style>
