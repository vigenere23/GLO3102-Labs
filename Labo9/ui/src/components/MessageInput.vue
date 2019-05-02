<template>
  <div class="message-input">
    <textarea
      type="text" autofocus rows="1"
      v-model="message"
      @keypress.enter="submit"></textarea>
    <a class="flat" @click="submit">
      <span class="material-icons">send</span>
    </a>
  </div>
</template>

<script>
export default {

  name: 'MessageInput',

  data () {
    return {
      message: ''
    }
  },

  methods: {
    submit (e) {
      if (!e.shiftKey) {
        e.preventDefault()
        if (this.message) {
          this.$emit('submit', this.message)
          this.message = ''
        }
      }
    }
  }

}
</script>

<style lang="scss">
.message-input {
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  background-color: white;
  padding: 4px;
  border-top: solid 1px rgba(0, 0, 0, 0.27);
  z-index: 50;

  textarea {
    flex-grow: 1;
    box-shadow: none;
    resize: none;
  }

  a {
    border-radius: 50%;
  }
}
</style>
