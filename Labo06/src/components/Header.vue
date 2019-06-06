<template>
  <div id="header">
    <p class="logo">Weather Pro</p>
    <img src="https://img.icons8.com/color/48/000000/sun.png">
  </div>
</template>

<script>
export default {
  name: 'Weather'
}
</script>

<style lang="scss">
#header {
  width: 100%;
  background-color: white;
  padding: 0 24px;
  display: flex;
  align-items: center;

  .logo {
    font-size: 20px;
    font-weight: 500;
  }

  img {
    width: 36px;
    margin-left: 4px;
  }
}
</style>
