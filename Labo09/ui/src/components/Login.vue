<template>
  <div id="login-page" class="accent">
    <h1>Login</h1>
    <div class="login">
      <input
        class="shadow"
        @keypress.enter="submit"
        type="text" placeholder="Username"
        v-model="username"
        autofocus>
      <a class="shadow" @click="submit">Submit</a>
    </div>
  </div>
</template>

<script>
export default {

  name: 'Login',

  data () {
    return {
      username: ''
    }
  },

  methods: {
    submit () {
      if (this.username) {
        this.$emit('submit', this.username)
        this.username = ''
      }
    }
  }

}
</script>

<style lang="scss">
#login-page {
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    color: white;
  }

  .login {
    display: flex;
    width: 100%;
    padding: 8px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    input {
      flex-grow: 1;
      width: 100%;
      max-width: 240px;
    }

    a {
      flex-shrink: 0;
    }
  }
}
</style>
