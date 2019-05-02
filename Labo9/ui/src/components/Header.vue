<template>
  <div class="header accent">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss">
.header {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 16px;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  color: white;
  z-index: 50;
}
</style>
