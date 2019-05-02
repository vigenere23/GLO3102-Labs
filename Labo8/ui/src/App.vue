<template>
  <div id="app">
    <Toaster></Toaster>
    <router-view/>
  </div>
</template>

<script>
import Toaster from '@/components/Toaster'

export default {
  name: 'App',
  components: {
    Toaster
  }
}
</script>

<style lang="scss">
body {
  margin: 0;

  * {
    box-sizing: border-box;
  }
}

#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  h1 {
    font-size: 42px;
    font-weight: 500;
  }

  h2 {
    font-size: 32px;
    font-weight: 400;
  }

  .full-center-page {
    width: 100%;
    padding-top: 20vh;
  }
}
</style>
