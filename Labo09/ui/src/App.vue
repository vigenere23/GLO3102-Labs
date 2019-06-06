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

  button, a, input, textarea {
    padding: 16px;
    margin: 4px;
    border-radius: 4px;
    border: none;
    font-family: inherit;
    font-size: 16px;
    line-height: 16px;
    font-weight: 500;
    background: none;
    background-color: white;
  }

  button, a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    &.material-icons {
      padding: 12px 16px;
    }
  }
}

#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;

  h1 {
    font-size: 42px;
    font-weight: 500;
  }

  .accent {
    background-color: #1e88e5;
  }

  .shadow {
    box-shadow:  0px 1px 5px 0px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14),
      0px 3px 1px -2px rgba(0, 0, 0, 0.12);
    transition: all 0.2s ease-in-out;
  }

  input.shadow:focus, textarea.shadow:focus {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14),
      0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    transition: all 0.2s ease-in-out;
  }

  button.shadow:hover:not(:active), a.shadow:hover:not(:active) {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14),
      0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    transition: all 0.2s ease-in-out;
  }

  button.flat:hover, a.flat:hover {
    background-color: #eee;
  }

  button.flat:active, a.flat:active {
    background-color: #cecece;
  }
}
</style>
