<template>
  <div id="home-page">
    <Room v-if="username" :username="username"></Room>
    <Login v-else @submit="login"></Login>
  </div>
</template>

<script>
import { EventBus } from '@/js/eventbus'
import { api } from '@/js/api'
// import Cookies from 'js-cookie'
import Login from '@/components/Login'
import Room from '@/components/Room'

export default {

  name: 'Home',

  components: {
    Login,
    Room
  },

  data () {
    return {
      // username: Cookies.get('username')
      username: ''
    }
  },

  methods: {
    async login (username) {
      const response = await api.login(username)
      if (response.error) {
        // Cookies.remove('username')
        EventBus.$emit('toast', { type: 'error', message: response.error })
      } else {
        this.username = username
        // Cookies.set('username', username)
        EventBus.$emit('toast', { type: 'success', message: 'Successfully logged in' })
      }
    }
  }

}
</script>
