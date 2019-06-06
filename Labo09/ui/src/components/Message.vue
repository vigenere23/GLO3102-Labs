<template>
  <div class="message" :class="{ self, connection }">
    <span v-if="!self" class="username">{{ message.username }}</span>
    <span class="text">{{ message.text }}</span>
  </div>
</template>

<script>
export default {

  name: 'Message',

  props: {
    message: Object
  },

  data () {
    return {
      self: this.message.isSelf,
      connection: this.message.isConnection
    }
  }

}
</script>

<style lang="scss" scoped>
.message {
  position: relative;

  .username {
    position: absolute;
    left: 0;
    top: -2.5em;
  }

  &:not(.connection) {
    width: max-content;
    padding: 12px 16px;
    border-radius: 16px;
    margin-top: 8px;
    max-width: 90%;
    background-color: #eee;

    &.self {
      background-color: #1e88e5;
      color: white;
      margin-left: auto;
    }

    &:not(.self) {
      margin-top: 32px;
    }
  }

  &.connection, .username {
    margin-left: 8px;
    margin-top: 16px;
    color: rgba(0, 0, 0, 0.54);
    font-size: 14px;
  }
}
</style>
