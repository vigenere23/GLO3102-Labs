<template>
  <div class="message-list">
    <Message
      v-for="message in messages" :key="message.id"
      :message="message"></Message>
  </div>
</template>

<script>
import Message from '@/components/Message'

export default {

  name: 'MessageList',

  components: {
    Message
  },

  props: {
    messages: Array
  },

  watch: {
    messages () {
      const container = this.$el
      setTimeout(() => {
        container.scrollTop = container.scrollHeight
      }, 100)
    }
  }

}
</script>

<style lang="scss">
.message-list {
  padding: 8px;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
}
</style>
