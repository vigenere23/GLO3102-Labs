<template>
  <div id="login-page" class="full-center-page">
    <AuthForm title="Login" @submit="login"></AuthForm>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import AuthForm from '@/components/AuthForm'
import { api } from '@/js/api'
import { EventBus } from '@/js/eventbus'

export default {
  name: 'Login',
  components: {
    AuthForm
  },
  methods: {
    async login (infos) {
      const auth = await api.login(infos)
      if (auth.error) {
        EventBus.$emit('toast', { type: 'error', message: auth.error })
        EventBus.$emit('resetForm')
      } else {
        Cookies.set('token', auth.token)
        EventBus.$emit('toast', { type: 'success', message: 'Successfully logged in' })
        this.$router.push('/users/' + auth.user.id + '/profile')
      }
    }
  }
}
</script>
