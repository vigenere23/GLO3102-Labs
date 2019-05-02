<template>
  <button class="square-button" :class="{ accent, 'no-margin': noMargin }" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'SquareButton',
  props: {
    accent: Boolean,
    noMargin: Boolean
  }
}
</script>

<style lang="scss">
.square-button {
  text-transform: uppercase;
  display: inline-block;
  margin: 4px 16px;
  padding: 10px 16px;
  color: black;
  background-color: white;
  border: solid 3px black;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;

  &.no-margin {
    margin: 4px 0;
  }

  &:hover, &:focus {
    color: white;
    background-color: black;
  }

  &.accent {
    background-color: #1e88e5;
    border-color: #1e88e5;
    color: white;

    &:hover, &:focus {
      color: #1e88e5;
      background-color: white;
    }
  }
}
</style>
