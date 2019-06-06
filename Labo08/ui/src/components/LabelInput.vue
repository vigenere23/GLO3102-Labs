<template>
  <div class="label-input" :class="{ focused, error }">
    <input
      @focus="focus" @blur="blur" @input="input"
      :type="type" :placeholder="placeholder" :name="label"
      :value="value"
    >
    <span class="label">{{ label }}</span>
  </div>
</template>

<script>
export default {
  name: 'LabelInput',
  props: {
    type: String,
    label: String,
    value: {
      type: String,
      required: false
    },
    placeholder: {
      type: String,
      required: false
    }
  },
  data () {
    return {
      focused: false,
      error: false
    }
  },
  methods: {
    focus () { this.focused = true },
    blur () {
      this.focused = false
      this.error = !this.value
    },
    input (e) { this.$emit('input', e.target.value) }
  }
}
</script>

<style lang="scss">
.label-input {
  margin: 16px 0;
  width: 100%;

  input {
    border: solid 3px black;
    padding: 0.5em;
    font-size: 16px;
    width: 100%;
  }

  .label {
    display: block;
  }

  &.focused {
    input {
      border-color: #1e88e5;
    }

    .label {
      color: #1e88e5;
    }
  }

  &:not(.focused).error {
    input {
      border-color: #d32c2c;
    }
  }
}
</style>
