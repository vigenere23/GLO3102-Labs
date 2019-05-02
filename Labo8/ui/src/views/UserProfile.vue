<template>
  <div id="user-profile-page" class="full-center-page">
    <h1>{{ secret }}</h1>
  </div>
</template>

<script>
import { api } from '@/js/api'
import { EventBus } from '@/js/eventbus'
import Cookies from 'js-cookie'

export default {
  name: 'UserProfile',
  data () {
    return {
      secret: ''
    }
  },
  created () {
    this.refreshContent(this.$route.params.id)
  },
  beforeRouteUpdate (to, from, next) {
    this.refreshContent(to.params.id)
    next()
  },
  methods: {
    async refreshContent (userId) {
      this.secret = ''
      const res = await api.getProfile(userId)
      if (res.error !== undefined) {
        EventBus.$emit('toast', { type: 'error', message: res.error })
        if (res.status === 401) {
          Cookies.remove('token')
          this.$router.push('/login')
        }
      } else {
        this.secret = res
      }
    }
  }
}
</script>

<style lang="scss">
#user-profile-page {
  text-align: center;
}
</style>
