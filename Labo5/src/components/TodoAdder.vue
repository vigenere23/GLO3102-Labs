<template>
  <div id="todo-adder">
    <input type="text" @keypress.enter="addTodo" v-model.trim="text" :placeholder="placeholder">
    <button type="submit" @click="addTodo">Add</button>
  </div>
</template>

<script>
import consts from '@/constants'
import helpers from '@/helpers'

export default {
  name: 'todo-adder',
  data() {
    return {
      placeholder: '',
      text: ''
    }
  },
  methods: {
    changePlaceholder() {
      this.placeholder = consts.PLACEHOLDERS[Math.floor(Math.random() * consts.PLACEHOLDERS.length)];
    },
    async addTodo() {
      if (this.text) {
        const text = this.text
        this.text = ''
        const todo = await helpers.addTodo(text)
        if (todo) this.$emit('addedTodoEvent', todo)
      }
    }
  },
  mounted() {
    this.changePlaceholder()
  }
}
</script>


<style>
#todo-adder {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

#todo-adder input {
  flex-basis: 200px;
  flex-grow: 1;
  flex-shrink: 0;
}

#todo-adder button {
  flex-shrink: 0;
  color: white;
  font-family: inherit;
  font-weight: 500;
  border: none;
  padding: 0.5em 1em;
  margin: 8px;
  text-transform: uppercase;
  border-radius: 4px;
  background-color: #1565c0;
  box-shadow:  0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  transition: all 200ms ease-in-out;
}

#todo-adder button:hover:not(:active) {
  background-color: #1976d2;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  transition: all 200ms ease-in-out;
}
</style>
