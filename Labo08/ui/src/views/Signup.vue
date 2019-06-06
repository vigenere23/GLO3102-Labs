<template>
  <div id="signup-page" class="full-center-page">
    <AuthForm title="Signup" @submit="signup"></AuthForm>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import AuthForm from '@/components/AuthForm'
import { api } from '@/js/api'
import { EventBus } from '@/js/eventbus'

export default {
  name: 'Signup',
  components: {
    AuthForm
  },
  methods: {
    async signup (infos) {
      const auth = await api.signup(infos)
      if (auth.error) {
        EventBus.$emit('toast', { type: 'error', message: auth.error })
        EventBus.$emit('resetForm')
      } else {
        Cookies.set('token', auth.token)
        EventBus.$emit('toast', { type: 'success', message: 'Successfully registered' })
        this.$router.push('/users/' + auth.user.id + '/profile')
      }
    }
  }
}
</script>
