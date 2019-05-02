<template>
  <div class="auth-form">
    <h2>{{ title }}</h2>
    <LabelInput
      @keypress.enter.native="submitForm"
      type="text" label="username"
      v-model="username"
    ></LabelInput>
    <LabelInput
      @keypress.enter.native="submitForm"
      type="password" label="password"
      v-model="password"
    ></LabelInput>
    <SquareButton
      @click="submitForm"
      no-margin accent
    >Submit</SquareButton>
  </div>
</template>

<script>
import LabelInput from '@/components/LabelInput'
import SquareButton from '@/components/SquareButton'
import { EventBus } from '@/js/eventbus'

export default {
  name: 'AuthForm',
  components: {
    LabelInput,
    SquareButton
  },
  props: {
    title: String
  },
  data () {
    return {
      username: '',
      password: ''
    }
  },
  mounted () {
    this.selectFirstInput()
    EventBus.$on('resetForm', () => {
      this.username = ''
      this.password = ''
      this.selectFirstInput()
    })
  },
  destroyed () {
    EventBus.$off('resetForm')
  },
  methods: {
    submitForm () {
      if (this.username && this.password) {
        this.$emit('submit', {
          username: this.username,
          password: this.password
        })
      }
    },
    selectFirstInput () {
      this.$el.querySelector('.label-input input').focus()
    }
  }
}
</script>

<style lang="scss">
.auth-form {
  width: 100%;
  max-width: 240px;
  margin: auto;
}
</style>
