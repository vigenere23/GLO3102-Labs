<template>
  <div id="room-page">
    <Header>{{ username }}</Header>
    <MessageList :messages="messages"></MessageList>
    <MessageInput @submit="sendMessage"></MessageInput>
  </div>
</template>

<script>
import io from 'socket.io-client'
import uuid from 'uuid/v4'
import Header from '@/components/Header'
import MessageList from '@/components/MessageList'
import MessageInput from '@/components/MessageInput'

export default {

  name: 'Room',

  components: {
    Header,
    MessageList,
    MessageInput
  },

  props: {
    username: String
  },

  data () {
    return {
      messages: [],
      socket: io('localhost:9090')
    }
  },

  mounted () {
    this.socket.emit('userConnected', { username: this.username })
    this.socket.on('connectionMessage', this.addConnectionMessage)
    this.socket.on('newMessage', this.addMessage)
  },

  methods: {
    sendMessage (message) {
      this.socket.emit('addMessage', { text: message })
      this.messages.push({
        id: uuid(),
        isConnection: false,
        isSelf: true,
        text: message,
        username: this.username
      })
    },

    addConnectionMessage (data) {
      this.messages.push({
        id: uuid(),
        isConnection: true,
        isSelf: false,
        text: data.text
      })
    },

    addMessage (data) {
      this.messages.push({
        id: uuid(),
        isConnection: false,
        isSelf: false,
        text: data.text,
        username: data.username
      })
    }
  }

}
</script>

<style lang="scss">
#room-page {
  width: 100%;
  height: 100vh;
  padding-top: 56px;
  padding-bottom: 76px;
}
</style>
