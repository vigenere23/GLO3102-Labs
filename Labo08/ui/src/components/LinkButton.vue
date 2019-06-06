<template>
  <router-link tag="div" :to="link">
    <SquareButton :accent="accent">
      <slot></slot>
    </SquareButton>
  </router-link>
</template>

<script>
import SquareButton from '@/components/SquareButton'

export default {
  name: 'LinkButton',
  components: {
    SquareButton
  },
  props: {
    accent: Boolean,
    link: String
  }
}
</script>
