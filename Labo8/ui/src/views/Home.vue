<template>
  <div id="home-page" class="full-center-page">
    <h1>Share your profile to...<br/>Only you!</h1>
    <h2>Wanna try?</h2>

    <div class="buttons">
      <LinkButton link="/signup">Signup</LinkButton>
      <LinkButton link="/login" accent>Login</LinkButton>
    </div>

  </div>
</template>

<script>
import LinkButton from '@/components/LinkButton'

export default {
  name: 'Home',
  components: {
    LinkButton
  }
}
</script>

<style lang="scss">
#home-page {
  text-align: center;

  .buttons {
    display: flex;
    justify-content: center;
  }
}
</style>
