<template>
  <li class="todo">
    <input
      v-if="this.editing"
      class="todo-input"
      type="text"
      v-model="editedText"
      @keydown.enter="replaceTodo"
      @keydown.escape="cancelTodoEdit"
      @blur="cancelTodoEdit"
    >
    <span v-else class="todo-text" @click="editTodo">{{ text }}</span>
    <a class="todo-close material-icons" @mousedown="removeTodo">close</a>
  </li>
</template>

<script>
import helpers from '@/helpers'

export default {
  name: 'todo-item',
  props: {
    todoId: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      editedText: '',
      editing: false
    }
  },
  methods: {
    async editTodo() {
      if (!this.editing) {
        this.editing = true
        const input = (await this.$el.getElementsByTagName('input'))[0]
        input.focus()
      }
    },
    cancelTodoEdit() {
      this.editedText = this.text
      this.editing = false
    },
    async replaceTodo() {
      if (this.editing && this.editedText) {
        let response = await helpers.replaceTodo(this.todoId, this.editedText)
        this.editing = false
        if (response !== null) this.$emit('replacedTodoEvent', this.todoId, this.editedText)
      } else {
        this.cancelTodoEdit()
      }
    },
    async removeTodo(e) {
      e.stopPropagation()
      let response = await helpers.removeTodo(this.todoId)
      if (response !== null) this.$emit('removedTodoEvent', this.todoId)
    }
  },
  mounted() {
    this.editedText = this.text
  }
}
</script>

<style>
.todo {
  width: 100%;
  padding: 0.5em 0.5em 0.5em 1em;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
}

.todo:hover {
  background-color: #f4f4f4;
}

.todo .todo-text, .todo .todo-input {
  display: block;
  flex-grow: 1;
}

.todo .todo-text {
  cursor: text;
}

.todo .todo-close {
  flex-shrink: 0;
  font-size: 20px;
  display: block;
  margin-left: 16px;
  cursor: pointer;
}
</style>
